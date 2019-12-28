// MY SOLUTION minutes: 86/51, score: 207/450

/**
 * Definition for singly-linked list with a random pointer.
 * class RandomListNode {
 *     int label;
 *     RandomListNode next, random;
 *     RandomListNode(int x) { this.label = x; }
 * };
 */
public class Solution {
    public RandomListNode copyRandomList(RandomListNode head) {
        RandomListNode dummyHead = new RandomListNode(1);
        dummyHead.next = head;
        RandomListNode newHead = new RandomListNode(head.label);
        RandomListNode newDummyHead = new RandomListNode(1);
        newDummyHead.next = newHead;

        Map<RandomListNode, RandomListNode> map = new HashMap<>();

        // copy labels to newHead, create map (head -> newHead)
        while (head.next != null) {
            newHead.label = head.label;
            newHead.next = new RandomListNode(head.next.label);

            map.put(head, newHead);

            head = head.next;
            newHead = newHead.next;
        }

        // put last element in map (head -> newHead)
        map.put(head, newHead);

        // set pointers to beginning
        head = dummyHead.next;
        newHead = newDummyHead.next;

        // iterate through all nodes and set random for newHead
        while (head.next != null) {
            newHead.random = map.get(head.random);

            head = head.next;
            newHead = newHead.next;
        }
        // add last random
        newHead.random = map.get(head.random);

        // return beginning of newHead
        return newDummyHead.next;
    }
}
