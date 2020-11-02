import { CGRectZero } from './CGRect';
import { CGSizeZero } from './CGSize';
import UIView from './UIView';

export default class UIButton extends UIView {
  buttonElement: HTMLButtonElement;

  hoverBackgroundColor = 'gray';

  constructor() {
    super(CGRectZero);
    this.buttonElement = document.createElement('button');
    this.element.appendChild(this.buttonElement);
    this.buttonElement.style.width = '100%';
    this.buttonElement.style.height = '100%';
    this.buttonElement.style.padding = 'unset';
    this.buttonElement.style.border = 'unset';
    this.buttonElement.addEventListener('mouseover', this.onFocusEventHandler);
    this.buttonElement.addEventListener('mouseleave', this.onFocusEventHandler);

    this.setBackgroundColor('white');
    this.setFocusBackgroundColor('gray');
  }

  onFocusEventHandler = (e: MouseEvent) => {
    console.log(e.type);
    if (e.type === 'mouseover') {
      this.setBackgroundColor('white');
    } else if (e.type === 'mouseleave') {
      this.setBackgroundColor('gray');
    }
  };

  setFocusBackgroundColor(color: string) {
    this.hoverBackgroundColor = color;
  }

  setBackgroundColor(color: string) {
    super.setBackgroundColor(color);
    this.buttonElement.style.backgroundColor = color;
    this.element.style.backgroundColor = color;
  }

  setTitle(text: string) {
    this.buttonElement.textContent = text;
  }
}
