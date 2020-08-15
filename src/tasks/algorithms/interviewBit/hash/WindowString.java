// NOT MY SOLUTION, but very neat
// java: https://leetcode.com/problems/minimum-window-substring/discuss/310344/Java-Faster-than-96.95
// js: https://leetcode.com/problems/minimum-window-substring/discuss/411388/JavaScript-Solution-w-Detailed-Comments
// youtube explanation: https://www.youtube.com/watch?v=eS6PZLjoaq8

public class Solution {
    public String minWindow(String s, String t) {
         int[] map = new int[128];
        for (char c : t.toCharArray()) {
            map[c] += 1;
        }
        int begin = 0;
        int len = Integer.MAX_VALUE;
        int count = t.length();
        for (int left=0, right=0; right<s.length(); right++) {
            char c = s.charAt(right);
            map[c]--;
            if(map[c]>=0) count--;
            while (count == 0) {
                char lc = s.charAt(left);
                map[lc]++;
                if (map[lc]>0) {
                    if (right-left+1<len) {
                        begin = left;
                        len = right-left+1;
                    }
                    count++;
                }
                left++;
            }
        }
        return len==Integer.MAX_VALUE?"":s.substring(begin, begin+len);
    }
}
