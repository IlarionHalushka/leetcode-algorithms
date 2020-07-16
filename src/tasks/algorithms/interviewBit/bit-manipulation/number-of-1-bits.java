public class Solution {
  public int numSetBits(long a) {
     int count = 0;

     for (int i = 0; i < 32; i++) {
        if (((long) Math.pow(2, i) & a) == Math.pow(2, i)) {
            count++;
        }
    }

    return count;
   }
}
