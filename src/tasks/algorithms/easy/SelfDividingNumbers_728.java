package tasks.algorithms.easy;

import java.util.ArrayList;
import java.util.List;

public class SelfDividingNumbers_728 {
    public List<Integer> selfDividingNumbers(int left, int right) {
        List<Integer> selfDividingNumbers = new ArrayList<Integer>();

        for (int i = left; i <= right; i++) {
            boolean next;
            int tmp = i;

            do {
                int digit = tmp % 10;
                if (digit == 0) {
                    next = false;
                    break;
                }
                if (i % digit != 0) {
                    next = false;
                    break;
                }

                tmp = (int) Math.floor(tmp / 10);
                next = true;
            } while (tmp > 0);

            if (next) selfDividingNumbers.add(i);

        }
        return selfDividingNumbers;
    }
}
