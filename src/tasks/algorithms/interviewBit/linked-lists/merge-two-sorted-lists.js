module.exports = {
  mergeTwoLists : function(A, B){
    var C = new Node(0);
    var headC = C;

    while (A && B) {
      if (A.data > B.data) {
        C.next = B;
        B = B.next;
      } else {
        C.next = A;
        A = A.next;
      }
      C = C.next;
    }

    if (A) C.next = A;
    if (B) C.next = B;

    return headC.next;
  }
};
