// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return the head node in the linked list
  removeNthFromEnd : function(A, B){
    var first = A;
    var second = A;

    for (var i = 0; i < B; i++) {
      if (!second.next) {
        A = A.next;
        return A;
      }
      second = second.next;
    }

    while (second.next) {
      first = first.next;
      second = second.next;
    }

    first.next = first.next.next;
    return A;
  }
};
