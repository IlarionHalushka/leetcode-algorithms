// Using Object
var twoSum = function(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map.hasOwnProperty(target - nums[i])) {
      return [map[target - nums[i]], i]
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
};

// Using Map
var twoSum = function(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
