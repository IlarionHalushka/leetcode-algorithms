function inorderTraversal(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }

    // if(p != null) {
    //             stack.push(p);
    //             result.addFirst(p.val);  // Reverse the process of preorder
    //             p = p.right;             // Reverse the process of preorder
    //         } else {
    //             TreeNode node = stack.pop();
    //             p = node.left;           // Reverse the process of preorder
    //         }

    // TreeNode curr = stack.pop();
    //             list.add(0,curr.val);
    //             if(curr.left!=null) {
    //               stack.push(curr.left);
    //             }
    //             if(curr.right!=null) {
    //                stack.push(curr.right);
    //             }
  }

  return res;
}
