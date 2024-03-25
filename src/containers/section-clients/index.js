import './style.scss';

import './style.scss'
import {Swiper, Mousewheel, Grid} from '~components/swiper';
import {Scrollbar} from '~components/swiper-scrollbar';

import '~components/section'
import '~components/section-head'
import '~components/section-title'
import '~components/container'
import '~components/image'

(() => {
  const section = document.querySelector('.js-section-clients');
  if (!section) {
    return null;
  }
  const slider = section.querySelector('[data-ref="slider"]');
  const scrollbar = section.querySelector('[data-ref="scrollbar"]');

  return new Swiper(slider, {
    modules: [Mousewheel, Grid, Scrollbar],
    mousewheel: true,
    slidesPerView: 6,
    spaceBetween: 30,
    grid: {
      fill: "row",
      rows: 2
    },
    scrollbar: {
      el: scrollbar,
      hide: false,
      draggable: true
    },
  });
})()

