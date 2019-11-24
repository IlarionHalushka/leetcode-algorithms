// my solution beats 92%

var updateBoard = function(board, click) {
    const row = click[0];
    const column = click[1];

    if (board[row][column] === 'M') {
        board[row][column] = 'X';
        return board;

    } else if (board[row][column] === 'E') {
        const count = adjacentMinesCount(board, row, column);

        if (count === 0) {
            board[row][column] = 'B';

            // down, up, right, left neighbours
            if (row + 1 < board.length && board[row + 1][column] === 'E') {
                board = updateBoard(board, [row + 1, column]);
            }
            if (row - 1 >= 0 && board[row - 1][column] === 'E') {
                board = updateBoard(board, [row - 1, column]);
            }
            if (column + 1 < board[0].length && board[row][column + 1] === 'E') {
                board = updateBoard(board, [row, column + 1]);
            }
             if (column - 1 >= 0 && board[row][column - 1] === 'E') {
                board = updateBoard(board, [row, column - 1]);
            }

            // diagonal neighbours --
            if (column - 1 >= 0 && row - 1 >= 0 && board[row - 1][column - 1] === 'E') {
                board = updateBoard(board, [row - 1, column - 1]);
            }

            // diagonal neighbours ++
            if (column + 1 < board[0].length
                && row + 1 < board.length
                && board[row + 1][column + 1] === 'E') {
                board = updateBoard(board, [row + 1, column + 1]);
            }

            // diagonal neighbours +-
            if (column - 1 >= 0
                && row + 1 < board.length
                && board[row + 1][column - 1] === 'E') {
                board = updateBoard(board, [row + 1, column - 1]);
            }

           // diagonal neighbours -+
            if (column + 1 < board[0].length
                && row - 1 >= 0
                && board[row - 1][column + 1] === 'E') {
                board = updateBoard(board, [row - 1, column + 1]);
            }

        } else {
            board[row][column] = count + '';
        }

    }
    return board;
};

var adjacentMinesCount = function(board, row, column) {
    let count = 0;

    // down, up, right, left neighrobs
    if (row + 1 < board.length && board[row + 1][column] === 'M') {
        count++;
    }
    if (row - 1 >= 0 && board[row - 1][column] === 'M') {
        count++;
    }
    if (column + 1 < board[0].length && board[row][column + 1] === 'M') {
        count++;
    }
     if (column - 1 >= 0 && board[row][column - 1] === 'M') {
        count++;
    }

    // diagonal neighbours --
    if (column - 1 >= 0 && row - 1 >= 0 && board[row - 1][column - 1] === 'M') {
        count++;
    }

    // diagonal neighbours ++
    if (column + 1 < board[0].length
        && row + 1 < board.length
        && board[row + 1][column + 1] === 'M') {
        count++;
    }

    // diagonal neighbours +-
    if (column - 1 >= 0
        && row + 1 < board.length
        && board[row + 1][column - 1] === 'M') {
        count++;
    }

   // diagonal neighbours -+
    if (column + 1 < board[0].length
        && row - 1 >= 0
        && board[row - 1][column + 1] === 'M') {
        count++;
    }

    return count;
}