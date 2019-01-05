// my solution beats 75%

var findTarget = function(root, k) {
    const stack = [root];
    const set = new Set();

    while (stack.length !== 0) {
        node = stack.pop();

        if (set.has(node.val)) {
            return true;
        } else {
            set.add(k - node.val);
        }

        if (node.left !== null) stack.push(node.left);
        if (node.right !== null) stack.push(node.right);
    }

    return false;
};