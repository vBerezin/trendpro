import './style.scss';

/**
 * @function { icon }
 * @returns { HTMLElement }
 * */
export const Icon = (name) => {
  const svg = document.createElement('svg');

  svg.className = `icon icon-${name}`;
  svg.innerHTML = `<use xlink:href="#icon-${name}" href="#icon-${name}"></use>`;

  return svg;
};
