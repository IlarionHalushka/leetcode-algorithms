// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  partition : function(A, B){
    var low = new Node();
    var high = new Node();
    var lowHead = low;
    var highHead = high;

    while (A) {
      if (A.data < B) {
        low = low.next = A;
      } else {
        high = high.next = A;
      }
      A = A.next;
    }

    low.next = highHead.next;
    high.next = null;
    return lowHead.next;
  }
};
