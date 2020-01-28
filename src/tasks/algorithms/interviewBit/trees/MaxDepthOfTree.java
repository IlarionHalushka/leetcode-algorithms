/**
 * Definition for binary tree
 * class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) {
 *      val = x;
 *      left=null;
 *      right=null;
 *     }
 * }
 */
public class Solution {
  // MY SOLUTION, but there is a better solution down
    public int maxDepth(TreeNode r) {
        if (r == null) {
            return 0;
        }
        int depth = 0;

        Queue<TreeNode> q = new ArrayDeque<TreeNode>();
        if (r != null){
            q.add(r);
        }

        while (q.size() > 0) {
            Queue<TreeNode> temp = new ArrayDeque<TreeNode>();

            while (q.size() > 0) {
                TreeNode curr = q.remove();
                if (curr.left != null) temp.add(curr.left);
                if (curr.right != null) temp.add(curr.right);
            }

            q = temp;
            depth++;
        }

        return depth;
    }

    // NOT MY SOLUTION
    // def maxDepth(self, root):
    //       if root is None:
    //           return 0
    //
    //       return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))

}
