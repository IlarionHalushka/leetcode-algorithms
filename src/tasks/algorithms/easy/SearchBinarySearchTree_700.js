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

