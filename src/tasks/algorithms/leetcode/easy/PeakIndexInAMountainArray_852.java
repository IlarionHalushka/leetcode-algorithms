class Solution {
    public int peakIndexInMountainArray(int[] A) {
        int k = 0;
        for (int i = 1; i < A.length - 1; i++) {
            if (A[i] > A[i+1]) {
                return i;
            }
        }
        return k;
    }
}