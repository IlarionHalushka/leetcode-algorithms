package tasks.algorithms.easy;

import java.util.Arrays;

class NextGreaterElement_496 {
    public static void main(String[] args) {
        int[] nums1 = new int[]{4,1,2};
        int[] nums2 = new int[]{1,3,4,2};
        System.out.println(Arrays.toString(nextGreaterElement(nums1, nums2)));
    }

    public static int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int[] ans = new int[nums1.length];

        for (int i = 0; i < nums1.length; i++) {
            for (int j = indexOf(nums1[i], nums2); j < nums2.length; j++) {
                if (nums1[i] < nums2[j]) {
                    ans[i] = nums2[j];
                    break;
                }
                if (j == nums2.length - 1) {
                    ans[i] = -1;
                }
            }
        }

        return ans;
    }

    public static int indexOf(int el, int[] array) {
        int index = -1;

        for(int i = 0; i < array.length; i++) {
            if(array[i] == el) {
                index = i;
                break;
            }
        }
        return index;
    }
}