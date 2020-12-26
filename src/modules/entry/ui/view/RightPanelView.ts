import SongTableViewCell from './SongTableViewCell';
import exampleText from './constants';
import { UITableViewDataSource, UITableViewDelegate } from 'or-ui/kit/UITableView'
import UIView from 'or-ui/kit/UIView'
import { CGRectZero } from 'or-ui/kit/CGRect'
import { CGSize } from 'or-ui/kit/CGSize'
import UITextView from 'or-ui/kit/UITextView'
import UITableView from 'or-ui/kit/UITableView'
import UIButton from 'or-ui/kit/UIButton'
import { Relation, Attribute, LayoutConstraint } from 'or-ui/kit'
import UITableViewCell from 'or-ui/kit/UITableViewCell'

export default class RightPanelView
  extends UIView
  implements UITableViewDataSource, UITableViewDelegate {
  sendButton: UIButton;

  // scrollView: UIScrollView;

  textView: UITextView;

  // list: UITableView;

  data = [0, 1, 2, 3, 4, 5, 6, 7];

  baseHeight = 50;

  constructor() {
    super(CGRectZero);
    this.element.innerText = this.constructor.name;
    this.element.style.backgroundColor = 'gray';
    this.sendButton = new UIButton();
    this.sendButton.setTitle('Create');
    this.sendButton.setBackgroundColor('blue');

    // this.scrollView = new UIScrollView();
    // this.scrollView.setBackgroundColor('green');
    // this.scrollView.setContentBackgroundColor('gray');
    // this.scrollView.setContentSize({ width: 1000, height: 400000 });

    this.textView = new UITextView();
    this.textView.setText(exampleText);

    // this.list = new UITableView();
    // this.list.dataSource = this;
    // this.list.delegate = this;
    // this.list.register(SongTableViewCell, 'TestCellID');

    this.addView(this.sendButton);
    // this.addView(this.list);
    // this.addView(this.scrollView);
    this.addView(this.textView);
    // this.toDataUrl('https://i.imgur.com/vyLA9ue.png', (url, r) => {
    //   this.cachedImage.set(url, r);
    // });
  }

  heightForRowAt(index: number, tableView: UITableView): number {
    return (index % 2) * 10 + this.baseHeight;
  }

  numberOfRows(tableView: UITableView): number {
    // console.log(`numberOfRows.visibleCells:${tableView.visibleCells.length}`);
    return this.data.length;
  }

  // toDataUrl(
  //   url: string,
  //   callback: (url: string, result: string | ArrayBuffer | null) => void
  // ) {
  //   let xhr = new XMLHttpRequest();
  //   xhr.onload = function () {
  //     let reader = new FileReader();
  //     reader.result;
  //     reader.onloadend = () => {
  //       callback(url, reader.result);
  //     };
  //     reader.readAsDataURL(xhr.response);
  //   };
  //   xhr.open('GET', url);
  //   xhr.responseType = 'blob';
  //   xhr.send();
  // }

  cachedImage: Map<string, any> = new Map<string, any>();

  cellForRowAt(index: number, tableView: UITableView): UITableViewCell {
    const cell = tableView.dequeueReusableCellAndAddToTable(
      'TestCellID',
      index
    ) as SongTableViewCell;
    cell.playBtn.setTitle(`Play${this.data[index]}`);
    cell.titleLb.setText(`Title${this.data[index]}`);
    cell.subTitleLb.setText(`SubTitle${this.data[index]}`);
    cell.thumbnail.setImage(
      this.cachedImage.get('https://i.imgur.com/vyLA9ue.png')
    );

    return cell;
  }

  setupConstraints() {
    LayoutConstraint.activate(this, [
      ...LayoutConstraint.constraintHeight(this.sendButton, 50),
      ...LayoutConstraint.constraintWidth(this.sendButton, 50),
      ...LayoutConstraint.constraintRightToParent(this.sendButton, 8),
      ...LayoutConstraint.constraintTopToParent(this.sendButton, 8),

      ...LayoutConstraint.constraintLeftToParent(this.textView),
      ...LayoutConstraint.constraintTopToParent(this.textView),
      ...LayoutConstraint.constraintBottomToParent(this.textView),
      ...LayoutConstraint.constraint(
        this.textView,
        Attribute.RIGHT,
        Relation.EQU,
        this.sendButton,
        Attribute.LEFT
      ),
    ]);
  }

  onWindowResize(size: CGSize) {
    console.log(`RightPanelView onWindowResize=>${JSON.stringify(this.frame)}`);
    this.setupConstraints();
  }

  updateConstraints(parent: UIView) {
    this.setupConstraints();
  }
}
