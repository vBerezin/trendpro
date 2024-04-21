import './styles.scss'

import '~components/section'
import '~components/sectionTitle'
import '~components/sectionHead'
import '~components/container'
import '~components/button'
import '~components/picture'
import '~components/image'
import '~containers/popupSales'
import {Swiper, Grid} from '~components/swiper';
import { Breakpoints } from "~components/breakpoints";


(() => {
  const section = document.querySelector('.js-sectionPricing');
  if (!section) {
    return null;
  }
  const slider = section.querySelector('[data-ref="slider"]');

  const options = {
    modules: [Grid],
    loop: false,
    slidesPerView: 1,
    grid: {
      fill: "row",
      rows: 2
    },
    breakpoints: {
      [Breakpoints.points.sm]: {
        spaceBetween: 10,
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
