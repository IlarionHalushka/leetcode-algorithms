// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : head node of linked list
  //return the head node in the linked list
  addTwoNumbers : function(A, B){
    var C = new Node(0); // return C.next to avoid first element
    var head = C;
    var carry = 0;
    var val;

    while (A || B) {
      if (A && B) val = A.data + B.data;
      if (A && !B) val = A.data;
      if (!A && B) val = B.data;

      if (val + carry > 9) {
        C.next = new Node(val + carry - 10);
        carry = 1;
      } else if (val + carry <= 9) {
        C.next = new Node(val + carry);
        carry = 0;
      }
      if (A) A = A.next;
      if (B) B = B.next;
      C = C.next;
    }

    if (carry) C.next = new Node(carry);

    return head.next;
  }
};
