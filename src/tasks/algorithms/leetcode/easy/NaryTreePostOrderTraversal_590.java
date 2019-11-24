package tasks.algorithms.easy;

import java.util.ArrayList;
import java.util.List;

// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
}

// Recursive solution
public class NaryTreePostOrderTraversal_590 {
    List<Integer> res = new ArrayList<>();

    public List<Integer> postorder(Node root) {
        if (root == null) return res;

        for (Node child : root.children) {
            postorder(child);
        }
        res.add(0, root.val);
        return res;
    }
}
