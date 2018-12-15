package tasks.easy;

import java.util.Arrays;

class DI_String_Match_942 {
    public static void main(String[] args) {
        String s = "IDID";

        System.out.println(Arrays.toString(DI_String_Match_942.diStringMatch(s)));
    }

    private static int[] diStringMatch(String S) {
        int[] result = new int[S.length() + 1];
        int lowest = 0;
        int highest = S.length();

        for (int i = 0; i < S.length(); i++) {
            if (S.charAt(i) == 'I') {
                result[i] = lowest;
                lowest++;
            }

            if (S.charAt(i) == 'D') {
                result[i] = highest;
                highest--;
            }
        }

        result[S.length()] = lowest;

        return result;
    }
}