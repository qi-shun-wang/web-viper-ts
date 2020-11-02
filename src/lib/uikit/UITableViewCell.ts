import { CGRectZero } from './CGRect';
import UIView from './UIView';

export default class UITableViewCell extends UIView {
  element: HTMLTableRowElement;

  wrap: HTMLDivElement;

  childView: Array<UIView> = [];

  height = 0;

  constructor() {
    super(CGRectZero);
    this.element = document.createElement('tr');
    this.wrap = document.createElement('div');
    this.wrap.style.position = 'absolute';
    this.element.appendChild(this.wrap);
    this.setBackgroundColor(`red`);
  }

  addView(view: UIView) {
    this.childView.push(view);
    this.wrap.appendChild(view.element);
  }

  // onLayout(height: number, width: number) {
  //   super.onLayout(height, width);
  //   this.childView.forEach((v) => {
  //     v.onLayout(this.height, width);
  //   });
  // }

  setHeight(value: number) {
    super.setHeight(value);
    this.height = value;
  }
}
