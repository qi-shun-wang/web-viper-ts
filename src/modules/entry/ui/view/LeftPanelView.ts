import UICollectionView from 'or-ui/kit/UICollectionView'
import { UICollectionViewDataSource, UICollectionViewLayoutDelegate } from 'or-ui/kit/UICollectionView'
import UIView from 'or-ui/kit/UIView'
import { CGRectZero } from 'or-ui/kit/CGRect'

export default class LeftPanelView
  extends UIView
  implements UICollectionViewDataSource, UICollectionViewLayoutDelegate {
  // nameField: UITextField;

  // artistField: UITextField;

  // fileField: UITextField;

  // label: UILabel;

  // imageView: UIImageView;

  // collection: UICollectionView;

  data = [1.5, 1, 0.5, 2, 1.33, 0.6, 0.8, 1.7, 1.8];

  column = 3;

  constructor() {
    super(CGRectZero);
    this.element.innerText = this.constructor.name;

    // this.nameField = new UITextField();
    // this.nameField.inputElement.placeholder = 'Name';
    // this.nameField.inputElement.inputMode = 'text';

    // this.artistField = new UITextField();
    // this.artistField.inputElement.placeholder = 'Artist Name';
    // this.artistField.inputElement.inputMode = 'text';

    // this.fileField = new UITextField();
    // this.fileField.inputElement.placeholder = 'File Path';
    // this.fileField.inputElement.inputMode = 'text';

    // this.label = new UILabel();
    // this.label.setText('UILabel');

    // this.imageView = new UIImageView();
    // this.imageView.setImage('https://i.imgur.com/vyLA9ue.png');

    // this.collection = new UICollectionView();
    // this.collection.dataSource = this;
    // this.collection.scrollDirection = Direction.horizontal;
    // this.collection.layoutDelegate = this;
    // this.collection.register(UICollectionViewCell, 'C2');

    // this.addView(this.label);
    // this.addView(this.nameField);
    // this.addView(this.artistField);
    // this.addView(this.fileField);
    // this.addView(this.imageView);
    // this.addView(this.collection);
    this.setBackgroundColor('purple');
  }

  itemSizeRaitoAt(index: number, collectionView: UICollectionView) {
    return this.data[index];
  }

  separatedAmount(collectionView: UICollectionView) {
    return this.column;
  }

  numberOfItems(collectionView: UICollectionView) {
    return this.data.length;
  }

  cellForItemAt(index: number, collectionView: UICollectionView) {
    const cell = collectionView.dequeueReusableCellAndAddToTable('C2', index);
    cell.element.innerText = `${index} ${this.data[index]}`;
    cell.setBackgroundColor(
      `rgb(${(50 * index) % 255}, ${50}, ${(10 * index) % 255})`
    );
    return cell;
  }

  onLayout(height: number, width: number) {
    // super.onLayout(height, width);
    // LayoutConstraint.activate(this, [
    //   ...LayoutConstraint.constraintHeight(this.nameField, 50),
    //   ...LayoutConstraint.constraintTopToParent(this.nameField, 8),
    //   ...LayoutConstraint.constraintLeftToParent(this.nameField, 8),
    //   ...LayoutConstraint.constraintRightToParent(this.nameField, 8),

    //   ...LayoutConstraint.constraintHeight(this.label, 50),
    //   ...LayoutConstraint.constraint(
    //     this.label,
    //     Attribute.TOP,
    //     Relation.EQU,
    //     this.nameField,
    //     Attribute.BOTTOM
    //   ),
    //   ...LayoutConstraint.constraintLeftToParent(this.label, 8),
    //   ...LayoutConstraint.constraintRightToParent(this.label, 8),

    //   ...LayoutConstraint.constraintHeight(this.imageView, 50),
    //   ...LayoutConstraint.constraintWidth(this.imageView, 50),
    //   ...LayoutConstraint.constraint(
    //     this.imageView,
    //     Attribute.TOP,
    //     Relation.EQU,
    //     this.label,
    //     Attribute.BOTTOM
    //   ),
    //   ...LayoutConstraint.constraintLeftToParent(this.imageView, 8),

    //   ...LayoutConstraint.constraintRightToParent(this.collection, 8),
    //   ...LayoutConstraint.constraint(
    //     this.collection,
    //     Attribute.TOP,
    //     Relation.EQU,
    //     this.label,
    //     Attribute.BOTTOM
    //   ),
    //   ...LayoutConstraint.constraint(
    //     this.collection,
    //     Attribute.LEFT,
    //     Relation.EQU,
    //     this.imageView,
    //     Attribute.RIGHT
    //   ),
    //   ...LayoutConstraint.constraint(
    //     this.collection,
    //     Attribute.BOTTOM,
    //     Relation.EQU,
    //     this.fileField,
    //     Attribute.TOP
    //   ),

    //   ...LayoutConstraint.constraintHeightToParent(this.artistField, 0.5, 8),
    //   ...LayoutConstraint.constraintBottomToParent(this.artistField, 0),
    //   ...LayoutConstraint.constraintLeftToParent(this.artistField, 0),
    //   ...LayoutConstraint.constraintWidthToParent(this.artistField, 0.5, 0),

    //   ...LayoutConstraint.constraintHeightToParent(this.fileField, 0.5, 8),
    //   ...LayoutConstraint.constraintBottomToParent(this.fileField, 0),
    //   ...LayoutConstraint.constraintRightToParent(this.fileField, 0),

    //   ...LayoutConstraint.constraint(
    //     this.artistField,
    //     Attribute.RIGHT,
    //     Relation.EQU,
    //     this.fileField,
    //     Attribute.LEFT,
    //     1,
    //     -8
    //   ),
    // ]);
  }
}
