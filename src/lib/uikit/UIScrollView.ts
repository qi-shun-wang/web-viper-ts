import { CGPoint, CGPointZero } from './CGPoint';
import { CGRectZero } from './CGRect';
import { CGSize, CGSizeZero } from './CGSize';
import UIView from './UIView';

export interface UIScrollViewDelegate {
  scrollViewDidScroll?: (scrollView: UIScrollView) => void;
}

export default class UIScrollView extends UIView {
  delegate?: UIScrollViewDelegate;

  contentElement: HTMLDivElement;

  contentSize: CGSize = CGSizeZero;

  contentOffset: CGPoint = CGPointZero;

  isScrollEnabled = true;

  constructor() {
    super(CGRectZero);
    this.contentElement = document.createElement('div');
    this.element.appendChild(this.contentElement);
    this.setScroll(true);
  }

  // onLayout(height: number, width: number) {
  //   super.onLayout(height, width);
  //   if (this.contentSize === CGSizeZero) {
  //     this.setContentSize({
  //       width,
  //       height,
  //     });
  //   }
  // }

  setContentBackgroundColor(color: string) {
    this.contentElement.style.backgroundColor = color;
  }

  setContentSize(size: CGSize) {
    this.contentSize = size;
    this.contentElement.style.height = `${size.height}px`;
    this.contentElement.style.width = `${size.width}px`;
  }

  setContentOffset(point: CGPoint, animated: boolean) {
    this.contentOffset.x = point.x;
    this.contentOffset.y = point.y;
  }

  setScroll(isEnable: boolean) {
    this.isScrollEnabled = isEnable;
    if (this.isScrollEnabled) {
      this.element.style.overflow = 'scroll';
    }
  }
}
