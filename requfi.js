var url = "https://48ab183fac47e3.lhr.life";

var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.send();
