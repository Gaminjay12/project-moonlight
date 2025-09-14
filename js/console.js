const html = document.documentElement;
const textbox = document.getElementById('js-textbox');


function runJs() {
    var result = textbox.value
    eval(result)
}
const params = new URLSearchParams(window.location.search);

if (params.get('dev') === 'true') {
  const debugBtn = document.getElementById('debug-opts');
  if (debugBtn) {
    debugBtn.style.display = 'block';
  }
}
function buttonBlue() {
    html.style.backgroundColor = 'blue'
}
function buttonBlack() {
    html.style.backgroundColor = 'black'
}
