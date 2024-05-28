import './style.scss'

import {Popup} from '~components/popup';

export class PopupVideo extends Popup {
  constructor(node, videoId) {
    super(node);
    this.iframe = this.el.querySelector('iframe');
    this.videoId = videoId;
  }
  open() {
    this.iframe.src = `https://www.youtube.com/embed/${this.videoId}`;
    return super.open();
  }
  close() {
    this.iframe.src = '';
    return super.close();
  }
}
