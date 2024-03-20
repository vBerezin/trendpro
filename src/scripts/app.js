import { Stream } from '~scripts/utils/stream';

const App = (function () {
  const debug = console.info;
  const lang = document.documentElement.getAttribute('lang');
  return {
    lang: lang ? lang.toLowerCase() : null,
    stream: new Stream(),
    debug,
  };
}());

export { App };
