import UILabel from 'uikit/UILabel'
import UIImageView from 'uikit/UIImageView'
import UIButton from 'uikit/UIButton'
import {Relation,Attribute} from 'autolayout'
import {LayoutConstraint} from 'uikit/LayoutConstraint'
 
import UITableViewCell from 'uikit/UITableViewCell' 

export default class SongTableViewCell extends UITableViewCell {
  playBtn: UIButton;

  titleLb: UILabel;

  subTitleLb: UILabel;

  thumbnail: UIImageView;

  constructor() {
    super();
    this.playBtn = new UIButton();
    this.titleLb = new UILabel();
    this.subTitleLb = new UILabel();
    this.thumbnail = new UIImageView();

    this.addView(this.playBtn);
    this.addView(this.titleLb);
    this.addView(this.subTitleLb);
    this.addView(this.thumbnail);
  }

  // onLayout(height: number, width: number) {
  //   super.onLayout(height, width);

  //   LayoutConstraint.activate(this, [
  //     ...LayoutConstraint.constraintLeftToParent(this.thumbnail, 8),
  //     ...LayoutConstraint.constraintVerticalCenterToParent(this.thumbnail),
  //     ...LayoutConstraint.constraintHeight(this.thumbnail, 50),
  //     ...LayoutConstraint.constraintWidth(this.thumbnail, 50),

  //     ...LayoutConstraint.constraint(
  //       this.titleLb,
  //       Attribute.LEFT,
  //       Relation.EQU,
  //       this.thumbnail,
  //       Attribute.RIGHT
  //     ),
  //     ...LayoutConstraint.constraint(
  //       this.titleLb,
  //       Attribute.RIGHT,
  //       Relation.EQU,
  //       this.playBtn,
  //       Attribute.LEFT
  //     ),
  //     ...LayoutConstraint.constraintTopToParent(this.titleLb),
  //     ...LayoutConstraint.constraintHeight(this.titleLb, 25),
  //     ...LayoutConstraint.constraint(
  //       this.subTitleLb,
  //       Attribute.LEFT,
  //       Relation.EQU,
  //       this.thumbnail,
  //       Attribute.RIGHT
  //     ),
  //     ...LayoutConstraint.constraint(
  //       this.subTitleLb,
  //       Attribute.RIGHT,
  //       Relation.EQU,
  //       this.playBtn,
  //       Attribute.LEFT
  //     ),
  //     ...LayoutConstraint.constraintBottomToParent(this.subTitleLb),
  //     ...LayoutConstraint.constraintHeight(this.subTitleLb, 25),

  //     ...LayoutConstraint.constraintRightToParent(this.playBtn, 8),
  //     ...LayoutConstraint.constraintVerticalCenterToParent(this.playBtn),
  //     ...LayoutConstraint.constraintHeight(this.playBtn, 50),
  //     ...LayoutConstraint.constraintWidth(this.playBtn, 50),
  //   ]);
  // }
}
