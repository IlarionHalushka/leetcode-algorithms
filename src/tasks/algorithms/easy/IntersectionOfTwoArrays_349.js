// my solution 64ms beats 60%
var intersection = function(nums1, nums2) {
    const set = new Set(nums1);
    return nums2.filter(num => set.delete(num));
}