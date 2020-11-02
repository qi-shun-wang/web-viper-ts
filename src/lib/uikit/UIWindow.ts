import UIView from './UIView';
import { CGRectZero } from './CGRect';

export default class UIWindow extends UIView {
  constructor() {
    super(CGRectZero);
    this.id = 'keyWindow';
    this.element.id = this.id;
    this.enableAutoResize = true;

    this.element.style.position = 'absolute';
    this.element.style.left = '0dp';
    this.element.style.top = '0dp';
    this.element.style.overflowY = 'unset';

    document.body.style.position = 'fixed';
    document.body.style.top = '0px';
    document.body.style.bottom = '0px';
    document.body.style.left = '0px';
    document.body.style.right = '0px';
    document.body.style.margin = '0px';

    window.addEventListener('resize', () => {
      console.log(`will resize=>${JSON.stringify(this.frame)}`);
      this.updateSize({ height: window.innerHeight, width: window.innerWidth });
      this.onWindowResize({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      console.log(`did resize=>${JSON.stringify(this.frame)}`);
    });

    window.addEventListener('load', () => {
      console.log(`will load=>${JSON.stringify(this.frame)}`);
      this.updateSize({ height: window.innerHeight, width: window.innerWidth });
      this.onWindowResize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      console.log(`did load=>${JSON.stringify(this.frame)}`);
    });
  }
}
