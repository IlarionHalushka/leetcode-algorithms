package tasks.algorithms.easy;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

// Definition for a Node.
class Node {
    public int val;
    public List<NaryTreePreOrderTraversal_589> children;

    public Node() {
    }

    public Node(int _val, List<NaryTreePreOrderTraversal_589> _children) {
        val = _val;
        children = _children;
    }
}

public class NaryTreePreOrderTraversal_589 {
    // Iterative solution
    public List<Integer> preorder(Node root) {
        LinkedList<Node> stack = new LinkedList<>();
        LinkedList<Integer> res = new LinkedList<>();
        if (root == null) return res;
        stack.add(root);

        while (!stack.isEmpty()) {
            Node currentNode = stack.pollLast();
            res.add(currentNode.val);
            for (int i = currentNode.children.size() - 1; i >=0; i--) {
                stack.add(currentNode.children.get(i));
            }
        }

        return res;
    }

    // Recursive solution
    List<Integer> res = new ArrayList<Integer>();

    public List<Integer> preorderRecursive(Node root) {
        if (root == null) return res;

        for (int i = root.children.size() - 1; i >= 0; i--) {
            preorder(root.children.get(i));
        }
        res.add(0, root.val);
        return res;
    }
}


