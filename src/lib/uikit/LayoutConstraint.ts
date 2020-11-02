import { View, Constraint, Attribute, Relation } from 'autolayout';
import UIView from './UIView';

export { Attribute, Relation } from 'autolayout';

export class LayoutConstraint {
  static fillToParent(view: UIView) {
    this.setConstraintOn(view.element);
    this.valueOn(view.element, 0, 0, 0, 0);
  }

  static setConstraintOn(element: HTMLElement) {
    element.style.position = 'absolute';
  }

  static valueOn(
    element: HTMLElement,
    left: number,
    right: number,
    top: number,
    bottom: number
  ) {
    this.valueToLeftOn(element, left);
    this.valueToRightOn(element, right);
    this.valueToTopOn(element, top);
    this.valueToBottomOn(element, bottom);
  }

  static valueToLeftOn(element: HTMLElement, value: number) {
    element.style.left = `${value}px`;
  }

  static valueToRightOn(element: HTMLElement, value: number) {
    element.style.right = `${value}px`;
  }

  static valueToTopOn(element: HTMLElement, value: number) {
    element.style.top = `${value}px`;
  }

  static valueToBottomOn(element: HTMLElement, value: number) {
    element.style.bottom = `${value}px`;
  }

  static constraint(
    view1: UIView,
    attr1: Attribute,
    relation: Relation,
    view2: UIView,
    attr2: Attribute,
    multiplier = 1.0,
    constant = 0.0
  ): Constraint[] {
    const constraints: Constraint[] = [
      {
        view1: view1.element.id,
        attr1,
        relation,
        view2: view2.element.id,
        attr2,
        multiplier,
        constant,
      },
    ];
    return constraints;
  }

  static constraintWidth(
    view: UIView,
    constant = 0.0,
    multiplier = 1.0
  ): Constraint[] {
    const constraints: Constraint[] = [
      {
        view1: view.element.id,
        attr1: Attribute.WIDTH,
        relation: Relation.EQU,
        attr2: Attribute.CONST,
        multiplier,
        constant,
      },
    ];
    return constraints;
  }

  static constraintHeight(
    view: UIView,
    constant = 0.0,
    multiplier = 1.0
  ): Constraint[] {
    const constraints: Constraint[] = [
      {
        view1: view.element.id,
        attr1: Attribute.HEIGHT,
        relation: Relation.EQU,
        attr2: Attribute.CONST,
        multiplier,
        constant,
      },
    ];
    return constraints;
  }

  static constraintHeightToParent(
    view: UIView,
    multiplier = 1.0,
    constant = 0.0
  ): Constraint[] {
    const constraints: Constraint[] = [
      {
        view1: view.element.id,
        attr1: Attribute.HEIGHT,
        relation: Relation.EQU,
        attr2: Attribute.HEIGHT,
        multiplier,
        constant: -constant,
      },
    ];
    return constraints;
  }

  static constraintWidthToParent(
    view: UIView,
    multiplier = 1.0,
    constant = 0.0
  ): Constraint[] {
    const constraints: Constraint[] = [
      {
        view1: view.element.id,
        attr1: Attribute.WIDTH,
        relation: Relation.EQU,
        attr2: Attribute.WIDTH,
        multiplier,
        constant,
      },
    ];
    return constraints;
  }

  static constraintVerticalCenterToParent(view: UIView, constant = 1.0) {
    const constraints: Constraint[] = [
      {
        view1: view.element.id,
        attr1: Attribute.CENTERY,
        relation: Relation.EQU,
        attr2: Attribute.CENTERY,
        constant,
      },
    ];
    return constraints;
  }

  static constraintHorizontalCenterToParent(view: UIView, constant = 1.0) {
    const constraints: Constraint[] = [
      {
        view1: view.element.id,
        attr1: Attribute.CENTERX,
        relation: Relation.EQU,
        attr2: Attribute.CENTERX,
        constant,
      },
    ];
    return constraints;
  }

  static constraintLeftToParent(view: UIView, constant = 0.0): Constraint[] {
    const constraints: Constraint[] = [
      {
        view1: view.element.id,
        attr1: Attribute.LEFT,
        relation: Relation.EQU,
        attr2: Attribute.LEFT,
        constant,
      },
    ];

    return constraints;
  }

  static constraintRightToParent(view: UIView, constant = 0.0): Constraint[] {
    const constraints: Constraint[] = [
      {
        view1: view.element.id,
        attr1: Attribute.RIGHT,
        relation: Relation.EQU,
        attr2: Attribute.RIGHT,
        constant: -constant,
      },
    ];

    return constraints;
  }

  static constraintTopToParent(view: UIView, constant = 0.0): Constraint[] {
    const constraints: Constraint[] = [
      {
        view1: view.element.id,
        attr1: Attribute.TOP,
        relation: Relation.EQU,
        attr2: Attribute.TOP,
        constant,
      },
    ];

    return constraints;
  }

  static constraintBottomToParent(view: UIView, constant = 0.0): Constraint[] {
    const constraints: Constraint[] = [
      {
        view1: view.element.id,
        attr1: Attribute.BOTTOM,
        relation: Relation.EQU,
        attr2: Attribute.BOTTOM,
        constant: -constant,
      },
    ];
    return constraints;
  }

  static activate(parent: UIView, constraints: Constraint[]) {
    const layout = new View({
      constraints,
      width: parent.element.clientWidth,
      height: parent.element.clientHeight,
    });

    Object.keys(layout.subViews).forEach(function (key) {
      const element = layout.subViews[key];
      // console.log(
      //   `
      //   ${key}
      //   ${element.constructor.name}
      //   Left:${element.left},Right:${element.right},Bottom:${element.bottom},Top:${element.top},Width:${element.width},Height:${element.height}
      //   `
      // );
      document.getElementById(key)!.style.position = 'absolute';
      document.getElementById(key)!.style.left = `${element.left}px`;
      document.getElementById(key)!.style.top = `${element.top}px`;
      document.getElementById(key)!.style.width = `${element.width}px`;
      document.getElementById(key)!.style.height = `${element.height}px`;
    });
  }
}
