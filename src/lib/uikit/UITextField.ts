import { CGRectZero } from './CGRect';
import UIView from './UIView';

export default class UITextField extends UIView {
  inputElement: HTMLInputElement;

  constructor() {
    super(CGRectZero);
    this.inputElement = document.createElement('input');
    this.element.appendChild(this.inputElement);
  }

  // onLayout(height: number, width: number) {
  //   super.onLayout(height, width);
  //   this.inputElement.style.width = '100%';
  //   this.inputElement.style.height = '100%';
  //   this.inputElement.style.borderWidth = '0px';
  //   this.inputElement.style.padding = 'initial';
  //   this.element.style.backgroundColor = 'green';
  // }
}
