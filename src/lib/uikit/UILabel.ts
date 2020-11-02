import { CGRectZero } from './CGRect';
import UIView from './UIView';

export default class UILabel extends UIView {
  textElement: HTMLParagraphElement;

  constructor() {
    super(CGRectZero);
    this.textElement = document.createElement('p');
    this.textElement.style.marginBlockEnd = 'initial';
    this.textElement.style.marginBlockStart = 'initial';
    this.textElement.style.fontSize = '16px';
    this.element.appendChild(this.textElement);
  }

  
  setText(text: string) {
    this.textElement.textContent = text;
  }
}
