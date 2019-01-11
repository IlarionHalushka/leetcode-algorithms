package tasks.algorithms.easy;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class UniqueMorseCodeWords_804 {
    public int uniqueMorseRepresentations(String[] words) {
        String encoded = "";
        Set<String> uniqueCodes = new HashSet<String>();

        Map<Character, String> letters = new HashMap<Character, String>(){{
            put('a', ".-");
            put('b', "-...");
            put('c', "-.-.");
            put('d', "-..");
            put('e', ".");
            put('f', "..-.");
            put('g', "--.");
            put('h', "....");
            put('i', "..");
            put('j', ".---");
            put('k', "-.-");
            put('l', ".-..");
            put('m', "--");
            put('n', "-.");
            put('o', "---");
            put('p', ".--.");
            put('q', "--.-");
            put('r', ".-.");
            put('s', "...");
            put('t', "-");
            put('u', "..-");
            put('v', "...-");
            put('w', ".--");
            put('x', "-..-");
            put('y', "-.--");
            put('z', "--..");
        }};


        for (int i = 0; i < words.length; i++) {
            for (int j = 0; j < words[i].length(); j++) {
                for (Map.Entry<Character, String> entry : letters.entrySet()) {

                    if (entry.getKey() == words[i].charAt(j)) {
                        encoded += entry.getValue();
                    }
                }
            }

            uniqueCodes.add(encoded);
            encoded = "";
        }

        return uniqueCodes.size();
    }
}
