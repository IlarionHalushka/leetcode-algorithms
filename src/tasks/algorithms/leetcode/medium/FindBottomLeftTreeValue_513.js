var findBottomLeftValue = function(root) {
    const res = [];
    const queue = [root];

    while (queue.length) {
        const node = queue.shift();

        if (node.right != null) queue.push(node.right);
        if (node.left != null) queue.push(node.left);

       if (node.left == null && node.right == null) res.push(node.val);
    }

    return res[res.length - 1];
};