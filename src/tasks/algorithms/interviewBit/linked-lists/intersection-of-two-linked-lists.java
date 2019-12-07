/**
 * Definition for singly-linked list.
 * class ListNode {
 *     public int val;
 *     public ListNode next;
 *     ListNode(int x) { val = x; next = null; }
 * }
 */
public class Solution {
  public ListNode getIntersectionNode(ListNode a, ListNode b) {
  // get length of a, b
  int aL = 0;
  int bL = 0;
  ListNode aTemp = new ListNode(0);
  ListNode bTemp = new ListNode(0);
  aTemp.next = a;
  bTemp.next = b;

  while (aTemp.next != null) {
  aL++;
  aTemp = aTemp.next;
}
while (bTemp.next != null) {
  bL++;
  bTemp = bTemp.next;
}

// make a and b same length
if (aL > bL) {
  for (int i = 0; i < aL- bL; i++) {
    a = a.next;
  }
} else if (bL > aL) {
  for (int i = 0; i < bL - aL; i++) {
    b = b.next;
  }
}

// iterate lists and compare nodes
for (int i = 0; i < Math.min(aL, bL); i++) {
  if (a == b) return a;
  a = a.next;
  b = b.next;
}

return null;
}
}
