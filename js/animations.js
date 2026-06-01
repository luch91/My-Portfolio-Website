// ============================================================
//  animations.js
//  Called by app.js via ANIM.init() AFTER all content is in DOM.
//  animations.js itself does NOT touch the DOM on load.
// ============================================================

// ── NAV + HAMBURGER (safe to wire up immediately) ──────────
document.addEventListener('DOMContentLoaded', function () {

  // Nav scroll shrink
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // Hamburger
  const hamburger   = document.querySelector('.nav-hamburger');
  const mobileNavEl = document.getElementById('mobile-nav');
  if (hamburger && mobileNavEl) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!open));
      mobileNavEl.classList.toggle('open', !open);
      mobileNavEl.setAttribute('aria-hidden', String(open));
      document.body.style.overflow = open ? '' : 'hidden';
    });
    mobileNavEl.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNavEl.classList.remove('open');
        mobileNavEl.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

});

// ── TYPEWRITER ─────────────────────────────────────────────
function startTypewriter(titles) {
  const el = document.getElementById('hero-typewriter');
  if (!el || !titles || !titles.length) return;
  let ti = 0, ci = 0, deleting = false;
  function type() {
    const current = titles[ti];
    if (!deleting) {
      el.textContent = current.slice(0, ++ci);
      if (ci === current.length) { deleting = true; setTimeout(type, 2200); return; }
      setTimeout(type, 70);
    } else {
      el.textContent = current.slice(0, --ci);
      if (ci === 0) { deleting = false; ti = (ti + 1) % titles.length; setTimeout(type, 400); return; }
      setTimeout(type, 40);
    }
  }
  setTimeout(type, 600);
}

// ── COUNTER ANIMATION ──────────────────────────────────────
function animateCounter(el, target, suffix) {
  const duration = 1400;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
}

// ── MAIN INIT — called by app.js after all content rendered ─
function initAllAnimations() {

  // Intro: only run on homepage
  const overlay = document.getElementById('intro-overlay');
  const nameEl  = document.getElementById('intro-name');
  if (overlay && nameEl && !sessionStorage.getItem('intro-done')) {
    sessionStorage.setItem('intro-done', '1');
    document.body.style.overflow = 'hidden';
    const spans = 'Judith Oluchi Ekeleme'.split('').map(ch => {
      const s = document.createElement('span');
      s.textContent = ch;
      nameEl.appendChild(s);
      return s;
    });
    spans.forEach((s, i) => setTimeout(() => s.classList.add('visible'), 60 + i * 55));
    setTimeout(() => {
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
    }, 60 + spans.length * 55 + 500);
  } else if (overlay) {
    overlay.classList.add('hidden');
  }

  // Scroll reveal — only animate elements NOT already in viewport
  const revealIO = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-visible');
        revealIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  // Animate cards and timeline items when they scroll into view
  document.querySelectorAll(
    '.project-card, .cs-card, .timeline-item, .skill-group, .cert-badge, .blog-card, .blog-full-card, .cs-insight-card'
  ).forEach((el, i) => {
    el.dataset.animDelay = i * 60;
    revealIO.observe(el);
  });

  // Section headings underline
  const headingIO = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('line-drawn'), 150);
        headingIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.section-heading').forEach(el => headingIO.observe(el));

  // Counter animation
  const metricsBar = document.getElementById('metrics-bar');
  if (metricsBar) {
    const counterIO = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        metricsBar.querySelectorAll('[data-count]').forEach(el =>
          animateCounter(el, parseInt(el.dataset.count, 10), el.dataset.suffix || '')
        );
        counterIO.unobserve(entries[0].target);
      }
    }, { threshold: 0.4 });
    counterIO.observe(metricsBar);
  }

  // Timeline line draw
  const timelineLine = document.querySelector('.timeline-line');
  if (timelineLine) {
    const tlIO = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { timelineLine.classList.add('drawn'); tlIO.unobserve(entries[0].target); }
    }, { threshold: 0.1 });
    tlIO.observe(timelineLine);
  }

  // Reveal sections
  document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));
}

window.ANIM = { startTypewriter, initAllAnimations, animateCounter };
