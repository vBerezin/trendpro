import './styles.scss';

import '~components/section'
import '~components/sectionTitle'
import '~components/sectionHead'
import '~components/container'
import '~components/image'
import '~containers/video'

import {Handlers} from "~scripts/utils/Handlers";
import {Swiper} from "~components/swiper";
import {Breakpoints} from "~components/breakpoints";

(() => {
  const section = document.querySelector('.js-sectionCatalog');
  if (!section) {
    return false;
  }
  const tabs = section.querySelectorAll('[data-tab]');
  const sliders = section.querySelectorAll('[data-ref="slider"]');
  const swipers = new Map();

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
  sliders.forEach((el) => {
    const tab = el.closest('[data-tab]');
    const swiper = Swiper.init(el, {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      longSwipes: false,
      spaceBetween: 0,
      breakpoints: {
        [Breakpoints.points.md]: {
          loop: true,
          longSwipes: true,
          centeredSlides: false,
        },
      }
    });
    swipers.set(tab.dataset.tab, swiper);
  });
})();
