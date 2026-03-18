export class Matrix {
  constructor(inputString) {
    this._matrix = inputString
      .split("\n")
      .map(row => row.trim().split(" ").map(Number));
  }

  get rows() {
     return this._matrix.map(row => [...row]);
  }

  get columns() {
    const numRows = this._matrix.length;
    const numCols = this._matrix[0].length;
    let cols = [];

    for (let col = 0; col < numCols; col++) {
      let column = [];
      for (let row = 0; row < numRows; row++) {
        column.push(this._matrix[row][col]);
      }
      cols.push(column);
    }

    return cols;
  }
}