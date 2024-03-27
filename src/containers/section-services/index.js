import './style.scss'

import '~components/section'
import '~components/section-head'
import '~components/section-title'
import '~components/container'
import '~components/image'
import '~components/swiper'
import '~containers/service-card'
import '~containers/popup-sales'
import {Handlers} from "~scripts/utils/Handlers";
import {Breakpoints} from "~components/breakpoints";


(() => {
  const section = document.querySelector('.js-section-services');
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

  Breakpoints.once(
    ['xxs', 'xs'],
    () => {
      section.addEventListener('click', handleClick);
    },
    () => {
      section.removeEventListener('click', handleClick);
    }
  )

})();
