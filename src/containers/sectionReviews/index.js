import './style.scss'
import {Swiper} from '~components/swiper';
import { Breakpoints } from "~components/breakpoints";

import '~components/section'
import '~components/sectionHead'
import '~components/sectionTitle'
import '~components/container'
import '~components/image'

(() => {
  const section = document.querySelector('.js-sectionReviews');
  if (!section) {
    return null;
  }
  const slider = section.querySelector('[data-ref="slider"]');

  return new Swiper.init(slider, {
    loop: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    on: {
      activeIndexChange(swiper) {
        const {realIndex: currentIndex, params: {slidesPerView}, slides} = swiper;
        slides.forEach((slide) => {
          const index = Number(slide.getAttribute('data-swiper-slide-index'));
          const endIndex = currentIndex + slidesPerView - 1;

          if (endIndex > slides.length) {
            slide.classList.toggle(
              'is-active',
              index > currentIndex ||
               index < endIndex - slides.length);
          } else {
            slide.classList.toggle(
              'is-active',
              index > currentIndex && index < endIndex);
          }
        });
      }
    },
    breakpoints: {
      [Breakpoints.points.sm]: {
        slidesPerView: 2,
        centeredSlides: false,
        loop: false,
      },
      [Breakpoints.points.md]: {
        slidesPerView: 7,
        centeredSlides: false,
        loop: true,
      },
    }
  });
})()
