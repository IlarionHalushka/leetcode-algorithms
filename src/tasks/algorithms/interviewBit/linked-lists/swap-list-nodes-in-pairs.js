// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  swapPairs : function(A){
    if (!A || !A.next) return A;

    var dummy = new Node(0);
    dummy.next = A.next;
    var prev = null;

    while (A && A.next) {
      next = A.next;
      if (A.next.next) A.next = A.next.next;
      else A.next = null;

      next.next = A;
      if (prev) prev.next = next;
      prev = A;

      A = A.next;
    }

    return dummy.next;
  }
};
