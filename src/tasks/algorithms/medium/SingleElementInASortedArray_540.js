var singleNonDuplicate = function(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
       let m = Math.trunc((end + start) / 2);
       if (m % 2 === 1) m--;

        if (nums[m] !== nums[m+1]) {
            end = m;
        } else {
            start = m + 2;
        }
    }

    return nums[start];
};