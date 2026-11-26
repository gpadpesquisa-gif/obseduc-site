const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Abrir menu' : 'Fechar menu';
    siteNav.classList.toggle('is-open', !isOpen);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelector('.sr-only').textContent = 'Abrir menu';
      siteNav.classList.remove('is-open');
    });
  });
}

const documentTabs = Array.from(document.querySelectorAll('[data-tab]'));
const documentPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

if (documentTabs.length && documentPanels.length) {
  const selectDocument = (panelId, moveFocus = false) => {
    documentTabs.forEach((tab) => {
      const isSelected = tab.dataset.tab === panelId;
      tab.classList.toggle('is-active', isSelected);
      tab.setAttribute('aria-selected', String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      if (isSelected && moveFocus) tab.focus();
    });

    documentPanels.forEach((panel) => {
      const isVisible = panel.id === panelId;
      panel.classList.toggle('is-active', isVisible);
      panel.hidden = !isVisible;
    });
  };

  documentTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectDocument(tab.dataset.tab));
    tab.addEventListener('keydown', (event) => {
      const lastIndex = documentTabs.length - 1;
      let nextIndex = index;
      if (event.key === 'ArrowRight') nextIndex = index === lastIndex ? 0 : index + 1;
      if (event.key === 'ArrowLeft') nextIndex = index === 0 ? lastIndex : index - 1;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = lastIndex;
      if (nextIndex !== index) {
        event.preventDefault();
        selectDocument(documentTabs[nextIndex].dataset.tab, true);
      }
    });
  });
}
