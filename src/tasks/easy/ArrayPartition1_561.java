package tasks.easy;

import java.io.IOException;
import java.util.Arrays;

class ArrayPartition1_561 {
    // https://leetcode.com/problems/array-partition-i/

    // Given an array of 2n integers, your task is to group these integers
    // into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn)
    // which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

    public static void main(String[] args) throws IOException {
        int[] array = new int[]{1,4,3,2,7,9,6,5};

        ArrayPartition1_561.arrayPairSum(array);
    }

    public static int arrayPairSum(int[] nums) throws IOException {
        Arrays.sort(nums);

        int sum = 0;

        for (int i = 0; i < nums.length; i += 2) {
            sum += nums[i];
        }

        return sum;
    }
}