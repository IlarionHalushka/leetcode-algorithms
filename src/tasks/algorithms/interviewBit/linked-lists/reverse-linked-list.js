// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  reverseList : function(A) {
    var prev = null;
    var current = A;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }
};
