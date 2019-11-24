// my solution beats 100% from first try

var spiralMatrixIII = function(R, C, r0, c0) {
    let direction = 'r';
    const ans = [[r0, c0]];
    let steps = 1;
    let moved = 0;
    let position = ans[ans.length - 1].slice(0);
    const N = R*C;

    while (ans.length < N) {
        for (let i = 0; i < steps; i++) {

            if (direction === 'r') {
                position[1] = position[1] + 1;
                if (i === steps - 1)  {
                    moved++
                    direction = 'd';
                }

            } else if (direction === 'd') {
                position[0] = position[0] + 1;
                if (i === steps -1) {
                    moved++
                    direction = 'l';
                }

            } else if (direction === 'l') {
                position[1] = position[1] - 1;
                if (i === steps -1) {
                    moved++;
                    direction = 'u';
                }

            } else if (direction === 'u') {
                position[0] = position[0] - 1;
                if (i === steps -1) {
                    moved++;
                    direction = 'r';
                }
            }

            if ((position[1] >= 0 && position[1] < C) && (position[0] >= 0 && position[0] < R)) {
                ans.push([position[0], position[1]]);
            }
        }

        // increase amount of steps only after it moved to two directions
        if (moved === 2) {
            steps++;
            moved = 0;
        }
    }
    return ans;
};