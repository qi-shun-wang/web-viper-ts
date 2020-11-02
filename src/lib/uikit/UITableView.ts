import UITableViewCell from './UITableViewCell';
import UIScrollView, { UIScrollViewDelegate } from './UIScrollView';

export interface UITableViewDelegate extends UIScrollViewDelegate {
  heightForRowAt: (index: number, tableView: UITableView) => number;
}

export interface UITableViewDataSource {
  numberOfRows: (tableView: UITableView) => number;
  cellForRowAt: (index: number, tableView: UITableView) => UITableViewCell;
}

export default class UITableView extends UIScrollView {
  tableElement: HTMLTableElement;

  dataSource?: UITableViewDataSource;

  delegate?: UITableViewDelegate;

  registeredCell: Map<string, new () => UITableViewCell> = new Map();

  visibleCells: Array<UITableViewCell> = [];

  constructor() {
    super();
    this.tableElement = document.createElement('table');
    this.tableElement.style.borderSpacing = 'unset';
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
    cellClass: new () => UITableViewCell,
    forCellReuseIdentifier: string
  ) {
    this.registeredCell.set(forCellReuseIdentifier, cellClass);
  }

  dequeueReusableCellAndAddToTable(
    withIdentifier: string,
    index: number
  ): UITableViewCell {
    let cell: UITableViewCell = this.visibleCells[index];

    if (cell === undefined) {
      const CellType = this.registeredCell.get(withIdentifier);
      if (CellType) {
        cell = new CellType();
        this.visibleCells.push(cell);
      } else {
        throw Error(
          `${withIdentifier} UITableViewCell must be registered before use it.`
        );
      }
      cell = this.visibleCells[index];
    }
    return cell ;
  }

  // dequeueReusableCell(withIdentifier: String): UITableViewCell | null {
  //   return null;
  // }

  reloadData() {
    // this.resetTable();

    const rows = this.dataSource?.numberOfRows(this) ?? 0;

    for (let index = 0; index < rows; index += 1) {
      const newRow = this.dataSource?.cellForRowAt(index, this);
      if (newRow) {
        this.tableElement.append(newRow!.element);
      }
    }

    for (let index = 0; index < rows; index += 1) {
      const newRow = this.dataSource?.cellForRowAt(index, this);
      if (newRow) {
        const height = this.delegate?.heightForRowAt(index, this) ?? 50;
        newRow.setHeight(height);
        // newRow.onLayout(height, this.tableElement.clientWidth);
      }
    }
  }

  private resetTable() {
    while (this.tableElement.lastChild) {
      this.tableElement.removeChild(this.tableElement.lastChild);
    }
  }
}
