import './styles.scss';

import '~components/section'
import '~components/sectionTitle'
import '~components/sectionHead'
import '~components/container'
import '~components/image'
import '~components/picture'
import '~containers/video'

import {Handlers} from "~scripts/utils/Handlers";
import {Swiper} from "~components/swiper";
import {Scrollbar} from "~components/swiperScrollbar";
import {Breakpoints} from "~components/breakpoints";

(() => {
  const section = document.querySelector('.js-sectionCatalog');
  if (!section) {
    return false;
  }
  const swipers = new Map();
  const tabs = section.querySelectorAll('[data-tab]');
  const sliders = section.querySelectorAll('[data-ref="slider"]');

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
    const scrollbar = tab.querySelector('[data-ref="scrollbar"]');
    const swiper = Swiper.init(el, {
      modules: [Scrollbar],
      longSwipes: false,
      spaceBetween: 0,
      loop: false,
      slidesPerView: 1,
      centeredSlides: true,
      breakpoints: {
        [Breakpoints.points.md]: {
          slidesPerView: 1,
          scrollbar: {
            el: scrollbar,
            hide: false,
            draggable: true
          },
        },
      }
    });
    swipers.set(tab.dataset.tab, swiper);
  });
})();
