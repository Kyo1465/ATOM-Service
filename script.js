const filterButtons = [...document.querySelectorAll('.service-tab')];
    const serviceCards = [...document.querySelectorAll('.service-card')];
    filterButtons.forEach((button) => button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      serviceCards.forEach((card) => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter));
    }));

    document.querySelectorAll('.faq-question').forEach((button) => button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const willOpen = !item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach((row) => {
        row.classList.remove('open');
        row.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    }));

    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
      menuToggle.textContent = isOpen ? '×' : '☰';
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Открыть меню');
      menuToggle.textContent = '☰';
    }));
