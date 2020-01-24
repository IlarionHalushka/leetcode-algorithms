module.exports = {
  //param A : array of strings
  //return a array of strings
  prefix : function(words){
    var root = {};

    // build Trie. For new node set visited ("val") to 1
    // When visiting same node increment it's "val"
    for (var i = 0; i < words.length; i++) {
      var curr = root;
      var prefix = '';

      for (var j = 0; j < words[i].length; j++) {
        prefix += words[i][j];

        if (curr[prefix]) {
          curr[prefix].val++;
        } else {
          curr[prefix] = {
            val: 1,
            prefix: prefix
          }
        }
        curr = curr[prefix];
      }
    }

    var res = [];
    var q = [root];

    // find in Trie nodes which have been visited 1 time
    // and don't push children of this node to queue, because we need only a prefix, not the whole word
    while (q.length) {
      var curr = q.shift();

      if (curr.val === 1) {
        res.push(curr.prefix);
        continue;
      }

      var children = Object.keys(curr);
      for (var i = 0; i < children.length; i++) {
        if (children[i] === 'val' || children[i] === 'prefix') {
          continue;
        }
        q.push(curr[children[i]]);
      }
    }

    return res;
  }
};
