// recursion
var searchBST = function(root, val) {
    if (root == null) return null;

    if (root.val === val) {
        return root;
    }

    root.right = searchBST(root.right, val);
    if (root.right && root.right.val == val) return root.right;

    root.left = searchBST(root.left, val);
    if (root.left && root.left.val == val) return root.left;

    return null;
};


// more concise recursion
var searchBST = function(root, val) {
        if(root == null) return root;
        if(root.val == val){
            return root;
        }
        else{
            return val<root.val? searchBST(root.left,val):searchBST(root.right,val);
        }
}

// iterative
var searchBST = function(root, val) {
    const stack = [100];
    stack[0] = root;

    while (1) {
        if (stack.length === 0) return null;

        const currentNode = stack.pop();
        if (currentNode.val === val) return currentNode;

        if (currentNode.left) {
            stack.push(currentNode.left);
        }
        if (currentNode.right) {
            stack.push(currentNode.right);
        }
    }
};

// iterative more concise
var searchBST = function(root, val) {
    while (root != null && root.val != val) {
        root = val > root.val ? root.right : root.left;
    }
    return root;
};