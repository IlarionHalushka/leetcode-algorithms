package tasks.easy;

import java.util.ArrayList;
import java.util.Arrays;

class SortArrayByParity_905 {
    public static void main(String[] args) {
        int[] array = new int[]{3,1,2,4};
        System.out.println(Arrays.toString(sortArrayByParity(array)));
    }

    public static int[] sortArrayByParity(int[] A) {
        ArrayList<Integer> result = new ArrayList<>();

        for (int i = 0; i < A.length; i++) {
            if (A[i] % 2 != 0) {
                result.add(A[i]);
            } else {
                result.add(0, A[i]);
            }
        }

        return result.stream().mapToInt(i -> i).toArray();
    }
}