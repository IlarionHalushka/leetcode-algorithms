var insertIntoBST = function(root, val) {
    if (root == null) return new TreeNode(val);

    if (val < root.val) {
       root.left = insertIntoBST(root.left, val);
    } else {
       root.right = insertIntoBST(root.right, val);
    }

    return root;
};


var insertIntoBSTIterative = function(root, val) {
    let next = root;

    while(next) {
        if(val < next.val) {
            if(next.left) {
                next = next.left;
            } else {
                next.left = new TreeNode(val);

                break;
            }
        } else {
            if(next.right) {
                next = next.right;
            } else {
                next.right = new TreeNode(val);

                break;
            }
        }
    }

    return root;
};