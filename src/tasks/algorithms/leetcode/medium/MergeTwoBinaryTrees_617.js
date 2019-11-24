// my solution
var mergeTrees = function(t1, t2) {
    if ((t1 == null || t1.val == null) && (t2 == null || t2.val == null)) return null;
    const root = new TreeNode((t1 ? t1.val : null) + (t2 ? t2.val : null));

    root.left = mergeTrees((t1 ? t1.left : null), (t2 ? t2.left : null));
    root.right = mergeTrees((t1 ? t1.right : null), (t2 ? t2.right : null));

    return root;
};



