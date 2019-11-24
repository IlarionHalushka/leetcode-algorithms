package tasks.algorithms.easy;

public class SortArrayByParityII_922 {
    public int[] sortArrayByParityII(int[] A) {
        // if at its place continue
        // if not at the right place:
        // look for next odd/even number and swap them

        for (int i = 0; i < A.length; i++) {

            if (i % 2 == 0) {
                int j = i;
                while (j < A.length && A[j] % 2 != 0) {
                    j++;
                }

                int tmp = A[i];
                A[i] = A[j];
                A[j] = tmp;
            }


            if (i % 2 != 0) {
                int j = i;
                while (j < A.length && A[j] % 2 == 0) {
                    j++;
                }

                int tmp = A[i];
                A[i] = A[j];
                A[j] = tmp;
            }
        }

        return A;
    }
}
