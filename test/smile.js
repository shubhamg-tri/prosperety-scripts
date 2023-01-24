let username = "Prosperety";

// Set a Cookie
function setProspCookie(cName, cValue, expDays) {
    console.log('Called')
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie =
        cName + "=" + cValue + "; " + expires + "; path=/" + 'domain=cdn.jsdelivr.net; SameSite=None';
}

// Apply setCookie
setProspCookie("username", username, 30);