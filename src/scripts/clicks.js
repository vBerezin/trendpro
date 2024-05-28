import { Popup } from '~components/popup';
import { Handlers } from '~scripts/utils/Handlers';
import {PopupVideo} from "~containers/popupVideo";

const popups = new WeakMap();
const actions = {
  'popup': ({ event, target }) => {
    const { popupId } = target.dataset;
    const node = document.getElementById(popupId);
    if (node) {
      event.preventDefault();
      let popup = popups.get(node);
      if (!popup) {
        popup = new Popup(node);
        popups.set(node, popup);
      }
      popup.open();
    }
  },
  'popup:video': ({ event, target }) => {
    const { popupId, videoId } = target.dataset;
    const node = document.getElementById(popupId);
    if (node) {
      event.preventDefault();
      let popup = popups.get(node);
      if (!popup) {
        popup = new PopupVideo(node, videoId);
        popups.set(node, popup);
      }
      popup.videoId = videoId;
      popup.open();
    }
  },
};

document.addEventListener('click', new Handlers.Click(actions));
