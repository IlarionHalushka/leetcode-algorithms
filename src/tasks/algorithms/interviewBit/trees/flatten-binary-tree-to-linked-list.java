public class Solution {
      public TreeNode flatten(TreeNode root) {
          if (root == null) return root;

          Stack<TreeNode> stk = new Stack<TreeNode>();
          stk.push(root);

          while (!stk.isEmpty()){
              TreeNode curr = stk.pop();
              if (curr.right!=null) stk.push(curr.right);
              if (curr.left!=null) stk.push(curr.left);
              if (!stk.isEmpty()) curr.right = stk.peek();
              curr.left = null;
          }
          return root;
    }
}
