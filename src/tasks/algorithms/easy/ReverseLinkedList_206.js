// my solution beats 100%

var reverseList = function(head) {
    let next = head;
    let result = null;

    while (next !== null) {
        const tmp = result;
        result = new ListNode(next.val);
        result.next = tmp;
        head = head.next;
        next = head;
    }

    return result;
};