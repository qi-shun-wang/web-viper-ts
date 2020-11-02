import { CGRectZero } from './CGRect';
import { CGSizeZero } from './CGSize';
import UIView from './UIView';

export default class UICollectionViewCell extends UIView {
  wrap: HTMLDivElement;

  childView: Array<UIView> = [];

  height = 0;

  width = 0;

  constructor() {
    super(CGRectZero);
    this.element.style.position = 'absolute';
    this.wrap = document.createElement('div');
    this.wrap.style.position = 'absolute';
    this.element.appendChild(this.wrap);
    this.setBackgroundColor(`purple`);
  }

  addView(view: UIView) {
    this.childView.push(view);
    this.wrap.appendChild(view.element);
  } 

  setHeight(value: number) {
    super.setHeight(value);
    this.height = value;
  }

  setWidth(value: number) {
    super.setWidth(value);
    this.width = value;
  }
}
