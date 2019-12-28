/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
export const CODE = {
  NORMAL: -1,
  OPEN: -2,
  MINE: -3,
  CLICKED_MINE: -4,
  FLAG: -5,
  FLAG_MINE: -6
};

export const plantMines = data => {
  const { row, cell, mine } = data;
  const candidate = Array(row * cell)
    .fill()
    .map((arr, i) => i);

  // get mines random position
  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(chosen);
  }

  const tableData = [];

  for (let i = 0; i < row; i++) {
    const rowData = [];
    tableData.push(rowData);

    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  // plant mines
  for (let l = 0; l < shuffle.length; l++) {
    const r = Math.floor(shuffle[l] / cell);
    const c = shuffle[l] % cell;
    tableData[r][c] = CODE.MINE;
  }

  return tableData;
};
