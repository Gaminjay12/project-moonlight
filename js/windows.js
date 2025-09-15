const headers = document.querySelectorAll('.header');

headers.forEach(header => {
  const windowEl = header.parentElement; // Move the parent window
  let offsetX = 0, offsetY = 0, isDragging = false;

  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - windowEl.offsetLeft;
    offsetY = e.clientY - windowEl.offsetTop;
    windowEl.style.zIndex = 1000;
    document.body.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    windowEl.style.left = (e.clientX - offsetX) + 'px';
    windowEl.style.top = (e.clientY - offsetY) + 'px';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    windowEl.style.zIndex = 1;
    document.body.style.userSelect = '';
  });
});

function toggleWindow(id) {
  const windowEl = document.getElementById(id);
  console.log('Toggling window:', id, 'Current display:', windowEl.style.display, 'Computed:', getComputedStyle(windowEl).display);
  if (windowEl.style.display === 'none' || getComputedStyle(windowEl).display === 'none') {
    windowEl.style.display = 'block';
    console.log('Set display to block for', id);
  } else {
    windowEl.style.display = 'none';
    console.log('Set display to none for', id);
  }}

