import { CGRectZero } from './CGRect';
import UIView from './UIView';

export default class UIImageView extends UIView {
  imageViewElement: HTMLImageElement;

  constructor() {
    super(CGRectZero);
    this.imageViewElement = document.createElement('img');
    this.imageViewElement.style.height = '0px';
    this.imageViewElement.style.width = '0px';
    this.element.appendChild(this.imageViewElement);
  }

  // onLayout(height: number, width: number) {
  //   super.onLayout(height, width);
  //   this.imageViewElement.style.width = '100%';
  //   this.imageViewElement.style.height = '100%';
  // }

  setImage(src: string) {
    this.imageViewElement.src = src;
  }
}
