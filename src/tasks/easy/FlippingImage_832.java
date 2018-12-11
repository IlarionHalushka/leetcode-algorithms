package tasks.easy;

import java.io.IOException;

class FlippingImage_832 {
    public static void main(String[] args) throws IOException {
        int[][] array = new int[][]{{1,0,1},{1,0,0},{0,0,1},{1,1,1},{0,1,0}};

        FlippingImage_832.flipAndInvertImage(array);
    }

    public static int[][] flipAndInvertImage(int[][] A) {
        for (int i = 0; i < A.length; i ++) {
            int tmp = A[i][0];
            A[i][1] = A[i][1] == 0 ? 1 : 0;
            A[i][0] = A[i][2] == 0 ? 1 : 0;
            A[i][2] = tmp == 0 ? 1 : 0;
        }
        return A;
    }
}