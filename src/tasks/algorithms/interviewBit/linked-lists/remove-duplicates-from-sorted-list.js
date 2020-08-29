// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  deleteDuplicates : function(A) {
    var B = A;

    while (A.next) {
      if (A.data === A.next.data) {
        A.next = A.next.next;
      } else {
        A = A.next;
      }
    }

    return B;
  }
};
