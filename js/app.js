// ============================================================
//  app.js — Renders all sections from DATA, wires interactions.
//  ANIM.initAllAnimations() is called at the very end after all
//  content is injected into the DOM.
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  const D = window.DATA;
  if (!D) { console.error('data.js not loaded'); return; }

  // ── UTILITY ──────────────────────────────────────────────
  function esc(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g,  '&amp;')
      .replace(/</g,  '&lt;')
      .replace(/>/g,  '&gt;')
      .replace(/"/g,  '&quot;')
      .replace(/'/g,  '&#39;');
  }

  // ── HERO ─────────────────────────────────────────────────
  const taglineEl = document.getElementById('hero-tagline');
  if (taglineEl) taglineEl.textContent = D.personal.tagline;

  // ── ABOUT BIO ────────────────────────────────────────────
  const bioEl = document.getElementById('about-bio');
  if (bioEl) {
    bioEl.innerHTML = D.personal.bio
      .split('\n\n')
      .map(p => `<p>${esc(p)}</p>`)
      .join('');
  }

  // ── METRICS ──────────────────────────────────────────────
  const metricsEl = document.getElementById('metrics-inner');
  if (metricsEl) {
    metricsEl.innerHTML = D.metrics.map(m => `
      <div class="metric-item">
        <span class="metric-value" data-count="${m.value}" data-suffix="${esc(m.suffix)}">0${esc(m.suffix)}</span>
        <span class="metric-label">${esc(m.label)}</span>
      </div>`).join('');
  }

  // ── PROJECTS ─────────────────────────────────────────────
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.innerHTML = D.projects.map(p => `
      <article class="project-card" aria-label="${esc(p.title)}">
        <div class="project-card-header">
          <span class="project-type-tag">${esc(p.type)}</span>
          <span class="project-year">${esc(p.year)}</span>
        </div>
        <h3 class="project-title">${esc(p.title)}</h3>
        ${p.personal ? `<span class="project-personal-tag">Personal Project</span>` : ''}
        <p class="project-desc">${esc(p.description)}</p>
        <div class="project-stack">
          ${p.stack.map(s => `<span class="stack-pill">${esc(s)}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="project-link">Live ↗</a>` : ''}
          ${p.prototypeUrl ? `<a href="${p.prototypeUrl}" target="_blank" rel="noopener" class="project-link project-link--secondary">Platform Prototype ↗</a>` : ''}
          ${p.adminPrototypeUrl ? `<a href="${p.adminPrototypeUrl}" target="_blank" rel="noopener" class="project-link project-link--secondary">Admin Prototype ↗</a>` : ''}
          ${p.caseStudyId ? `<a href="case-studies.html#${p.caseStudyId}" class="project-link project-link--secondary">Case Study →</a>` : ''}
          ${p.blogUrl ? `<a href="${p.blogUrl}" class="project-link project-link--secondary">Read Post →</a>` : ''}
        </div>
      </article>`).join('');
  }

  // ── CASE STUDIES TEASER GRID ─────────────────────────────
  const csGrid = document.getElementById('case-studies-grid');
  if (csGrid) {
    csGrid.innerHTML = D.caseStudies.map(cs => `
      <a href="case-studies.html#${cs.id}" class="cs-card" aria-label="${esc(cs.title)} case study">
        <div class="cs-card-cover" style="background:linear-gradient(135deg,${cs.coverColor},#0F1117);">
          <div class="cs-card-stats">
            ${cs.stats.map(s => `
              <div class="cs-stat">
                <span class="cs-stat-value" style="color:${cs.accentColor}">${esc(s.value)}</span>
                <span class="cs-stat-label">${esc(s.label)}</span>
              </div>`).join('')}
          </div>
        </div>
        <div class="cs-card-body">
          <h3 class="cs-card-title">${esc(cs.title)}</h3>
          <p class="cs-card-subtitle">${esc(cs.subtitle)}</p>
          <p class="cs-card-role">${esc(cs.role)}</p>
          <div class="cs-card-cta">
            Read Case Study
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </a>`).join('');
  }

  // ── EXPERIENCE / TIMELINE ────────────────────────────────
  const timeline = document.getElementById('timeline');
  if (timeline) {
    timeline.innerHTML = D.experience.map(job => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          <div>
            <h3 class="timeline-title">${esc(job.title)}</h3>
            <span class="timeline-company">
              ${job.companyUrl
                ? `<a href="${job.companyUrl}" target="_blank" rel="noopener">${esc(job.company)}</a>`
                : esc(job.company)}
            </span>
          </div>
          <span class="timeline-period">${esc(job.period)}</span>
        </div>
        <p class="timeline-desc">${esc(job.description)}</p>
        <ul class="timeline-highlights">
          ${job.highlights.map(h => `<li class="timeline-highlight">${esc(h)}</li>`).join('')}
        </ul>
      </div>`).join('');
  }

  // ── SKILLS ───────────────────────────────────────────────
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    skillsGrid.innerHTML = D.skills.map(group => `
      <div class="skill-group">
        <div class="skill-category">${esc(group.category)}</div>
        <div class="skill-tags">
          ${group.items.map(item => `<span class="skill-tag">${esc(item)}</span>`).join('')}
        </div>
      </div>`).join('');
  }

  // ── CERTIFICATIONS ───────────────────────────────────────
  const certsTrack = document.getElementById('certs-track');
  if (certsTrack) {
    certsTrack.innerHTML = D.certifications.map(cert => `
      <div class="cert-badge">
        <span class="cert-issuer">${esc(cert.issuer)}</span>
        <span class="cert-title">${esc(cert.title)}</span>
      </div>`).join('');
  }

  // ── BLOG TEASER (3 most recent on homepage) ───────────────
  const blogGrid = document.getElementById('blog-grid');
  if (blogGrid) {
    const preview = D.blogPosts.slice(0, 3);
    blogGrid.innerHTML = preview.map(post => buildBlogCard(post)).join('') +
      `<a href="blog.html" class="blog-card blog-card--more" aria-label="View all posts">
        <div class="blog-card-body" style="justify-content:center;align-items:center;text-align:center;gap:16px;min-height:200px;">
          <span style="font-size:2rem;color:var(--gold)">→</span>
          <span style="font-family:var(--font-serif);font-size:1.1rem;color:var(--text)">View All Posts</span>
          <span style="font-size:0.82rem;color:var(--text-muted)">${D.blogPosts.length} articles, tutorials &amp; videos</span>
        </div>
      </a>`;
  }

  function buildBlogCard(post) {
    const bannerBg = {
      article:  'linear-gradient(135deg,#1A1500,#0F1117)',
      tutorial: 'linear-gradient(135deg,#001A20,#0F1117)',
      video:    'linear-gradient(135deg,#1A0008,#0F1117)',
    }[post.type] || 'linear-gradient(135deg,#1A1D27,#0F1117)';

    const isVideo  = post.type === 'video';
    const hasVideo = isVideo && (post.videoFile || post.videoUrl);

    const href = isVideo
      ? (hasVideo ? `blog.html#${post.id}` : 'blog.html')
      : (post.url ? post.url : (post.filePath ? post.filePath : 'blog.html'));

    const target = post.url ? 'target="_blank" rel="noopener"' : '';

    return `
      <a href="${href}" ${target} class="blog-card blog-card--${post.type}" aria-label="${esc(post.title)}">
        <div class="blog-card-banner" style="background:${bannerBg}">
          <span class="blog-type-badge blog-type-badge--${post.type}">${post.type}</span>
          ${isVideo ? `<div class="blog-video-placeholder">
            <div class="blog-video-play">▶</div>
            ${!hasVideo ? `<span class="blog-coming-soon">Coming Soon</span>` : ''}
          </div>` : ''}
        </div>
        <div class="blog-card-body">
          <h3 class="blog-card-title">${esc(post.title)}</h3>
          <p class="blog-card-excerpt">${esc(post.excerpt)}</p>
          <div class="blog-card-meta">
            <span>${esc(post.date)}</span>
            ${post.readTime ? `<span>· ${esc(post.readTime)}</span>` : ''}
          </div>
          <div class="blog-card-tags">
            ${(post.tags || []).map(t => `<span class="blog-tag">${esc(t)}</span>`).join('')}
          </div>
          <span class="blog-card-cta">${isVideo ? (hasVideo ? '▶ Watch' : 'Coming Soon') : 'Read →'}</span>
        </div>
      </a>`;
  }

  // ── KEYBOARD ESCAPE for modals ────────────────────────────
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.open').forEach(m => {
        m.classList.remove('open');
        m.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        const v = m.querySelector('video');
        if (v) { v.pause(); v.src = ''; }
      });
    }
  });

  // ── INIT ALL ANIMATIONS after DOM is populated ────────────
  if (window.ANIM && window.ANIM.initAllAnimations) {
    window.ANIM.initAllAnimations();
  }
  if (window.ANIM && window.ANIM.startTypewriter) {
    window.ANIM.startTypewriter(D.personal.titles);
  }

});
