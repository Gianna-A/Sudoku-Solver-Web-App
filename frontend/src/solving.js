export const solveSudoku = (gridValues) => {
    const newGrid = gridValues.map(row => [...row]);

    const solve = (grid) => {
        if (!isBoardSolved(grid)) {
            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].length; j++) {
                    if (grid[i][j] === 0) { 
                        for (let c = 1; c <= 9; c++) {
                            if (!isElementInColumn(c, grid, j) && !isElementInSquare(c, grid, i, j) && !isElementInRow(c, grid[i])) {
                                grid[i][j] = c;
                                if (solve(grid)) {
                                    return true;
                                }
                                grid[i][j] = 0;
                            }
                        }
                        return false;
                    }
                }
            }
        }
        return true;
    };

    // call the solving function and return the updated grid
    if (solve(newGrid)) {
        return newGrid; // return solved grid
    }
    return gridValues; // return original grid if not solved
};

const isBoardSolved = (board) => {
    for (let row of board) {
        for (let element of row) {
            if (element === 0) {
                return false; 
            }
        }
    }
    return true;
};

const isElementInRow = (el, row) => row.includes(el);

const isElementInColumn = (el, board, j) => {
    for (let row of board) {
        if (row[j] === el) {
            return true;
        }
    }
    return false;
};

const isElementInSquare = (el, board, i, j) => {
    const startRow = Math.floor(i / 3) * 3;
    const startCol = Math.floor(j / 3) * 3;
    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            if (board[r][c] === el) {
                return true;
            }
        }
    }
    return false;
};

