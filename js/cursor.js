// ============================================================
//  cursor.js — Custom gold cursor with trailing ring effect
// ============================================================
(function () {
  if (window.matchMedia('(pointer: coarse)').matches) return; // skip on touch

  const cursor  = document.getElementById('cursor');
  const trail   = document.getElementById('cursor-trail');
  if (!cursor || !trail) return;

  let mx = -100, my = -100;
  let tx = -100, ty = -100;

  // Move dot instantly
  window.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  // Animate trail with lag
  function animateTrail() {
    tx += (mx - tx) * 0.14;
    ty += (my - ty) * 0.14;
    trail.style.left = tx + 'px';
    trail.style.top  = ty + 'px';
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // Hover state on interactive elements
  const interactiveSelector = 'a, button, [role="button"], .cs-card, .project-card, .blog-card, .cert-badge, input, textarea, select';

  function addHover()    { cursor.classList.add('hover');    trail.style.opacity = '0.5'; }
  function removeHover() { cursor.classList.remove('hover'); trail.style.opacity = '1';   }

  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveSelector)) addHover();
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactiveSelector)) removeHover();
  });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; trail.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; trail.style.opacity = '1'; });
})();
