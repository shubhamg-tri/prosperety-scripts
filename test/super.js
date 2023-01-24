let username = "Prosperety";

// Set a Cookie
function setPropsCookie(cName, cValue, expDays) {
    console.log('Called')
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie =
        cName + "=" + cValue + "; " + expires + "; path=/";
}

// Apply setCookie
// setPropsCookie("username", username, 30);


(async (_) => {
setPropsCookie("username", username, 30);
})();