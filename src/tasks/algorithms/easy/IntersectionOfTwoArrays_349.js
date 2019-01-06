// my solution 64ms beats 60%
var intersection = function(nums1, nums2) {
    const set = new Set(nums1);
    return nums2.filter(num => set.delete(num));
}

// not my solution 56 ms beats 97%
var intersection = function(nums1, nums2) {
    const set = new Set(nums1);
    return [...new Set(nums2.filter(num => set.has(num) ))];
};