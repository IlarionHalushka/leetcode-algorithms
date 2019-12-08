// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return an integer
  reverse : function(A){
    var prev = null;
    var curr = A;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  },
  lPalin : function(A){
    var slow = A;
    var fast = A;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    slow.next = this.reverse(slow.next);
    slow = slow.next;

    while (slow) {
      if (slow.data !== A.data) return 0;
      slow = slow.next;
      A = A.next;
    }
    return 1;
  }
};
