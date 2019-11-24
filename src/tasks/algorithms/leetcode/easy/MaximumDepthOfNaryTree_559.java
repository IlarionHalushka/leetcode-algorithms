// solved 5 ms runtime 25% beats, then reviewed and solved 4 ms runtime 50% beats

package tasks.algorithms.easy;

/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/


public class MaximumDepthOfNaryTree_559 {
    int max = 0;

    public int maxDepth(Node root) {
        helper(root, 0);
        return max;
    }

    public int helper(Node node, int depth) {
        if (node == null) return depth;

        max = max > ++depth ? max : depth;

        for (Node n : node.children) {
            helper(n, depth);
        }

        return depth + 1;
    }
}
