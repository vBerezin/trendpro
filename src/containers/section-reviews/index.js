import './style.scss'
import {Swiper} from '~components/swiper';

(() => {
  const el = document.querySelector('.js-section-reviews');
  if (!el) {
    return null;
  }
  const slider = new Swiper(el, {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 0,
  });
})()
