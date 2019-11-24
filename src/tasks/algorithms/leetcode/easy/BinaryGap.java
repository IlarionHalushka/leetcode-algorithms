package tasks.algorithms.easy;

import java.io.IOException;

class BinaryGap {
    public static void main(String[] args) throws IOException {
        int N = 12;
        String binaryStr = Integer.toBinaryString(N);
        System.out.println(binaryStr);
        int maxDist = 0;
        int dist = 0;

        for (int i = 0; i < binaryStr.length() - 1; i++) {
            if (binaryStr.charAt(i) == '1') {
                while ((i + dist) < binaryStr.length() - 1 && binaryStr.charAt(i + dist) != '1') {
                    dist++;
                }

                if (binaryStr.charAt(i + dist) != '1') {
                    dist = 0;
                }
                maxDist = Math.max(maxDist, dist);
            }
        }

        System.out.println(maxDist);
    }

}