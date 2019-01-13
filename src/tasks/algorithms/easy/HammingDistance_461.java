package tasks.algorithms.easy;

public class HammingDistance_461 {
    public int hammingDistance(int x, int y) {
        String xBinaries = Integer.toBinaryString(x);
        String yBinaries = Integer.toBinaryString(y);

        int maxLength = x > y ? xBinaries.length() : yBinaries.length();
        int minLength = x < y ? xBinaries.length() : yBinaries.length();

        // set count as maxLength - minLength because the binary numbers differ depending on length
        int lengthDifference = maxLength - minLength;

        // make xBinaries same size as y
        if (x > y) {
            for (int i = 0; i < lengthDifference; i++) {
                yBinaries = "0" + yBinaries;
            }
        }
        else {
            for (int i = 0; i < lengthDifference; i++) {
                xBinaries = "0" + xBinaries;
            }
        }


        int count = 0;

        for (int i = maxLength - 1; i >= 0; i--) {
            if (xBinaries.charAt(i) != yBinaries.charAt(i)) {
                count++;
            }
        }

        return count;
    }
}
