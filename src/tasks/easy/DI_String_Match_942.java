package tasks.easy;

import java.util.Arrays;

class DI_String_Match_942 {
    public static void main(String[] args) {
        String s = "IDID";

        System.out.println(Arrays.toString(DI_String_Match_942.diStringMatch(s)));
    }

    private static int[] diStringMatch(String S) {
        int N = S.length();
        int[] result = new int[N + 1];
        int lowest = 0;
        int highest = N;

        for (int i = 0; i < N; i++) {
            if (S.charAt(i) == 'I') {
                result[i] = lowest++;
            } else {
                result[i] = highest--;
            }
        }

        result[N] = lowest;

        return result;
    }
}