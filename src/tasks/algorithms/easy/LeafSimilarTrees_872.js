// my solution beats 92%

var leafSimilar = function(root1, root2) {
    let stack = [root1];
    const arrayLeaf = [];

    while (stack.length > 0) {
        const node = stack.pop();
        if (node.left === null && node.right === null) arrayLeaf.push(node.val);

        if (node.left !== null) stack.push(node.left);
        if (node.right !== null) stack.push(node.right);
    }

     stack = [root2];
     while (stack.length > 0) {
        const node = stack.pop();
        if (node.left === null && node.right === null && arrayLeaf.pop() !== node.val) {
             return false;
        }

        if (node.right !== null) stack.push(node.right);
        if (node.left !== null) stack.push(node.left);
    }

    return arrayLeaf.length === 0;
};