package tasks.algorithms.medium;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

class RevealCardsInIncreasingOrder_950 {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(deckRevealedIncreasing(new int[]{17,13,11,2,3,5,7})));
    }

    private static int[] deckRevealedIncreasing(int[] deck) {
//            добавился новый (с конца) - последний элемент вторым становится
//              sort
// //        [2,3,5,7,11,13,17]
//             17
//               13,17
//                 11,17,13,
//                     7,13,11,17
//                      5,17,7,13,11,
//                         3,11,5,17,7,13,
//                             2,13,3,11,5,17,7,
        ArrayList<Integer> ans = new ArrayList<>();
        Arrays.sort(deck);

        ans.add(deck[deck.length - 1]);

        for(int i = deck.length - 2; i >= 0; i--) {
            ans.add(0, ans.get(ans.size() - 1));
            ans.remove(ans.size() - 1);
            ans.add(0, deck[i]);
        }

        return ans.stream().mapToInt(i -> i).toArray();
    }

}