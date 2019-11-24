package tasks.algorithms.easy;

class ListNode {
      int val;
      ListNode next;
      ListNode(int x) { val = x; }
}

class MiddleOfTheLinkedList_876 {
    public static void main(String[] args) {
    }

    public static ListNode middleNode(ListNode head) {
        ListNode[] arr = new ListNode[100];
        int i = 0;

        while (head.next != null) {
            arr[i++] = head;
            head = head.next;
        }

        return arr[i / 2];
    }

}