(function () {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector('[data-demo-form]');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const status = document.querySelector('[data-form-status]');
      if (status) {
        status.textContent = 'Demo form submitted. Connect this form to a real email or form service before using it for live enquiries.';
      }
      form.reset();
    });
  }

  const lightbox = document.querySelector('[data-lightbox]');
  if (lightbox) {
    const image = lightbox.querySelector('img');
    const close = lightbox.querySelector('[data-lightbox-close]');

    document.querySelectorAll('[data-lightbox-src]').forEach((button) => {
      button.addEventListener('click', () => {
        image.src = button.getAttribute('data-lightbox-src');
        image.alt = button.getAttribute('data-lightbox-alt') || 'Gallery image';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });

    function hide() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      image.removeAttribute('src');
    }

    close.addEventListener('click', hide);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) hide(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hide(); });
  }
})();
