// ============================================================
//  animations.js — All animations initialise after DOM + app.js
//  renders content. Called by app.js via window.ANIM.init()
// ============================================================

// ── INTRO OVERLAY ──────────────────────────────────────────
// Called immediately — overlay is already in HTML, not rendered by app.js
document.addEventListener('DOMContentLoaded', function () {
  // Sub-pages that don't load app.js still need js-ready
  if (!document.body.classList.contains('js-ready')) {
    document.body.classList.add('js-ready');
  }

  // ── INTRO ───────────────────────────────────────────────
  const overlay = document.getElementById('intro-overlay');
  const nameEl  = document.getElementById('intro-name');

  if (overlay && nameEl) {
    document.body.classList.add('intro-active');

    const name  = 'Judith Oluchi Ekeleme';
    const spans = name.split('').map(ch => {
      const s = document.createElement('span');
      s.textContent = ch;
      nameEl.appendChild(s);
      return s;
    });

    spans.forEach((s, i) => {
      setTimeout(() => {
        s.classList.add('visible');
        if (typeof SFX !== 'undefined') SFX.tick();
      }, 60 + i * 55);
    });

    const totalDelay = 60 + spans.length * 55 + 600;
    setTimeout(() => {
      overlay.classList.add('hidden');
      document.body.classList.remove('intro-active');
      document.querySelectorAll('.hero-photo, .hero-text').forEach(el => el.classList.add('loaded'));
    }, totalDelay);
  } else {
    // No intro overlay on sub-pages — just show hero elements
    document.querySelectorAll('.hero-photo, .hero-text').forEach(el => el.classList.add('loaded'));
  }

  // ── NAV SCROLL ──────────────────────────────────────────
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 60);
      document.querySelectorAll('section[id]').forEach(sec => {
        const top    = sec.offsetTop - 120;
        const bottom = top + sec.offsetHeight;
        const link   = nav.querySelector(`a[href="#${sec.id}"]`);
        if (link) link.classList.toggle('active', y >= top && y < bottom);
      });
    }, { passive: true });
  }

  // ── HAMBURGER ───────────────────────────────────────────
  const hamburger  = document.querySelector('.nav-hamburger');
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
  const TYPING_SPEED   = 70;
  const DELETING_SPEED = 40;
  const PAUSE_AFTER    = 2200;
  const PAUSE_BEFORE   = 400;

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
  setTimeout(type, 2800);
}

// ── ANIMATED COUNTER ───────────────────────────────────────
function animateCounter(el, target, suffix) {
  const duration = 1600;
  const start    = performance.now();
  function step(now) {
    const p    = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
}

// ── INIT — called by app.js after all content is rendered ──
function initAllAnimations() {

  // Generic reveal observer
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));
  window._observeReveal = el => revealIO.observe(el);

  // Section heading underline draw
  const headingIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('line-drawn'), 200);
        headingIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.section-heading').forEach(el => headingIO.observe(el));
  window._observeHeading = el => headingIO.observe(el);

  // Metric counters
  const metricsBar = document.getElementById('metrics-bar');
  if (metricsBar) {
    const counterIO = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        metricsBar.querySelectorAll('[data-count]').forEach(el => {
          animateCounter(el, parseInt(el.dataset.count, 10), el.dataset.suffix || '');
        });
        counterIO.unobserve(entries[0].target);
      }
    }, { threshold: 0.4 });
    counterIO.observe(metricsBar);
  }

  // Timeline line draw
  const timelineLine = document.querySelector('.timeline-line');
  if (timelineLine) {
    const tlIO = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        timelineLine.classList.add('drawn');
        tlIO.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });
    tlIO.observe(timelineLine);
  }

  // Staggered reveals for cards
  function staggerReveal(containerEl, childSelector, delayStep) {
    if (!containerEl) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        containerEl.querySelectorAll(childSelector).forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * delayStep);
        });
        io.unobserve(entries[0].target);
      }
    }, { threshold: 0.08 });
    io.observe(containerEl);
  }

  staggerReveal(document.getElementById('projects-grid'),    '.project-card', 80);
  staggerReveal(document.getElementById('case-studies-grid'),'.cs-card',       100);
  staggerReveal(document.getElementById('timeline'),         '.timeline-item', 100);
  staggerReveal(document.getElementById('skills-grid'),      '.skill-group',   80);
  staggerReveal(document.getElementById('certs-track'),      '.cert-badge',    60);
  staggerReveal(document.getElementById('blog-grid'),        '.blog-card',     80);

  // Skill tags stagger inside groups
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    const skillIO = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        skillsGrid.querySelectorAll('.skill-group').forEach((group, gi) => {
          setTimeout(() => {
            group.classList.add('visible');
            group.querySelectorAll('.skill-tag').forEach((tag, ti) => {
              setTimeout(() => tag.classList.add('visible'), ti * 35);
            });
          }, gi * 80);
        });
        skillIO.unobserve(entries[0].target);
      }
    }, { threshold: 0.08 });
    skillIO.observe(skillsGrid);
  }
}

// ── EXPORT ─────────────────────────────────────────────────
window.ANIM = { startTypewriter, initAllAnimations, animateCounter };
