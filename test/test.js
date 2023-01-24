let username = "Prosperety";

// Set a Cookie
function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie =
        cName + "=" + cValue + "; " + expires + "; path=/test.html" + 'domain=127.0.0.1:5500; SameSite=None';
}

// Apply setCookie
setCookie("username", username, 30);