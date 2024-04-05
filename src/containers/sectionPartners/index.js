import './style.scss'
import {Swiper, Grid} from '~components/swiper';
import { Breakpoints } from "~components/breakpoints";

import '~components/section'
import '~components/sectionHead'
import '~components/sectionTitle'
import '~components/container'
import '~components/image'

(() => {
  const section = document.querySelector('.js-sectionPartners');
  if (!section) {
    return null;
  }
  const slider = section.querySelector('[data-ref="slider"]');

  const options = {
    modules: [Grid],
    loop: false,
    slidesPerView: 2,
    spaceBetween: 20,
    grid: {
      fill: "row",
      rows: 2
    },
    breakpoints: {
      [Breakpoints.points.sm]: {
        slidesPerView: 3,
        spaceBetween: 40,
        grid: {
          fill: "row",
          rows: 2
        },
      },
    }
  }
  let swiper = null;

  Breakpoints.once(
    ['xxs', 'xs', 'sm'],
    () => {
      swiper = Swiper.init(slider, options);
    },
    () => {
      swiper = Swiper.destroy(swiper)
    }
  )
})()
