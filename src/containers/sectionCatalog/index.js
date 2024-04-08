import './styles.scss';

import '~components/section'
import '~components/sectionTitle'
import '~components/sectionHead'
import '~components/container'

import {Handlers} from "~scripts/utils/Handlers";


(() => {
  const section = document.querySelector('.js-sectionCatalog');
  if (!section) {
    return false;
  }
  const tabs = section.querySelectorAll('[data-tab]');

  function setActive(id) {
    tabs.forEach((el) => {
      const tab = el.dataset.tab;
      el.classList.toggle('is-active', tab === id);
    });
  }

  const handleClick = new Handlers.Click({
    tab: ({target}) => {
      setActive(target.dataset.tab);
    }
  })
  section.addEventListener('click', handleClick);
})();
