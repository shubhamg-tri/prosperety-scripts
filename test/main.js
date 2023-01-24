var date = new Date();
date.setTime(date.getTime() + (7*24*60*60*1000));
var expires = "; expires=" + date.toUTCString();
document.cookie = "example=Hello World!" + expires + "; path=/";