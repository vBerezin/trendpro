import './styles';


export { Grid, EffectCreative } from 'swiper/modules';
import {Swiper as Instance} from 'swiper';

export function wrap(el) {
  const slides = el.children;
  const wrapper = document.createElement('div');
  Array.from(slides).forEach((slide) => slide.classList.add('swiper-slide'));
  wrapper.className = 'swiper-wrapper'
  wrapper.append(...slides);
  el.classList.add('swiper');
  el.appendChild(wrapper);
}

export function init(el, options) {
  wrap(el);
  return new Instance(el, options);
}

export function destroy(swiper) {
  if (!swiper) {
    return false;
  }
  const {el, slides, wrapperEl} = swiper;
  swiper.destroy(true, true);
  slides.forEach((slide) => {
    slide.classList.remove('swiper-slide');
  });
  wrapperEl.replaceWith(...slides);
  el.classList.remove('swiper');

  return null;
}

export const Swiper = {
  init,
  destroy,
  wrap
}
