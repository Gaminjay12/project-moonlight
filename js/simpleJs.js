const appearance = document.style
const show = document.style.display = 'block'
const hide = document.style.display = 'none'
const cssShapes = {
    pill: {
        borderRadius: '20px',
        padding: '10px'
    }
}
function applyPreset(el, presetName) {
  const styles = presets[presetName];
  if (!styles) {
    console.warn(`Preset "${presetName}" not found.`);
    return;
  }
  Object.entries(styles).forEach(([prop, val]) => {
    el.style[prop] = val;
  });
}
