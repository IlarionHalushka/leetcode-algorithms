var projectionArea = function(grid) {
    let sum = 0;

    for (let i = 0; i < grid.length; i++) {
        let maxesY = 0
        let maxesZ = 0;

        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] > 0) sum++;
            maxesY = Math.max(maxesY, grid[i][j]);
            maxesZ = Math.max(maxesZ, grid[j][i]);
        }
        sum += maxesY + maxesZ;
    }

    return sum;
};