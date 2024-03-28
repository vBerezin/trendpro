import './style.scss';

import './style.scss'
import {Swiper, Mousewheel, Grid} from '~components/swiper';
import {Scrollbar} from '~components/swiper-scrollbar';
import {Pagination} from '~components/swiper-pagination';

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
  const pagination = section.querySelector('[data-ref="pagination"]');

  return new Swiper(slider, {
    modules: [Mousewheel, Grid, Scrollbar, Pagination],
    mousewheel: true,
    slidesPerView: 3,
    spaceBetween: 14,
    grid: {
      fill: "row",
      rows: 2
    },
    scrollbar: {
      el: scrollbar,
      hide: false,
      draggable: true
    },
    pagination: {
      el: pagination,
      enabled: false,
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 30,
        grid: {
          fill: "row",
          rows: 2
        },
        pagination: {
          enabled: true,
        },
        scrollbar: {
          enabled: false
        }
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
        pagination: false,
        grid: {
          fill: "row",
          rows: 2
        },
        scrollbar: {
          enabled: true
        }
      }
    }
  });
})()

