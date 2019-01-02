//my solution beats 60-100%

var countBattleships = function(board) {
    let ships = 0;
    // check ships in first row
    for (let i = 0; i < board[0].length; i++) {
        if (board[0][i] === 'X' && (i === 0 || (i - 1 > -1 && board[0][i-1] !== 'X'))) {
            ships++;
        }
    }
    // check ships in second+ rows
    for (let i = 1; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            // if current === X
            if (board[i][j] === 'X'
                    // previous on top of current != X
                    && (board[i-1][j] !== 'X')
                    // previous on the left of current != X  || current === 0 (first left element)
                    && (((j - 1 > -1 && board[i][j-1] !== 'X') || j === 0 ))) {
                ships++;
            }
        }
    }

    return ships;
};