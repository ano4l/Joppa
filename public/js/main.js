/* ==========================================================================
   JOPPA Construction — Main Application Logic
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     Data
     -------------------------------------------------------------------------- */
  const asset = (path) => 'assets/' + path.split('/').map(seg => encodeURIComponent(seg)).join('/');

  const services = [
    {
      n: '01',
      title: 'Bathroom Renovations',
      desc: 'Premium bathroom transformations with quality finishes and expert plumbing.',
      image: asset('Tokai Project/kitchen2-tiling.png'),
      full: {
        desc: 'Full bathroom transformations — from layout and waterproofing to tiling, fittings and final finishes.',
        points: ['Custom layout & design', 'Waterproofing & plumbing', 'Tiling & stonework', 'Premium fittings']
      }
    },
    {
      n: '02',
      title: 'Residential Building',
      desc: 'Bespoke new home construction built to the highest residential standards.',
      image: asset('Tokai Project/1.png'),
      full: {
        desc: 'Bespoke new homes built to exacting residential standards, managed end to end.',
        points: ['New home construction', 'Extensions & additions', 'Structural work', 'Project management']
      }
    },
    {
      n: '03',
      title: 'Home Renovations',
      desc: 'Complete home renovations that elevate space, light and lifestyle.',
      image: asset('Tokai Project/kitchen3.png'),
      full: {
        desc: 'Complete renovations that reshape how a home lives — light, flow and function.',
        points: ['Full-home renovations', 'Kitchen remodels', 'Open-plan conversions', 'Finishes & joinery']
      }
    },
    {
      n: '04',
      title: 'Interior & Exterior Painting',
      desc: 'Flawless painting using premium South African paints.',
      image: asset('Victorian House Repainting/victorianhouserepainting2.png'),
      full: {
        desc: 'Flawless interior and exterior painting using premium South African paints.',
        points: ['Surface preparation', 'Interior & exterior', 'Premium coatings', 'Clean, tidy finish']
      }
    },
    {
      n: '05',
      title: 'Waterproofing',
      desc: 'Long-lasting roof and wall waterproofing for Cape weather.',
      image: asset('Tokai Project/5.png'),
      full: {
        desc: 'Long-lasting roof and wall waterproofing engineered for Cape Town weather.',
        points: ['Roof waterproofing', 'Wall & balcony sealing', 'Damp solutions', 'Guaranteed work']
      }
    },
    {
      n: '06',
      title: 'Flooring',
      desc: 'Hardwood, laminate, vinyl and tile flooring installed with precision.',
      image: asset('Rondebosch Pool Decking/veranda2.png'),
      full: {
        desc: 'Hardwood, laminate, vinyl and tile flooring installed with precision and care.',
        points: ['Hardwood & laminate', 'Vinyl & tile', 'Subfloor preparation', 'Seamless finishes']
      }
    },
    {
      n: '07',
      title: 'Tiling',
      desc: 'Bathroom, kitchen and floor tiling with immaculate craftsmanship.',
      image: asset('Tokai Project/kitchen1.png'),
      full: {
        desc: 'Bathroom, kitchen and floor tiling delivered with immaculate craftsmanship.',
        points: ['Floor & wall tiling', 'Mosaic & feature work', 'Waterproof systems', 'Precision setting']
      }
    },
    {
      n: '08',
      title: 'Heritage & Plastering',
      desc: 'Smooth plaster finishes plus careful restoration of Victorian homes.',
      image: asset('Victorian House Repainting/houserepainting1.png'),
      full: {
        desc: 'Smooth plaster finishes plus careful restoration of Victorian homes over 100 years old.',
        points: ['Heritage restoration', 'Interior & exterior plaster', 'Period detailing', 'Conservation care']
      }
    }
  ];

  const reasons = [
    { n: '01', title: '20+ Years Experience', desc: 'Two decades of refined craftsmanship across Cape Town homes.' },
    { n: '02', title: 'Quality Workmanship', desc: 'Every detail finished to the highest residential standards.' },
    { n: '03', title: 'Personalised Service', desc: 'Direct, honest communication from quote to handover.' },
    { n: '04', title: 'Heritage Specialists', desc: 'Trusted experts in restoring Victorian homes over 100 years old.' },
    { n: '05', title: 'Reliable Delivery', desc: 'Projects delivered on time and within the agreed budget.' },
    { n: '06', title: 'Local Cape Town Team', desc: 'A trusted local company homeowners recommend to neighbours.' }
  ];

  const projects = [
    {
      cat: 'Builds',
      title: 'Tokai Three-Bedroom Home',
      location: 'Tokai',
      year: '2024',
      image: asset('Tokai Project/tokai3bedroom1.png'),
      desc: 'A complete residential build finished with crisp masonry, garage detailing and clean exterior lines.',
      count: '16 photos'
    },
    {
      cat: 'Heritage',
      title: 'Victorian House Repainting',
      location: 'Cape Town',
      year: '2023',
      image: asset('Victorian House Repainting/houserepainting2.png'),
      desc: 'Careful repainting and restoration work on an older home, with attention to period trim and surfaces.',
      count: '4 photos'
    },
    {
      cat: 'Outdoor Living',
      title: 'Rondebosch Pool Decking',
      location: 'Rondebosch',
      year: '2024',
      image: asset('Rondebosch Pool Decking/veranda3.png'),
      desc: 'Precision deck installation around a pool courtyard, moving from framing to a polished timber finish.',
      count: '3 photos'
    },
    {
      cat: 'Interiors',
      title: 'Tokai Kitchen Renovation',
      location: 'Tokai',
      year: '2024',
      image: asset('Tokai Project/kitchen3.png'),
      desc: 'A warm kitchen refresh with cabinetry, tiling and finished surfaces tuned for daily family use.',
      count: '3 photos'
    },
    {
      cat: 'Interiors',
      title: 'Rondebosch Fireplace Detail',
      location: 'Rondebosch',
      year: '2024',
      image: asset('Rondebosch Project/oven3.png'),
      desc: 'Interior feature work with a refined fireplace surround and tiled finish.',
      count: '5 photos'
    },
    {
      cat: 'Outdoor Living',
      title: 'Tokai Landscaping Works',
      location: 'Tokai',
      year: '2024',
      image: asset('Tokai Project/landscaping2.png'),
      desc: 'Garden beds, edges and lawn detailing used to finish the exterior living space.',
      count: '2 photos'
    }
  ];

  const projectCollections = [
    {
      title: 'Tokai Project',
      label: 'Build, interiors, exterior works',
      desc: 'A broad project set covering structural build stages, kitchen finishes, garage completion and landscaping.',
      images: [
        asset('Tokai Project/tokai3bedroom1.png'),
        asset('Tokai Project/1.png'),
        asset('Tokai Project/kitchen3.png'),
        asset('Tokai Project/garage2.png'),
        asset('Tokai Project/landscaping2.png')
      ]
    },
    {
      title: 'Rondebosch Project',
      label: 'Restoration and interior detail',
      desc: 'A compact set showing site work, stairing, fireplace detail and finished entrance landscaping.',
      images: [
        asset('Rondebosch Project/Stairing2.png'),
        asset('Rondebosch Project/3.png'),
        asset('Rondebosch Project/fireplace1.png'),
        asset('Rondebosch Project/oven3.png'),
        asset('Rondebosch Project/Stairing1.png')
      ]
    },
    {
      title: 'Rondebosch Pool Decking',
      label: 'Outdoor living',
      desc: 'Before-and-after decking images around the pool, from framing to finished boards.',
      images: [
        asset('Rondebosch Pool Decking/veranda3.png'),
        asset('Rondebosch Pool Decking/veranda1.png'),
        asset('Rondebosch Pool Decking/veranda2.png')
      ]
    },
    {
      title: 'Victorian House Repainting',
      label: 'Heritage painting',
      desc: 'Exterior and interior repainting work on a character home with delicate trim and period surfaces.',
      images: [
        asset('Victorian House Repainting/houserepainting2.png'),
        asset('Victorian House Repainting/houserepainting1.png'),
        asset('Victorian House Repainting/victorianhouserepainting1.png'),
        asset('Victorian House Repainting/victorianhouserepainting2.png')
      ]
    }
  ];

  const testimonials = [
    {
      quote: 'JOPPA renovated our entire kitchen and master bathroom. The craftsmanship is exceptional and the team was a pleasure to have in our home.',
      name: 'Sarah van der Merwe',
      place: 'Constantia',
      project: 'Full Home Renovation'
    },
    {
      quote: 'Restoring our 120-year-old Victorian was daunting. JOPPA preserved every original detail while giving us a modern, comfortable home.',
      name: 'James & Olivia Patel',
      place: 'Woodstock',
      project: 'Heritage Restoration'
    },
    {
      quote: 'From quote to handover, JOPPA delivered exactly what they promised. Waterproofing has held perfectly through two winters.',
      name: 'Michael Botha',
      place: 'Sea Point',
      project: 'Waterproofing & Painting'
    },
    {
      quote: 'Our bathroom transformation looks like something from a magazine. They handled every detail — tiling, plumbing, fittings.',
      name: 'Lerato Ndlovu',
      place: 'Rondebosch',
      project: 'Bathroom Renovation'
    }
  ];

  const processSteps = [
    { n: '01', title: 'Consultation', desc: 'We visit, listen and understand your home, your goals and your budget.' },
    { n: '02', title: 'Detailed Quote', desc: 'A clear, itemised quote with honest advice — no surprises, no pressure.' },
    { n: '03', title: 'Construction', desc: 'Skilled, tidy on-site work with regular updates and quality at every stage.' },
    { n: '04', title: 'Handover', desc: 'A final walkthrough and a finished home delivered to a standard you can feel.' }
  ];

  const categories = ['All', 'Builds', 'Interiors', 'Outdoor Living', 'Heritage'];

  const waBase = 'https://wa.me/27785580981?text=';

  /* --------------------------------------------------------------------------
     State
     -------------------------------------------------------------------------- */
  let state = {
    route: 'home',
    menuOpen: false,
    cat: 'All',
    formSubmitted: false
  };

  /* --------------------------------------------------------------------------
     DOM cache
     -------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const navLinks = document.querySelectorAll('.nav__link, .mobile-menu__link, [data-route]');
  const pages = document.querySelectorAll('.page');

  /* --------------------------------------------------------------------------
     Utility helpers
     -------------------------------------------------------------------------- */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function buildWaLink(formData) {
    const text = 'Hi JOPPA Construction, I would like a quote.' +
      '\n\nName: ' + formData.name +
      '\nPhone: ' + formData.phone +
      '\nEmail: ' + (formData.email || 'Not provided') +
      '\nService: ' + (formData.service || 'Not specified') +
      '\nDetails: ' + (formData.message || 'No details');
    return waBase + encodeURIComponent(text);
  }

  /* --------------------------------------------------------------------------
     Rendering
     -------------------------------------------------------------------------- */
  function renderHomeServices() {
    const grid = document.getElementById('home-services-grid');
    if (!grid) return;
    grid.innerHTML = services.slice(0, 8).map(s => `
      <div class="service-card reveal" role="listitem">
        <span class="service-card__num">${escapeHtml(s.n)}</span>
        <h3 class="service-card__title">${escapeHtml(s.title)}</h3>
        <p class="service-card__text">${escapeHtml(s.desc)}</p>
      </div>
    `).join('');
  }

  function renderWhy() {
    const grid = document.getElementById('why-grid');
    if (!grid) return;
    grid.innerHTML = reasons.map(r => `
      <div class="reason-card reveal" role="listitem">
        <span class="reason-card__num">${escapeHtml(r.n)}</span>
        <h3 class="reason-card__title">${escapeHtml(r.title)}</h3>
        <p class="reason-card__text">${escapeHtml(r.desc)}</p>
      </div>
    `).join('');
  }

  function renderHomeProjects() {
    const grid = document.getElementById('home-projects-grid');
    if (!grid) return;
    grid.innerHTML = projects.slice(0, 6).map(p => `
      <article class="card reveal" role="listitem">
        <div class="card__media">
          <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)} in ${escapeHtml(p.location)}" loading="lazy" decoding="async" width="600" height="450">
          <span class="card__media-tag">${escapeHtml(p.cat)}</span>
        </div>
        <div class="card__body">
          <span class="text-xs text-uppercase text-accent mb-2">${escapeHtml(p.cat)}</span>
          <h3 class="card__title">${escapeHtml(p.title)}</h3>
          <p class="card__text">${escapeHtml(p.desc)}</p>
        </div>
      </article>
    `).join('');
  }

  function renderTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    if (!grid) return;
    grid.innerHTML = testimonials.map(t => `
      <div class="testimonial reveal" role="listitem">
        <span class="testimonial__quote-mark" aria-hidden="true">&ldquo;</span>
        <blockquote class="testimonial__quote">${escapeHtml(t.quote)}</blockquote>
        <div class="testimonial__author">
          <div class="testimonial__name">${escapeHtml(t.name)}</div>
          <div class="testimonial__meta">${escapeHtml(t.place)} &middot; ${escapeHtml(t.project)}</div>
        </div>
      </div>
    `).join('');
  }

  function renderProcessSteps(containerId, variant) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    grid.innerHTML = processSteps.map(step => `
      <div class="process-card reveal ${variant === 'dark' ? 'process-card--dark' : ''}" role="listitem">
        <span class="process-card__num">${escapeHtml(step.n)}</span>
        <h3 class="process-card__title">${escapeHtml(step.title)}</h3>
        <p class="process-card__text">${escapeHtml(step.desc)}</p>
      </div>
    `).join('');
  }

  function renderServicesFull() {
    const grid = document.getElementById('services-full-grid');
    if (!grid) return;
    grid.innerHTML = services.map(s => `
      <article class="service-card-full reveal" role="listitem">
        <div class="service-card-full__media">
          <img src="${escapeHtml(s.image)}" alt="${escapeHtml(s.title)}" loading="lazy" decoding="async" width="800" height="500">
          <span class="service-card-full__num">${escapeHtml(s.n)}</span>
        </div>
        <div class="service-card-full__body">
          <h3 class="service-card-full__title">${escapeHtml(s.title)}</h3>
          <p class="service-card-full__text">${escapeHtml(s.full.desc)}</p>
          <div class="service-card-full__points">
            ${s.full.points.map(pt => `<div class="service-card-full__point">${escapeHtml(pt)}</div>`).join('')}
          </div>
        </div>
      </article>
    `).join('');
  }

  function renderValues() {
    const grid = document.getElementById('values-grid');
    if (!grid) return;
    grid.innerHTML = reasons.map(r => `
      <div class="reason-card reveal" role="listitem">
        <span class="reason-card__num">${escapeHtml(r.n)}</span>
        <h3 class="reason-card__title">${escapeHtml(r.title)}</h3>
        <p class="reason-card__text">${escapeHtml(r.desc)}</p>
      </div>
    `).join('');
  }

  function renderProjectFilters() {
    const bar = document.getElementById('project-filters');
    if (!bar) return;
    bar.innerHTML = categories.map(c => `
      <button class="btn btn-outline btn-small ${c === state.cat ? 'active' : ''}" type="button" data-filter="${escapeHtml(c)}" aria-pressed="${c === state.cat}">
        ${escapeHtml(c)}
      </button>
    `).join('');

    bar.querySelectorAll('button[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.cat = btn.getAttribute('data-filter');
        renderProjectFilters();
        renderProjects();
        initReveals();
      });
    });
  }

  function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    const filtered = state.cat === 'All' ? projects : projects.filter(p => p.cat === state.cat);
    grid.innerHTML = filtered.map(p => `
      <article class="project-showcase-card reveal" role="listitem" tabindex="0">
        <div class="project-showcase-card__media">
          <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)} in ${escapeHtml(p.location)}" loading="lazy" decoding="async" width="900" height="1200">
        </div>
        <div class="project-showcase-card__shade" aria-hidden="true"></div>
        <div class="project-showcase-card__body">
          <div class="project-showcase-card__eyebrow">${escapeHtml(p.cat)} / ${escapeHtml(p.year)}</div>
          <h3 class="project-showcase-card__title">${escapeHtml(p.title)}</h3>
          <p class="project-showcase-card__text">${escapeHtml(p.desc)}</p>
          <div class="project-showcase-card__meta">
            <span>${escapeHtml(p.location)}</span>
            <span>${escapeHtml(p.count || 'Project set')}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  function renderProjectCollections() {
    const grid = document.getElementById('project-collections-grid');
    if (!grid) return;
    grid.innerHTML = projectCollections.map(collection => {
      const hero = collection.images[0];
      const thumbs = collection.images.slice(1, 5);
      return `
        <article class="project-collection reveal" role="listitem">
          <div class="project-collection__media">
            <img class="project-collection__hero" src="${escapeHtml(hero)}" alt="${escapeHtml(collection.title)} project image" loading="lazy" decoding="async" width="760" height="520">
            <div class="project-collection__thumbs" aria-label="${escapeHtml(collection.title)} supporting images">
              ${thumbs.map((image, index) => `
                <img src="${escapeHtml(image)}" alt="${escapeHtml(collection.title)} supporting image ${index + 1}" loading="lazy" decoding="async" width="180" height="120">
              `).join('')}
            </div>
          </div>
          <div class="project-collection__body">
            <span class="project-collection__label">${escapeHtml(collection.label)}</span>
            <h3 class="project-collection__title">${escapeHtml(collection.title)}</h3>
            <p class="project-collection__text">${escapeHtml(collection.desc)}</p>
          </div>
        </article>
      `;
    }).join('');
  }

  /* --------------------------------------------------------------------------
     Routing
     -------------------------------------------------------------------------- */
  function navigate(route) {
    const valid = ['home', 'about', 'services', 'projects', 'contact'];
    if (!valid.includes(route)) route = 'home';
    state.route = route;

    pages.forEach(page => {
      if (page.getAttribute('data-page') === route) {
        page.classList.remove('hidden');
      } else {
        page.classList.add('hidden');
      }
    });

    document.querySelectorAll('.nav__link, .mobile-menu__link').forEach(link => {
      if (link.getAttribute('data-route') === route) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    closeMenu();
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.title = getPageTitle(route);
    initReveals();
  }

  function getPageTitle(route) {
    const titles = {
      home: 'JOPPA Construction | Cape Town Residential Builders & Renovations',
      about: 'About JOPPA Construction | Cape Town Residential Builders',
      services: 'Services | JOPPA Construction Cape Town',
      projects: 'Projects | JOPPA Construction Cape Town',
      contact: 'Contact & Free Quote | JOPPA Construction Cape Town'
    };
    return titles[route] || titles.home;
  }

  function onRouteChange() {
    const hash = (window.location.hash || '#home').replace('#', '');
    navigate(hash);
  }

  /* --------------------------------------------------------------------------
     Mobile menu
     -------------------------------------------------------------------------- */
  function openMenu() {
    state.menuOpen = true;
    mobileMenu.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    state.menuOpen = false;
    mobileMenu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (state.menuOpen) closeMenu();
    else openMenu();
  }

  /* --------------------------------------------------------------------------
     Scroll header
     -------------------------------------------------------------------------- */
  function onScroll() {
    const scrolled = window.scrollY > 30;
    if (scrolled) header.classList.add('header--scrolled');
    else header.classList.remove('header--scrolled');
  }

  /* --------------------------------------------------------------------------
     Reveal animations
     -------------------------------------------------------------------------- */
  let revealObserver = null;

  function initReveals() {
    if (revealObserver) revealObserver.disconnect();
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }

    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const countEl = entry.target.querySelector('[data-count]') || (entry.target.hasAttribute('data-count') ? entry.target : null);
            if (countEl && !countEl._counted) {
              countEl._counted = true;
              animateCount(countEl);
            }
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

      revealObserver = observer;
      let index = 0;
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('visible');
        el.style.transitionDelay = (Math.min(index, 5) * 80) + 'ms';
        index++;
        observer.observe(el);
      });

      document.querySelectorAll('[data-count]').forEach(c => {
        if (!c.closest('.reveal')) observer.observe(c);
      });
    }, 60);
  }

  function animateCount(el) {
    const raw = el.getAttribute('data-count') || el.textContent;
    const match = String(raw).match(/^(\D*)(\d+)(\D*)$/);
    if (!match) return;
    const prefix = match[1];
    const target = parseInt(match[2], 10);
    const suffix = match[3];
    if (target > 1000) return;

    const duration = 1300;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* --------------------------------------------------------------------------
     Form
     -------------------------------------------------------------------------- */
  function initForm() {
    const form = document.getElementById('quote-form');
    const success = document.getElementById('form-success');
    const waLink = document.getElementById('wa-submit-link');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = {
        name: form.elements.name.value.trim(),
        phone: form.elements.phone.value.trim(),
        email: form.elements.email.value.trim(),
        service: form.elements.service.value,
        message: form.elements.message.value.trim()
      };

      state.formSubmitted = true;
      form.classList.add('hidden');
      success.classList.remove('hidden');
      success.focus();
      waLink.href = buildWaLink(formData);
    });
  }

  /* --------------------------------------------------------------------------
     Event binding
     -------------------------------------------------------------------------- */
  function bindEvents() {
    burger.addEventListener('click', toggleMenu);
    mobileMenuClose.addEventListener('click', closeMenu);

    document.querySelectorAll('[data-route]').forEach(link => {
      link.addEventListener('click', (e) => {
        const route = link.getAttribute('data-route');
        if (route) {
          e.preventDefault();
          window.location.hash = route;
        }
      });
    });

    window.addEventListener('hashchange', onRouteChange);
    window.addEventListener('scroll', onScroll, { passive: true });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.menuOpen) closeMenu();
    });
  }

  /* --------------------------------------------------------------------------
     Initialise
     -------------------------------------------------------------------------- */
  function init() {
    renderHomeServices();
    renderWhy();
    renderHomeProjects();
    renderTestimonials();
    renderProcessSteps('about-process-grid');
    renderProcessSteps('services-process-grid', 'dark');
    renderServicesFull();
    renderValues();
    renderProjectFilters();
    renderProjects();
    renderProjectCollections();
    initForm();
    bindEvents();
    onScroll();
    onRouteChange();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
