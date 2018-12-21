package tasks.algorithms.easy;

import java.util.*;

class FindAndReplacePattern_890 {
    public static void main(String[] args) {
        String[] words = new String[]{"ddd","deq","mee","aqq","dkd","hjg"};
        String pattern = "abc";

        System.out.println(findAndReplacePattern(words, pattern).toString());
    }

    public static List<String> findAndReplacePattern(String[] words, String pattern) {
        Map<Character, Character> alphabet = new HashMap<>();
        ArrayList<String> ans = new ArrayList<>();

        for (int i = 0; i < words.length; i++) {
            for (int j = 0; j < pattern.length(); j++) {
                if (!alphabet.containsValue(words[i].charAt(j)) && !alphabet.containsKey(pattern.charAt(j))) {
                    alphabet.put(pattern.charAt(j), words[i].charAt(j));
                    continue;
                }

                if (alphabet.containsKey(pattern.charAt(j))
                        && alphabet.get(pattern.charAt(j)) != words[i].charAt(j)) {
                    j = pattern.length();
                } else if (alphabet.containsKey(pattern.charAt(j))
                        && alphabet.get(pattern.charAt(j)) == words[i].charAt(j)
                        && j == pattern.length() - 1) {
                    ans.add(words[i]);
                }
            }
            alphabet.clear();
        }

        return ans;
    }
}