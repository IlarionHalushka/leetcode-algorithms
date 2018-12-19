package tasks.algorithms.easy;

class RotateString_796 {
    public static void main(String[] args) {
        System.out.println(rotateString("asd", "sdd"));
    }

    // task solves the problem only when there are unique chars in strings A and B
    public static boolean rotateString(String A, String B) {
        if (A.length() != B.length()) {
            return false;
        }

        int index = B.indexOf(A.charAt(0));

        for (int i = 1; i < A.length(); i++) {
            int shift = i + index;

            if (shift >= A.length()) {
                shift = i + index - A.length();
            }

            if (A.charAt(i) != B.charAt(shift)) {
                return false;
            }
        }

        return true;
    }
}