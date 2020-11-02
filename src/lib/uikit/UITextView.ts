import UIScrollView, { UIScrollViewDelegate } from './UIScrollView';

export interface UITextViewDelegate extends UIScrollViewDelegate {
  textViewDidChangeSelection?: (textView: UITextView) => void;
}

export default class UITextView extends UIScrollView {
  delegate?: UITextViewDelegate;

  textElement: HTMLParagraphElement;

  text = '';

  textColor?: string;

  constructor() {
    super();
    this.textElement = document.createElement('p');
    this.textElement.style.marginBlockEnd = 'initial';
    this.textElement.style.marginBlockStart = 'initial';
    this.textElement.style.fontSize = '16px';
    this.contentElement.appendChild(this.textElement);
  }

  // onLayout(height: number, width: number) {
  //   super.onLayout(height, width);
  //   this.setContentSize({
  //     width,
  //     height,
  //   });
  // }

  setText = (text: string) => {
    this.text = text;
    this.textElement.textContent = text;
  };
}
