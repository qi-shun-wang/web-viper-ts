import { EntryViewInterface } from './EntryViewInterface';
import { ViewTransitionDelegate } from '../../../../core/ui/ViewTransitionDelegate';
 
import LeftPanelView from './LeftPanelView';
import RightPanelView from './RightPanelView';
import { EntryModuleInterface } from '../../mi/EntryModuleInterface'; 
import UIView from 'uikit/UIView' 
import {CGRect} from 'uikit/CGRect'
import {Relation,Attribute} from 'autolayout'
import {LayoutConstraint} from 'uikit/LayoutConstraint' 
import {CGRectZero} from 'uikit/CGRect'
import {CGSize} from 'uikit/CGSize'
export default class EntryView extends UIView implements EntryViewInterface {
  eventHandler?: EntryModuleInterface;

  transitionDelegate?: ViewTransitionDelegate;

  rightPanel: RightPanelView;

  leftPanel: LeftPanelView;

  seperator: UIView;

  divider1: UIView;

  panel1: UIView;

  divider2: UIView;

  panel2: UIView;

  divider3: UIView;

  panel3: UIView;

  seperatorConstant = 100;

  divider1Constant = -100;

  divider2Constant = 50;

  divider3Constant = -50;

  constructor(frame: CGRect) {
    super(frame);
    this.element.innerText = this.constructor.name;
    this.leftPanel = new LeftPanelView();
    this.rightPanel = new RightPanelView();
    this.seperator = new UIView(CGRectZero);
    this.divider1 = new UIView(CGRectZero);
    this.panel1 = new UIView(CGRectZero);
    this.divider2 = new UIView(CGRectZero);
    this.panel2 = new UIView(CGRectZero);
    this.divider3 = new UIView(CGRectZero);
    this.panel3 = new UIView(CGRectZero);

    this.seperator.element.innerText = 'seperator';
    this.divider1.element.innerText = 'divider1';
    this.divider2.element.innerText = 'divider2';
    this.divider3.element.innerText = 'divider3';
    this.panel1.element.innerText = 'panel1';
    this.panel2.element.innerText = 'panel2';
    this.panel3.element.innerText = 'panel3';

    this.divider1.element.style.textAlign = 'center';
    this.divider2.element.style.textAlign = 'center';
    this.divider3.element.style.textAlign = 'center';
    this.seperator.element.style.textAlign = 'end';
    this.rightPanel.element.style.textAlign = 'end';
    this.panel1.element.style.textAlign = 'center';

    this.panel1.setBackgroundColor('black');

    this.setBackgroundColor('pink');

    this.divider1.setOnFocusListener((isFocus) => {
      this.divider1.element.style.cursor = isFocus ? 'col-resize' : 'none';
      this.divider1.setBackgroundColor(isFocus ? 'blue' : 'green');
    });

    this.divider1.setOnDragListener((movement) => {
      this.divider1.element.style.cursor = 'col-resize';
      if (movement.x > 0) {
        if (this.divider1Constant + 10 > this.seperatorConstant) {
          this.seperatorConstant += movement.x;
        }
        this.divider1Constant += movement.x;
      } else {
        this.divider1Constant += movement.x;
      }
      this.updateConstraints();
    });

    this.seperator.setOnFocusListener((isFocus) => {
      this.seperator.element.style.cursor = isFocus ? 'col-resize' : 'none';
      this.seperator.setBackgroundColor(isFocus ? 'red' : 'green');
    });

    this.seperator.setOnDragListener((movement) => {
      this.seperator.element.style.cursor = 'col-resize';
      if (movement.x > 0) {
        this.seperatorConstant += movement.x;
      } else {
        if (this.seperatorConstant - 10 < this.divider1Constant) {
          this.divider1Constant += movement.x;
        }
        this.seperatorConstant += movement.x;
      }
      this.updateConstraints();
      this.rightPanel.updateConstraints(this);
    });

    this.divider2.setOnFocusListener((isFocus) => {
      this.divider2.element.style.cursor = isFocus ? 'row-resize' : 'none';
      this.divider2.setBackgroundColor(isFocus ? 'red' : 'green');
    });

    this.divider2.setOnDragListener((movement) => {
      this.divider2.element.style.cursor = 'row-resize';
      this.divider2Constant += movement.y;
      this.updateConstraints();
    });

    this.divider3.setOnFocusListener((isFocus) => {
      this.divider3.element.style.cursor = isFocus ? 'row-resize' : 'none';
      this.divider3.setBackgroundColor(isFocus ? 'red' : 'green');
    });

    this.divider3.setOnDragListener((movement) => {
      this.divider3.element.style.cursor = 'row-resize';
      this.divider3Constant += movement.y;
      this.updateConstraints();
    });

    this.rightPanel.sendButton.setOnClickListener(() => {
      this.eventHandler?.performBackAction();
    });

    this.addView(this.leftPanel);
    this.addView(this.rightPanel);
    this.addView(this.panel1);
    this.addView(this.panel2);
    this.addView(this.panel3);
    this.addView(this.seperator);
    this.addView(this.divider1);
    this.addView(this.divider2);
    this.addView(this.divider3);
  }

