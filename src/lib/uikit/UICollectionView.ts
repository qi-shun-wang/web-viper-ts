import UIScrollView, { UIScrollViewDelegate } from './UIScrollView';
import UICollectionViewCell from './UICollectionViewCell';
import { CGRect } from './CGRect';

export interface UICollectionViewLayoutDelegate {
  itemSizeRaitoAt?: (index: number, collectionView: UICollectionView) => number;
  separatedAmount: (collectionView: UICollectionView) => number;
}

export interface UICollectionViewDelegate extends UIScrollViewDelegate {
  didSelectItemAt?: (index: number, collectionView: UICollectionView) => void;
}

export interface UICollectionViewDataSource {
  numberOfItems: (collectionView: UICollectionView) => number;
  cellForItemAt: (
    index: number,
    collectionView: UICollectionView
  ) => UICollectionViewCell;
}

export enum Direction {
  vertical,
  horizontal,
}

export default class UICollectionView extends UIScrollView {
  scrollDirection = Direction.vertical;

  tableElement: HTMLDivElement;

  dataSource?: UICollectionViewDataSource;

  delegate?: UICollectionViewDelegate;

  layoutDelegate?: UICollectionViewLayoutDelegate;

  registeredCell: Map<string, new () => UICollectionViewCell> = new Map();

  visibleCells: Array<UICollectionViewCell> = [];

  layoutAttributes: Map<number, CGRect> = new Map();

  constructor() {
    super();
    this.tableElement = document.createElement('div');
    // this.tableElement.style.borderSpacing = 'unset';
    this.contentElement.appendChild(this.tableElement);
  }

  // onLayout(height: number, width: number) {
  //   super.onLayout(height, width);
  //   this.tableElement.style.width = '100%';
  //   this.tableElement.style.height = '100%';
  //   // this.inputElement.style.borderWidth = '0px';
  //   // this.inputElement.style.padding = 'initial';
  //   this.setBackgroundColor('green');
  //   this.setContentSize({
  //     width,
  //     height,
  //   });
  //   this.reloadData();
  // }

  register(
    cellClass: new () => UICollectionViewCell,
    forCellReuseIdentifier: string
  ) {
    this.registeredCell.set(forCellReuseIdentifier, cellClass);
  }

  dequeueReusableCellAndAddToTable(
    withIdentifier: string,
    index: number
  ): UICollectionViewCell {
    let cell: UICollectionViewCell = this.visibleCells[index];

    if (cell === undefined) {
      const CellType = this.registeredCell.get(withIdentifier);
      if (CellType) {
        cell = new CellType();
        this.visibleCells.push(cell);
      } else {
        throw Error(
          `${withIdentifier} UICollectionViewCell must be registered before use it.`
        );
      }
      cell = this.visibleCells[index];
    }
    return cell;
  }

  // dequeueReusableCell(withIdentifier: String): UITableViewCell | null {
  //   return null;
  // }

  reloadData() {
    this.resetTable();

    const items = this.dataSource?.numberOfItems(this) ?? 0;

    for (let index = 0; index < items; index += 1) {
      const newRow = this.dataSource?.cellForItemAt(index, this);
      if (newRow) {
        this.tableElement.append(newRow!.element);
      }
    }

    const separatedAmount = this.layoutDelegate?.separatedAmount(this) ?? 1;

    for (let index = 0; index < items; index += 1) {
      const newRow = this.dataSource?.cellForItemAt(index, this);
      const newRowRatio =
        this.layoutDelegate?.itemSizeRaitoAt!(index, this) ?? 1;
      const lastLayout = this.layoutAttributes.get(index - separatedAmount);
      const height =
        this.scrollDirection === Direction.vertical
          ? this.getFrame().size.width / separatedAmount / newRowRatio
          : this.getFrame().size.height / separatedAmount;

      const width =
        this.scrollDirection === Direction.vertical
          ? this.getFrame().size.width / separatedAmount
          : (this.getFrame().size.height / separatedAmount) * newRowRatio;

      const x =
        this.scrollDirection === Direction.vertical
          ? (index % separatedAmount) * width
          : (lastLayout?.point?.x ?? 0) + (lastLayout?.size?.width ?? 0);

      const y =
        this.scrollDirection === Direction.vertical
          ? (lastLayout?.point?.y ?? 0) + (lastLayout?.size?.height ?? 0)
          : (index % separatedAmount) * height;

      this.layoutAttributes.set(index, {
        point: { x, y },
        size: { height, width },
      });

      if (newRow) {
        newRow.setHeight(height);
        newRow.setWidth(width);
        // newRow.onLayout(height, width);
        newRow.setPoint({ x, y });
      }
    }
  }

  private resetTable() {
    while (this.tableElement.lastChild) {
      this.tableElement.removeChild(this.tableElement.lastChild);
    }
  }
}
