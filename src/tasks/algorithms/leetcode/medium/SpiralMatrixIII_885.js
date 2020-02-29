// my solution beats 100% from first try

var spiralMatrixIII = function(R, C, r0, c0) {
    let direction = 'r';
    const ans = [[r0, c0]];
    let steps = 1;
    let moved = 0;
    const curr = [r0, c0];
    const N = R*C;

    while (ans.length < N) {
        const lastStep = steps - 1;

        for (let i = 0; i <= lastStep; i++) {
            if (direction === 'r') {
                curr[1]++;
                if (i === lastStep)  {
                    moved++;
                    direction = 'd';
                }
            } else if (direction === 'd') {
                curr[0]++;
                if (i === lastStep) {
                    moved++;
                    direction = 'l';
                }
            } else if (direction === 'l') {
                curr[1]--;
                if (i === lastStep) {
                    moved++;
                    direction = 'u';
                }
            } else if (direction === 'u') {
                curr[0]--;
                if (i === lastStep) {
                    moved++;
                    direction = 'r';
                }
            }

            if ((curr[1] >= 0 && curr[1] < C) && (curr[0] >= 0 && curr[0] < R)) {
                ans.push([curr[0], curr[1]]);
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
