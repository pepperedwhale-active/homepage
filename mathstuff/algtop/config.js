 document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('math.ltx_Math').forEach(node => {
    const ann = node.querySelector('annotation[encoding="application/x-tex"]');
    if (!ann) return;

    const tex = ann.textContent.trim();

    const span = document.createElement('span');
    span.textContent = '\\(' + tex + '\\)';

    node.replaceWith(span);
  });

  if (window.MathJax) {
    MathJax.typeset();
  }
}); 
