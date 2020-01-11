// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //param B : integer
  //return an integer
  hasPathSum : function(A, sum){
    var level = [A];
    var sums = [];

    while (level.length > 0) {
      var temp = [];

      for (var i = 0; i < level.length; i++) {

        if (level[i].right === null && level[i].left === null) {
          sums[level[i].data] = 1;
        }

        if (level[i].left !== null) {
          level[i].left.data += level[i].data;
          temp.push(level[i].left)
        }

        if (level[i].right !== null) {
          level[i].right.data += level[i].data;
          temp.push(level[i].right)
        }
      }

      level = temp;
    }

    return sums.hasOwnProperty(sum) ? 1 : 0;
  }
};
