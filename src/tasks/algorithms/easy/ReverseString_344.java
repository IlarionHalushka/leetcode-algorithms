package tasks.algorithms.easy;

import java.io.IOException;

class ReverseString_344 {
    public static void main(String[] args) throws IOException {
        System.out.println(reverseString("asdfadsfsadff134212"));
    }

    public static String reverseString(String s) {
        char[] C = s.toCharArray();

        for (int i = 0; i < C.length / 2; i++) {
            char tmp = C[i];
            C[i] = C[C.length - 1 - i];
            C[C.length - 1 - i] = tmp;
        }
        return new String(C);
    }
}