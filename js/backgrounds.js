function backgroundBlue() {
    document.cookie = "background=blue";
}
function backgroundBlack() {
    document.cookie = "background=black";
}
function backgroundRed() {
    document.cookie = "background=red";
}
function backgroundGreen() {
    document.cookie = "background=green";
    document.style
}
function loadCookie() {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = value;
        return acc;
    }, {});
    const background = cookies['background'] || 'blue';
    document.body.className = background;
}
window.onload = loadCookie;