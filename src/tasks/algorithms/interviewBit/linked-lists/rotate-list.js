module.exports = {
  rotateRight : function(A, k) {
    var tail = A;
    var length = 1;

    while (tail.next) {
      length++;
      tail = tail.next;
    }

    k = k % length; // for k > length
    if (k === 0) return A; // no rotation required if k = 0

    var nodeBeforeRotation = A;

    // for 1 -> 2 -> 3 -> 4 -> 5, k = 2  ===>>> nodeBeforeRotation = 3 -> 4 -> 5
    for (var i = 1; i <= length - k - 1; i++) {
      nodeBeforeRotation = nodeBeforeRotation.next;
    }
    // for 1 -> 2 -> 3 -> 4 -> 5, k = 2  ===>>> nodeRotation = 4 -> 5
    var nodeRotation = nodeBeforeRotation.next;

    // for nodeBeforeRotation = 3 -> 4 -> 5 ===>>> nodeBeforeRotation = 3 -> null (last node)
    nodeBeforeRotation.next = null;
    // for tail element from initial A set next to head
    tail.next = A;

    return nodeRotation;
  }
};
