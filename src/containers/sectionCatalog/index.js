import './styles.scss';

import '~components/section'
import '~components/sectionTitle'
import '~components/sectionHead'
import '~components/container'
import '~components/image'
import '~containers/video'

import {Handlers} from "~scripts/utils/Handlers";
import {Swiper} from "~components/swiper";

(() => {
  const section = document.querySelector('.js-sectionCatalog');
  if (!section) {
    return false;
  }
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
    Swiper.init(el, {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
    })
  })
})();
