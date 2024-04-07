import './styles.scss'

import '~components/section'
import '~components/sectionHead'
import '~components/sectionTitle'
import '~components/container'
import '~components/icon'
import {Swiper, Grid} from '~components/swiper';
import {Pagination} from '~components/swiperPagination';

import '~containers/workCard'

(() => {
  const section = document.querySelector('.js-sectionWorks');
  if (!section) {
    return null;
  }
  const slider = section.querySelector('[data-ref="slider"]');
  const prev = section.querySelector('[data-ref="slider.prev"]');
  const next = section.querySelector('[data-ref="slider.next"]');
  const pagination = section.querySelector('[data-ref="pagination"]');

  return new Swiper.init(slider, {
    modules: [Grid, Pagination],
    slidesPerView: 2,
    loop: false,
    spaceBetween: 0,
    grid: {
      fill: "row",
      rows: 2,
    },
    pagination: {
      el: pagination,
      enabled: true,
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      }
    },
    on: {
      init(swiper) {
        prev.addEventListener('click', () => swiper.slidePrev());
        next.addEventListener('click', () => swiper.slideNext());
      }
    }
  });
})()

