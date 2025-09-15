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
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// On page load, set background color
window.onload = function() {
    const bg = getCookie('background');
    if (bg) {
        document.body.style.backgroundColor = bg;
    }
};