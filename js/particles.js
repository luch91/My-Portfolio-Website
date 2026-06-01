// ============================================================
//  particles.js — Canvas particle field for hero background
// ============================================================
(function () {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const CONFIG = {
    count:        90,
    minRadius:    1,
    maxRadius:    2.5,
    speed:        0.28,
    connectDist:  130,
    lineOpacity:  0.12,
    color:        '201,169,110',   // gold RGB
    mouseInfluence: 120,
  };

  let W, H, particles = [], mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function rand(min, max) { return min + Math.random() * (max - min); }

  function createParticle() {
    return {
      x:  rand(0, W),
      y:  rand(0, H),
      vx: rand(-CONFIG.speed, CONFIG.speed),
      vy: rand(-CONFIG.speed, CONFIG.speed),
      r:  rand(CONFIG.minRadius, CONFIG.maxRadius),
      opacity: rand(0.2, 0.7),
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: CONFIG.count }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Mouse repulsion
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONFIG.mouseInfluence) {
        const force = (CONFIG.mouseInfluence - dist) / CONFIG.mouseInfluence;
        p.vx += (dx / dist) * force * 0.4;
        p.vy += (dy / dist) * force * 0.4;
      }

      // Dampen velocity
      p.vx *= 0.995;
      p.vy *= 0.995;

      // Ensure minimum movement
      if (Math.abs(p.vx) < 0.05) p.vx += rand(-0.1, 0.1);
      if (Math.abs(p.vy) < 0.05) p.vy += rand(-0.1, 0.1);

      // Clamp speed
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > CONFIG.speed * 3) {
        p.vx = (p.vx / speed) * CONFIG.speed * 3;
        p.vy = (p.vy / speed) * CONFIG.speed * 3;
      }

      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${CONFIG.color},${p.opacity})`;
      ctx.fill();

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const cx = p.x - q.x;
        const cy = p.y - q.y;
        const d  = Math.sqrt(cx * cx + cy * cy);
        if (d < CONFIG.connectDist) {
          const alpha = CONFIG.lineOpacity * (1 - d / CONFIG.connectDist);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${CONFIG.color},${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  // Mouse tracking
  window.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
  window.addEventListener('resize', () => { resize(); });

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  init();
  draw();
})();
