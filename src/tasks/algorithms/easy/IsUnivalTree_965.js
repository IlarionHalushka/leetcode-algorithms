var isUnivalTree = function(root) {
    const stack = [root];
    const value = root.val;

    while (stack.length > 0) {
        const node = stack.pop();

        if (node.val !== value) return false;

        if (node.left !== null) stack.push(node.left);
        if (node.right !== null) stack.push(node.right);
    }

    return true;
};