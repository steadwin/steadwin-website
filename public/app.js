(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  function setMenu(open) {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    mobileNav.hidden = !open;
    document.documentElement.classList.toggle('nav-open', open);
    document.body.classList.toggle('nav-open', open);
  }
  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', event => {
    if (event.target instanceof Element && !event.target.closest('.header, .mobile-nav')) setMenu(false);
  });
  window.matchMedia('(min-width: 1201px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

  const rail = document.querySelector('.contact-rail');
  const railToggle = document.querySelector('.rail-toggle');
  const railLinks = document.querySelector('#rail-links');
  function setRail(open) {
    if (!railToggle || !railLinks) return;
    railToggle.setAttribute('aria-expanded', String(open));
    railToggle.setAttribute('aria-label', open ? 'Hide contact shortcuts' : 'Show contact shortcuts');
    railToggle.querySelector('span').textContent = open ? '→' : '←';
    railLinks.hidden = !open;
  }
  const compactScreen = window.matchMedia('(max-width: 680px)');
  setRail(!compactScreen.matches);
  railToggle?.addEventListener('click', () => setRail(railToggle.getAttribute('aria-expanded') !== 'true'));
  compactScreen.addEventListener('change', event => setRail(!event.matches));
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (menuButton?.getAttribute('aria-expanded') === 'true') { setMenu(false); menuButton.focus(); }
    if (rail?.contains(document.activeElement) && railToggle?.getAttribute('aria-expanded') === 'true') { setRail(false); railToggle.focus(); }
  });

  const heroSlides = [...document.querySelectorAll('[data-hero-slide]')];
  const heroDots = [...document.querySelectorAll('[data-hero-dot]')];
  const heroSlider = document.querySelector('[data-hero-slider]');
  if (heroSlides.length > 1) {
    let activeHeroSlide = 0;
    let heroTimer;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    function setHeroSlide(nextIndex) {
      activeHeroSlide = (nextIndex + heroSlides.length) % heroSlides.length;
      heroSlides.forEach((slide, index) => {
        const active = index === activeHeroSlide;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', String(!active));
      });
      heroDots.forEach((dot, index) => {
        const active = index === activeHeroSlide;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-current', active ? 'true' : 'false');
      });
    }
    function pauseHero() { window.clearInterval(heroTimer); heroTimer = undefined; }
    function playHero() {
      pauseHero();
      if (!reduceMotion.matches) heroTimer = window.setInterval(() => setHeroSlide(activeHeroSlide + 1), 6500);
    }
    heroDots.forEach((dot, index) => dot.addEventListener('click', () => { setHeroSlide(index); playHero(); }));
    heroSlider?.addEventListener('mouseenter', pauseHero);
    heroSlider?.addEventListener('mouseleave', playHero);
    reduceMotion.addEventListener('change', playHero);
    playHero();
  }

  const enquiryForm = document.querySelector('#enquiry');
  if (enquiryForm) {
    const customerName = document.querySelector('#name');
    const messageField = document.querySelector('#message');
    const serviceField = document.querySelector('#service');
    const projectField = document.querySelector('#project-type');
    const mobileField = document.querySelector('#mobile');
    const emailField = document.querySelector('#email');
    const cityField = document.querySelector('#city');
    const parameters = new URLSearchParams(window.location.search);
    const purpose = parameters.get('purpose');
    function applyChoice(field, value) {
      if (value && [...field.options].some(option => option.value === value)) field.value = value;
    }
    applyChoice(serviceField, parameters.get('service'));
    applyChoice(projectField, parameters.get('project'));
    [customerName, messageField, mobileField, cityField].filter(Boolean).forEach(field => field.addEventListener('input', () => field.setCustomValidity('')));
    enquiryForm.addEventListener('submit', event => {
      for (const field of [customerName, messageField]) {
        if (!field.value.trim()) {
          event.preventDefault();
          field.setCustomValidity('Please enter your ' + (field === customerName ? 'name.' : 'project requirements.'));
          field.reportValidity();
          return;
        }
      }
      const city = cityField.value.trim();
      document.querySelector('#whatsapp-text').value = [
        'Hello STEADWIN GROUP,',
        'My name is ' + customerName.value.trim() + '.',
        'Mobile: ' + mobileField.value.trim(),
        emailField.value.trim() ? 'Email: ' + emailField.value.trim() : '',
        'Project type: ' + projectField.value,
        'Services required: ' + serviceField.value,
        purpose ? 'Enquiry purpose: ' + purpose : '',
        city ? 'Project location: ' + city : '',
        messageField.value.trim()
      ].filter(Boolean).join('\n');
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const conceptFilters = [...document.querySelectorAll('[data-concept-filter]')];
  const conceptCards = [...document.querySelectorAll('[data-concept-category]')];
  conceptFilters.forEach(filter => filter.addEventListener('click', () => {
    const selected = filter.getAttribute('data-concept-filter');
    conceptFilters.forEach(button => button.classList.toggle('is-active', button === filter));
    conceptCards.forEach(card => { card.hidden = selected !== 'all' && card.getAttribute('data-concept-category') !== selected; });
  }));

  const galleryDialog = document.querySelector('#gallery-dialog');
  const galleryButtons = [...document.querySelectorAll('[data-gallery]')];
  if (!galleryDialog || !galleryButtons.length) return;
  let activeImage = 0;
  let galleryTrigger;
  const galleryItems = galleryButtons.map(button => ({ src: button.querySelector('img').src, alt: button.querySelector('img').alt, title: button.querySelector('strong').textContent }));
  function renderImage() {
    const current = galleryItems[activeImage];
    const img = document.querySelector('#lightbox-image');
    img.src = current.src;
    img.alt = current.alt;
    document.querySelector('#lightbox-caption').textContent = current.title + ' · Design inspiration';
    document.querySelector('#gallery-count').textContent = (activeImage + 1) + ' / ' + galleryItems.length;
  }
  function move(direction) { activeImage = (activeImage + direction + galleryItems.length) % galleryItems.length; renderImage(); }
  galleryButtons.forEach((button, i) => button.addEventListener('click', () => {
    galleryTrigger = button;
    activeImage = i;
    renderImage();
    galleryDialog.showModal();
    document.body.style.overflow = 'hidden';
    galleryDialog.querySelector('.lightbox-close').focus();
  }));
  galleryDialog.querySelector('.lightbox-close').addEventListener('click', () => galleryDialog.close());
  galleryDialog.addEventListener('click', event => {
    if (event.target !== galleryDialog) return;
    const box = galleryDialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) galleryDialog.close();
  });
  galleryDialog.addEventListener('close', () => { document.body.style.overflow = ''; galleryTrigger?.focus(); });
  galleryDialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
  });
  document.querySelector('#gallery-prev').addEventListener('click', () => move(-1));
  document.querySelector('#gallery-next').addEventListener('click', () => move(1));
})();