  onWindowResize(size: CGSize) {
    console.log(`Entry onWindowResize=>${JSON.stringify(this.frame)}`);

    this.updateSize(size);
    this.updateConstraints();
    this.rightPanel.onWindowResize(size);
  }

  present(): void {
    this.transitionDelegate?.shouldAttachToSuperview();
  }

  dismiss(): void {
    this.transitionDelegate?.shouldRemoveFromSuperview();
  }

  updateConstraints() {
    // LayoutConstraint.fillToParent(this);
    LayoutConstraint.activate(this, [
      // divider1
      ...LayoutConstraint.constraintTopToParent(this.divider1, 0),
      ...LayoutConstraint.constraintBottomToParent(this.divider1, 0),
      ...LayoutConstraint.constraintHorizontalCenterToParent(
        this.divider1,
        this.divider1Constant
      ),
      ...LayoutConstraint.constraintWidth(this.divider1, 5),
      // left panel
      ...LayoutConstraint.constraintLeftToParent(this.leftPanel, 0),
      ...LayoutConstraint.constraintTopToParent(this.leftPanel, 0),
      ...LayoutConstraint.constraint(
        this.leftPanel,
        Attribute.RIGHT,
        Relation.EQU,
        this.divider1,
        Attribute.LEFT
      ),
      ...LayoutConstraint.constraint(
        this.leftPanel,
        Attribute.BOTTOM,
        Relation.EQU,
        this.divider2,
        Attribute.TOP
      ),
      // divider2
      ...LayoutConstraint.constraintLeftToParent(this.divider2),
      ...LayoutConstraint.constraint(
        this.divider2,
        Attribute.RIGHT,
        Relation.EQU,
        this.divider1,
        Attribute.LEFT
      ),
      ...LayoutConstraint.constraintVerticalCenterToParent(
        this.divider2,
        this.divider2Constant
      ),
      ...LayoutConstraint.constraintHeight(this.divider2, 5),
      // divider3
      ...LayoutConstraint.constraint(
        this.divider3,
        Attribute.LEFT,
        Relation.EQU,
        this.divider1,
        Attribute.RIGHT
      ),
      ...LayoutConstraint.constraint(
        this.divider3,
        Attribute.RIGHT,
        Relation.EQU,
        this.seperator,
        Attribute.LEFT
      ),
      ...LayoutConstraint.constraintVerticalCenterToParent(
        this.divider3,
        this.divider3Constant
      ),
      ...LayoutConstraint.constraintHeight(this.divider3, 5),
      // panel 3
      ...LayoutConstraint.constraint(
        this.panel3,
        Attribute.RIGHT,
        Relation.EQU,
        this.seperator,
        Attribute.LEFT
      ),
      ...LayoutConstraint.constraint(
        this.panel3,
        Attribute.LEFT,
        Relation.EQU,
        this.divider1,
        Attribute.RIGHT
      ),
      ...LayoutConstraint.constraint(
        this.panel3,
        Attribute.TOP,
        Relation.EQU,
        this.divider3,
        Attribute.BOTTOM
      ),
      ...LayoutConstraint.constraintBottomToParent(this.panel3),
      // panel 2
      ...LayoutConstraint.constraint(
        this.panel2,
        Attribute.RIGHT,
        Relation.EQU,
        this.divider1,
        Attribute.LEFT
      ),
      ...LayoutConstraint.constraint(
        this.panel2,
        Attribute.TOP,
        Relation.EQU,
        this.divider2,
        Attribute.BOTTOM
      ),
      ...LayoutConstraint.constraintLeftToParent(this.panel2),
      ...LayoutConstraint.constraintBottomToParent(this.panel2),
      // panel 1
      ...LayoutConstraint.constraint(
        this.panel1,
        Attribute.RIGHT,
        Relation.EQU,
        this.seperator,
        Attribute.LEFT
      ),
      ...LayoutConstraint.constraintTopToParent(this.panel1, 0),
      ...LayoutConstraint.constraint(
        this.panel1,
        Attribute.LEFT,
        Relation.EQU,
        this.divider1,
        Attribute.RIGHT
      ),
      ...LayoutConstraint.constraint(
        this.panel1,
        Attribute.BOTTOM,
        Relation.EQU,
        this.divider3,
        Attribute.TOP
      ),
      // sperator
      ...LayoutConstraint.constraintTopToParent(this.seperator, 0),
      ...LayoutConstraint.constraintBottomToParent(this.seperator, 0),
      ...LayoutConstraint.constraintHorizontalCenterToParent(
        this.seperator,
        this.seperatorConstant
      ),
      ...LayoutConstraint.constraintWidth(this.seperator, 5),
      // right panel
      ...LayoutConstraint.constraint(
        this.rightPanel,
        Attribute.LEFT,
        Relation.EQU,
        this.seperator,
        Attribute.RIGHT
      ),
      ...LayoutConstraint.constraintTopToParent(this.rightPanel, 0),
      ...LayoutConstraint.constraintRightToParent(this.rightPanel, 0),
      ...LayoutConstraint.constraintBottomToParent(this.rightPanel, 0),
    ]);
  }

  updateServerStatus(status: string): void {
    // this.leftPanel.label.setText(status);
    this.leftPanel.element.innerText = status;
  }
}
