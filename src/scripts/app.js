import { Stream } from '~scripts/utils/Stream';
import {Breakpoints} from "~components/breakpoints";

const App = (function () {
  const debug = console.info;
  const lang = document.documentElement.getAttribute('lang');
  Breakpoints.change(debug);
  return {
    lang: lang ? lang.toLowerCase() : null,
    stream: new Stream(),
    debug,
  };
}());

export { App };
