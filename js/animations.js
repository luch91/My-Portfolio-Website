// ============================================================
//  animations.js — Scroll animations, typewriter, counters,
//                  timeline draw, heading underline draw
// ============================================================

// ── INTRO OVERLAY ──────────────────────────────────────────
(function runIntro() {
  const overlay  = document.getElementById('intro-overlay');
  const nameEl   = document.getElementById('intro-name');
  if (!overlay || !nameEl) return;

  document.body.classList.add('intro-active');

  const name = 'Judith Oluchi Ekeleme';
  const spans = name.split('').map(ch => {
    const s = document.createElement('span');
    s.textContent = ch === ' ' ? ' ' : ch;
    nameEl.appendChild(s);
    return s;
  });

  // Stagger letter reveal
  spans.forEach((s, i) => {
    setTimeout(() => {
      s.classList.add('visible');
      if (typeof SFX !== 'undefined') SFX.tick();
    }, 60 + i * 55);
  });

  // Fade out overlay after reveal
  const totalDelay = 60 + spans.length * 55 + 600;
  setTimeout(() => {
    overlay.classList.add('hidden');
    document.body.classList.remove('intro-active');
    // Trigger hero elements
    document.querySelectorAll('.hero-photo, .hero-text').forEach(el => el.classList.add('loaded'));
  }, totalDelay);
})();

// ── NAV SCROLL SHRINK ──────────────────────────────────────
(function navScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 60);
    // Highlight active nav link
    document.querySelectorAll('section[id]').forEach(sec => {
      const top    = sec.offsetTop - 120;
      const bottom = top + sec.offsetHeight;
      const link   = nav.querySelector(`a[href="#${sec.id}"]`);
      if (link) link.classList.toggle('active', y >= top && y < bottom);
    });
    lastY = y;
  }, { passive: true });
})();

// ── HAMBURGER MENU ─────────────────────────────────────────
(function mobileNav() {
  const btn      = document.querySelector('.nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!btn || !mobileNav) return;

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    mobileNav.classList.toggle('open', !open);
    mobileNav.setAttribute('aria-hidden', String(open));
    document.body.style.overflow = open ? '' : 'hidden';
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });
})();

// ── TYPEWRITER ─────────────────────────────────────────────
function startTypewriter(titles) {
  const el = document.getElementById('hero-typewriter');
  if (!el || !titles || !titles.length) return;

  let ti = 0, ci = 0, deleting = false;
  const TYPING_SPEED  = 70;
  const DELETING_SPEED = 40;
  const PAUSE_AFTER   = 2200;
  const PAUSE_BEFORE  = 400;

  function type() {
    const current = titles[ti];
    if (!deleting) {
      el.textContent = current.slice(0, ci + 1);
      if (typeof SFX !== 'undefined') SFX.tick();
      ci++;
      if (ci === current.length) {
        deleting = true;
        setTimeout(type, PAUSE_AFTER);
        return;
      }
      setTimeout(type, TYPING_SPEED);
    } else {
      el.textContent = current.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        ti = (ti + 1) % titles.length;
        setTimeout(type, PAUSE_BEFORE);
        return;
      }
      setTimeout(type, DELETING_SPEED);
    }
  }

  // Start after intro
  setTimeout(type, 2800);
}

// ── SCROLL REVEAL (Intersection Observer) ──────────────────
(function initReveal() {
  const opts = { threshold: 0.15, rootMargin: '0px 0px -60px 0px' };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, opts);

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Re-observe dynamically added elements
  window._observeReveal = el => io.observe(el);
})();

// ── SECTION HEADING UNDERLINE DRAW ─────────────────────────
(function initUnderlines() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('line-drawn'), 200);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.section-heading').forEach(el => io.observe(el));
  window._observeHeading = el => io.observe(el);
})();

// ── ANIMATED COUNTERS ──────────────────────────────────────
function animateCounter(el, target, suffix) {
  const duration = 1600;
  const start    = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3); // easeOutCubic
    const val  = Math.round(ease * target);
    el.textContent = val + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
}

(function initCounters() {
  const metricsBar = document.getElementById('metrics-bar');
  if (!metricsBar) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        metricsBar.querySelectorAll('[data-count]').forEach(el => {
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          animateCounter(el, target, suffix);
        });
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  io.observe(metricsBar);
})();

// ── STAGGERED CARD REVEAL ──────────────────────────────────
function initStaggeredReveal(containerSelector, childSelector, delayStep = 80) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      container.querySelectorAll(childSelector).forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('visible');
          if (window._observeReveal) window._observeReveal(el);
        }, i * delayStep);
      });
      io.unobserve(entries[0].target);
    }
  }, { threshold: 0.1 });

  io.observe(container);
}

// ── TIMELINE LINE DRAW ─────────────────────────────────────
(function initTimeline() {
  const line = document.querySelector('.timeline-line');
  if (!line) return;

  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      line.classList.add('drawn');
      io.unobserve(entries[0].target);
    }
  }, { threshold: 0.1 });

  io.observe(line);
})();

// ── EXPORT for app.js ──────────────────────────────────────
window.ANIM = {
  startTypewriter,
  initStaggeredReveal,
  animateCounter,
};
