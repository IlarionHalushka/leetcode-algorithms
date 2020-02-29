// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  // All 3 solutions got TLE... Mine is first one
  isSymmetric: function(A) {
    function helper(C, D) {
      if (C === D) return 1;
      if (C === null || D === null) return 0;
      if (C.data !== D.data) return 0;

      if (!helper(C.left, D.right)) return 0;
      if (!helper(C.right, D.left)) return 0;

      return 1;
    }
    return helper(A.left, A.right);
  },
  isSymmetric: function (root) {
    if (!root) return 1;
    var leftArr = [root.left];
    var rightArr = [root.right];

    while(leftArr.length && rightArr.length) {
      var l = leftArr.pop(), r = rightArr.pop();
      if (!l && !r) continue;
      if (!l || !r) return 0;
      if (l.val !== r.val) return 0;
      leftArr.push(l && l.left);
      leftArr.push(l && l.right);
      rightArr.push(r && r.right);
      rightArr.push(r && r.left);
    }
    return 1;
  },
  isSymmetric: function (root) {
    function traverseTree(leftTree, rightTree) {
      if (leftTree === null || rightTree == null) {
        if (leftTree === rightTree) return 1;
        return 0;
      }
      if (leftTree.val === rightTree.val) {
        return (
          traverseTree(leftTree.left, rightTree.right) *
          traverseTree(leftTree.right, rightTree.left)
        );
      }
      return 0;
    }
    if (!root) return 1;
    return traverseTree(root.left, root.right);
  }
};
