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
