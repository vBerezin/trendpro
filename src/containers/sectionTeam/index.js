import './style.scss';

import './style.scss'
import {Swiper, EffectCreative} from '~components/swiper';
import '~components/section'
import '~components/sectionHead'
import '~components/sectionTitle'
import '~components/container'
import '~components/image'
import '~components/picture'
import '~components/icon'
import '~containers/iconBox'

(() => {
  const section = document.querySelector('.js-sectionTeam');
  if (!section) {
    return null;
  }
  const slider = section.querySelector('[data-ref="slider"]');
  const prev = section.querySelector('[data-ref="slider.prev"]');
  const next = section.querySelector('[data-ref="slider.next"]');

  return new Swiper(slider, {
    modules: [EffectCreative],
    slidesPerView: 1,
    loop: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: [0, 0, -400],
        opacity: 0
      },
      next: {
        translate: ["100%", 0, 0],
        opacity: 0.5
      },
    },
    on: {
      init(swiper) {
        prev.addEventListener('click', () => swiper.slidePrev());
        next.addEventListener('click', () => swiper.slideNext());
      }
    }
  });
})()

