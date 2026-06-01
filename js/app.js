// ============================================================
//  app.js — Renders all sections from DATA, handles modals,
//           video player, and wires up all interactions.
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  const D = window.DATA;
  if (!D) { console.error('data.js not loaded'); return; }

  // ── HERO ─────────────────────────────────────────────────
  const taglineEl = document.getElementById('hero-tagline');
  if (taglineEl) taglineEl.textContent = D.personal.tagline;
  if (window.ANIM) ANIM.startTypewriter(D.personal.titles);

  // ── ABOUT BIO ────────────────────────────────────────────
  const bioEl = document.getElementById('about-bio');
  if (bioEl) {
    bioEl.innerHTML = D.personal.bio
      .split('\n\n')
      .map(p => `<p>${p}</p>`)
      .join('');
  }

  // ── METRICS ──────────────────────────────────────────────
  const metricsEl = document.getElementById('metrics-inner');
  if (metricsEl) {
    metricsEl.innerHTML = D.metrics.map(m => `
      <div class="metric-item">
        <span class="metric-value" data-count="${m.value}" data-suffix="${m.suffix}">0${m.suffix}</span>
        <span class="metric-label">${m.label}</span>
      </div>
    `).join('');
  }

  // ── PROJECTS ─────────────────────────────────────────────
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.innerHTML = D.projects.map((p, i) => {
      const links = buildProjectLinks(p);
      return `
        <article class="project-card" style="transition-delay:${i * 80}ms" aria-label="${p.title}">
          <div class="project-card-header">
            <span class="project-type-tag">${escHtml(p.type)}</span>
            <span class="project-year">${escHtml(p.year)}</span>
          </div>
          <h3 class="project-title">${escHtml(p.title)}</h3>
          <p class="project-desc">${escHtml(p.description)}</p>
          <div class="project-stack">
            ${p.stack.map(s => `<span class="stack-pill">${escHtml(s)}</span>`).join('')}
          </div>
          ${links}
        </article>
      `;
    }).join('');

    // Stagger reveal
    setTimeout(() => {
      const io = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          projectsGrid.querySelectorAll('.project-card').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80);
          });
          io.unobserve(entries[0].target);
        }
      }, { threshold: 0.1 });
      io.observe(projectsGrid);
    }, 0);
  }

  function buildProjectLinks(p) {
    const btns = [];
    if (p.liveUrl) {
      btns.push(`<a href="${p.liveUrl}" target="_blank" rel="noopener" class="project-link">
        Live
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>`);
    }
    if (p.prototypeUrl) {
      btns.push(`<a href="${p.prototypeUrl}" target="_blank" rel="noopener" class="project-link project-link--secondary">
        Platform Prototype ↗
      </a>`);
    }
    if (p.adminPrototypeUrl) {
      btns.push(`<a href="${p.adminPrototypeUrl}" target="_blank" rel="noopener" class="project-link project-link--secondary">
        Admin Prototype ↗
      </a>`);
    }
    if (p.caseStudyId) {
      btns.push(`<button class="project-link project-link--secondary" data-open-cs="${p.caseStudyId}">
        Case Study →
      </button>`);
    }
    return btns.length ? `<div class="project-links">${btns.join('')}</div>` : '';
  }

  // ── CASE STUDIES GRID ────────────────────────────────────
  const csGrid = document.getElementById('case-studies-grid');
  if (csGrid) {
    csGrid.innerHTML = D.caseStudies.map((cs, i) => `
      <article class="cs-card" data-open-cs="${cs.id}" role="button" tabindex="0"
        aria-label="Open ${cs.title} case study" style="transition-delay:${i * 100}ms">
        <div class="cs-card-cover" style="background: linear-gradient(135deg, ${cs.coverColor}, #0F1117);">
          <div class="cs-card-stats">
            ${cs.stats.map(s => `
              <div class="cs-stat">
                <span class="cs-stat-value" style="color:${cs.accentColor}">${escHtml(s.value)}</span>
                <span class="cs-stat-label">${escHtml(s.label)}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="cs-card-body">
          <h3 class="cs-card-title">${escHtml(cs.title)}</h3>
          <p class="cs-card-subtitle">${escHtml(cs.subtitle)}</p>
          <p class="cs-card-role">${escHtml(cs.role)}</p>
          <div class="cs-card-cta">
            Read Case Study
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </article>
    `).join('');

    // Stagger reveal
    setTimeout(() => {
      const io = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          csGrid.querySelectorAll('.cs-card').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
          io.unobserve(entries[0].target);
        }
      }, { threshold: 0.1 });
      io.observe(csGrid);
    }, 0);
  }

  // ── CASE STUDY MODAL ─────────────────────────────────────
  const csModal        = document.getElementById('cs-modal');
  const csModalContent = document.getElementById('cs-modal-content');
  const csModalClose   = csModal ? csModal.querySelector('.modal-close') : null;

  function openCsModal(id) {
    const cs = D.caseStudies.find(c => c.id === id);
    if (!cs || !csModal || !csModalContent) return;

    csModalContent.innerHTML = buildCsModalHTML(cs);
    csModal.classList.add('open');
    csModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (typeof SFX !== 'undefined') SFX.open();

    // Observe headings inside modal
    setTimeout(() => {
      csModal.querySelectorAll('.section-heading').forEach(el => {
        if (window._observeHeading) window._observeHeading(el);
      });
    }, 100);
  }

  function closeCsModal() {
    if (!csModal) return;
    csModal.classList.remove('open');
    csModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (typeof SFX !== 'undefined') SFX.close();
  }

  function buildCsModalHTML(cs) {
    const downloadBtn = cs.pdfPath
      ? `<a href="${cs.pdfPath}" download class="btn btn--primary">
           <span>Download Full PDF</span>
           <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3v8M4 8l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
         </a>`
      : '';
    const liveBtn = cs.liveUrl
      ? `<a href="${cs.liveUrl}" target="_blank" rel="noopener" class="btn btn--outline">Live Platform ↗</a>`
      : '';
    const protoBtn = cs.prototypeUrl
      ? `<a href="${cs.prototypeUrl}" target="_blank" rel="noopener" class="btn btn--outline">Platform Prototype ↗</a>`
      : '';
    const adminBtn = cs.adminPrototypeUrl
      ? `<a href="${cs.adminPrototypeUrl}" target="_blank" rel="noopener" class="btn btn--outline">Admin Prototype ↗</a>`
      : '';

    return `
      <div class="cs-modal-cover" style="background: linear-gradient(135deg, ${cs.coverColor} 0%, #0F1117 100%);">
        <div class="cs-modal-label" style="color:${cs.accentColor}">Case Study</div>
        <h2 class="cs-modal-title" id="cs-modal-title">${escHtml(cs.title)}</h2>
        <p class="cs-modal-subtitle">${escHtml(cs.subtitle)}</p>
        <div class="cs-modal-stats">
          ${cs.stats.map(s => `
            <div class="cs-modal-stat">
              <span class="cs-modal-stat-value" style="color:${cs.accentColor}">${escHtml(s.value)}</span>
              <span class="cs-modal-stat-label">${escHtml(s.label)}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="cs-modal-meta">
        <div class="cs-modal-meta-item">
          <label>Role</label>
          <span>${escHtml(cs.role)}</span>
        </div>
        <div class="cs-modal-meta-item">
          <label>Product Type</label>
          <span>${escHtml(cs.productType)}</span>
        </div>
        <div class="cs-modal-meta-item" style="grid-column: 1 / -1">
          <label>Scope</label>
          <span>${escHtml(cs.scope)}</span>
        </div>
      </div>

      <h3 class="cs-modal-insights-title">Key PM Insights</h3>
      ${cs.keyInsights.map((insight, i) => `
        <div class="cs-modal-insight">
          <span class="cs-modal-insight-num">0${i + 1}</span>
          <p>${escHtml(insight)}</p>
        </div>
      `).join('')}

      <div class="cs-modal-actions">
        ${downloadBtn}${liveBtn}${protoBtn}${adminBtn}
      </div>
    `;
  }

  if (csModalClose) csModalClose.addEventListener('click', closeCsModal);
  if (csModal) {
    csModal.querySelector('.modal-backdrop').addEventListener('click', closeCsModal);
  }

  // Delegate open clicks
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-open-cs]');
    if (trigger) { e.preventDefault(); openCsModal(trigger.dataset.openCs); }
  });
  document.addEventListener('keydown', e => {
    if (e.target.closest('[data-open-cs]') && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      openCsModal(e.target.closest('[data-open-cs]').dataset.openCs);
    }
    if (e.key === 'Escape') { closeCsModal(); closeVideoModal(); }
  });

  // ── EXPERIENCE / TIMELINE ────────────────────────────────
  const timeline = document.getElementById('timeline');
  if (timeline) {
    timeline.innerHTML = D.experience.map((job, i) => `
      <div class="timeline-item" style="transition-delay:${i * 100}ms">
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          <div>
            <h3 class="timeline-title">${escHtml(job.title)}</h3>
            <span class="timeline-company">
              ${job.companyUrl
                ? `<a href="${job.companyUrl}" target="_blank" rel="noopener">${escHtml(job.company)}</a>`
                : escHtml(job.company)
              }
            </span>
          </div>
          <span class="timeline-period">${escHtml(job.period)}</span>
        </div>
        <p class="timeline-desc">${escHtml(job.description)}</p>
        <ul class="timeline-highlights">
          ${job.highlights.map(h => `<li class="timeline-highlight">${escHtml(h)}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    // Stagger reveal
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = timeline.querySelectorAll('.timeline-item');
          items.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
          });
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    io.observe(timeline);
  }

  // ── SKILLS ───────────────────────────────────────────────
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    skillsGrid.innerHTML = D.skills.map((group, gi) => `
      <div class="skill-group" style="transition-delay:${gi * 80}ms">
        <div class="skill-category">${escHtml(group.category)}</div>
        <div class="skill-tags">
          ${group.items.map((item, ii) => `
            <span class="skill-tag" style="transition-delay:${gi * 80 + ii * 40}ms">${escHtml(item)}</span>
          `).join('')}
        </div>
      </div>
    `).join('');

    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        skillsGrid.querySelectorAll('.skill-group').forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('visible');
            el.querySelectorAll('.skill-tag').forEach((tag, j) => {
              setTimeout(() => tag.classList.add('visible'), j * 40);
            });
          }, i * 80);
        });
        io.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });
    io.observe(skillsGrid);
  }

  // ── CERTIFICATIONS ───────────────────────────────────────
  const certsTrack = document.getElementById('certs-track');
  if (certsTrack) {
    certsTrack.innerHTML = D.certifications.map((cert, i) => `
      <div class="cert-badge" style="transition-delay:${i * 60}ms">
        <span class="cert-issuer">${escHtml(cert.issuer)}</span>
        <span class="cert-title">${escHtml(cert.title)}</span>
      </div>
    `).join('');

    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        certsTrack.querySelectorAll('.cert-badge').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 60);
        });
        io.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });
    io.observe(certsTrack);
  }

  // ── BLOG ─────────────────────────────────────────────────
  const blogGrid = document.getElementById('blog-grid');
  if (blogGrid) {
    blogGrid.innerHTML = D.blogPosts.map((post, i) => buildBlogCard(post, i)).join('');

    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        blogGrid.querySelectorAll('.blog-card').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 80);
        });
        io.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });
    io.observe(blogGrid);
  }

  function buildBlogCard(post, i) {
    const bannerBg = {
      article:  'linear-gradient(135deg, #1A1500, #0F1117)',
      tutorial: 'linear-gradient(135deg, #001A20, #0F1117)',
      video:    'linear-gradient(135deg, #1A0008, #0F1117)',
    }[post.type] || 'linear-gradient(135deg, #1A1D27, #0F1117)';

    const isVideo   = post.type === 'video';
    const hasVideo  = isVideo && (post.videoFile || post.videoUrl);
    const hasFile   = post.filePath && !isVideo;
    const hasUrl    = post.url;

    const ctaLabel  = isVideo ? (hasVideo ? '▶ Watch' : 'Coming Soon') : 'Read →';
    const cardAttrs = isVideo
      ? (hasVideo ? `data-video-id="${post.id}" role="button" tabindex="0"` : '')
      : (hasUrl   ? `onclick="window.open('${post.url}','_blank')" role="button" tabindex="0"` : '')
        || (hasFile ? `onclick="window.open('${post.filePath}','_blank')" role="button" tabindex="0"` : '');

    const bannerContent = isVideo
      ? `<div class="blog-video-placeholder">
           <div class="blog-video-play">▶</div>
           ${!hasVideo ? `<span class="blog-coming-soon">Coming Soon</span>` : ''}
         </div>`
      : '';

    return `
      <article class="blog-card blog-card--${post.type}" ${cardAttrs}
        style="transition-delay:${i * 80}ms" aria-label="${escHtml(post.title)}">
        <div class="blog-card-banner" style="background:${bannerBg}">
          <span class="blog-type-badge blog-type-badge--${post.type}">${post.type}</span>
          ${bannerContent}
        </div>
        <div class="blog-card-body">
          <h3 class="blog-card-title">${escHtml(post.title)}</h3>
          <p class="blog-card-excerpt">${escHtml(post.excerpt)}</p>
          <div class="blog-card-meta">
            <span>${escHtml(post.date)}</span>
            ${post.readTime ? `<span>· ${escHtml(post.readTime)}</span>` : ''}
          </div>
          <div class="blog-card-tags">
            ${(post.tags || []).map(t => `<span class="blog-tag">${escHtml(t)}</span>`).join('')}
          </div>
          <span class="blog-card-cta">${ctaLabel}</span>
        </div>
      </article>
    `;
  }

  // ── VIDEO MODAL ──────────────────────────────────────────
  const videoModal        = document.getElementById('video-modal');
  const videoModalContent = document.getElementById('video-modal-content');
  const videoModalClose   = videoModal ? videoModal.querySelector('.modal-close') : null;

  function openVideoModal(id) {
    const post = D.blogPosts.find(p => p.id === id);
    if (!post || !videoModal || !videoModalContent) return;

    const src = post.videoUrl || (post.videoFile ? post.videoFile : null);
    if (!src) return;

    videoModalContent.innerHTML = `
      <div class="video-modal-title">${escHtml(post.title)}</div>
      <div class="video-modal-player">
        <video controls autoplay>
          <source src="${src}" />
          Your browser does not support the video tag.
        </video>
      </div>
    `;
    videoModal.classList.add('open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (typeof SFX !== 'undefined') SFX.open();
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove('open');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (videoModalContent) {
      // Stop video playback
      const v = videoModalContent.querySelector('video');
      if (v) { v.pause(); v.src = ''; }
      videoModalContent.innerHTML = '';
    }
    if (typeof SFX !== 'undefined') SFX.close();
  }

  if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.querySelector('.modal-backdrop').addEventListener('click', closeVideoModal);
  }

  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-video-id]');
    if (trigger) openVideoModal(trigger.dataset.videoId);
  });
  document.addEventListener('keydown', e => {
    if (e.target.closest('[data-video-id]') && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      openVideoModal(e.target.closest('[data-video-id]').dataset.videoId);
    }
  });

  // ── UTILITY ──────────────────────────────────────────────
  function escHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

});
