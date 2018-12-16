package tasks.algorithms.easy;

class DeleteColumnsToMakeSorted_944 {
    public static void main(String[] args) {
        System.out.println(minDeletionSize(new String[]{"cba","daf","ghi"}));
    }

    public static int minDeletionSize(String[] A) {
        int count = 0;

        for (int i = 0; i < A[0].length(); i++) {
            for (int j = 1; j < A.length; j++) {

                if (A[j].charAt(i) < A[j - 1].charAt(i)) {
                    count++;
                    j = A.length;
                }

            }
        }

        return count;
    }

}