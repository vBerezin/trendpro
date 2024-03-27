import './style.scss'

import '~components/container';
import '~containers/icon-box';
import '~containers/logo';
import {Breakpoints} from "~components/breakpoints";

(() => {
  const footer = document.querySelector('.js-footer');
  if (!footer) {
    return false;
  }
  const footerInner = footer.querySelector('.footer__inner');
  const footerTop = footer.querySelector('.footer__top');
  const footerCopyright = footer.querySelector('.footer__copyright');
  Breakpoints.once(
    ['xxs', 'xs', 'sm', 'md'],
    ()=> {
      footerInner.appendChild(footerCopyright);
    },
    ()=> {
      footerTop.appendChild(footerCopyright);
    },
    )
})()
