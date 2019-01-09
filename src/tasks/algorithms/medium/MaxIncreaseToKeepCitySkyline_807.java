package tasks.algorithms.medium;

public class MaxIncreaseToKeepCitySkyline_807 {
    public int maxIncreaseKeepingSkyline(int[][] grid) {
        // sum += max(self,min(byrow!=self,bycolumn!=self)) - self
        int sum = 0;
        int maxRows[] = new int[grid[0].length];
        int maxColumns[] = new int[grid.length];

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                maxRows[i] = Math.max(maxRows[i], grid[i][j]);
                maxColumns[j] = Math.max(maxColumns[j], grid[i][j]);
            }
        }

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                sum += Math.min(maxColumns[j], maxRows[i]) - grid[i][j];
            }
        }

        return sum;
    }
}
