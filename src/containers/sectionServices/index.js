import './style.scss'

import '~components/section'
import '~components/sectionHead'
import '~components/sectionTitle'
import '~components/container'
import '~components/image'
import '~components/swiper'
import '~containers/serviceCard'
import '~containers/popupSales'
import {Handlers} from "~scripts/utils/Handlers";
import {Breakpoints} from "~components/breakpoints";


(() => {
  const section = document.querySelector('.js-sectionServices');
  if (!section) {
    return false;
  }
  const tabs = section.querySelectorAll('[data-tab]');
  const container = section.querySelector('.sectionServices__grid');

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
  );
  Breakpoints.once(
    ['md'],
    () => {
      container.classList.add('container--justify');
    },
    () => {
      container.classList.remove('container--justify');
    }
  )

})();
