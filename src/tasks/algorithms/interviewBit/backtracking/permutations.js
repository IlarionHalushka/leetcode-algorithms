module.exports = {
  backtrack: function(list, temp, nums) {
    if (temp.length === nums.length) {
      list.push(temp.slice());
    } else {
      for (var i = 0; i < nums.length; i++) {
        if (temp.indexOf(nums[i]) > -1) continue;
        temp.push(nums[i]);
        this.backtrack(list, temp, nums);
        temp.pop();
      }
    }
  },
  permute : function(nums) {
    var list = [];
    this.backtrack(list, [], nums);
    return list;
  }
};
