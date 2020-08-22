public class Solution {
  public ListNode detectCycle(ListNode a) {
  ListNode slow = a;
  ListNode fast = a;
  boolean found = false;

  while (fast != null && fast.next != null) {
  slow = slow.next;
  fast = fast.next.next;

  // if loop found set slow to head and iterate next one by one for slow and fast
  if (slow == fast) {
  slow = a;
  while (slow != fast) {
  slow = slow.next;
  fast = fast.next;
}
return slow;
};
}

return null;
}
}
