let nums = [1, 3, 5, 6, 77, 146]
let target = 77

var searchInsert = function(nums, target) {
    if (nums.includes(target) === true) {
        return nums.indexOf(target)
    } else {
        // find where target is going to go
        return nums.filter(num => num < target).length
    }
};

searchInsert(nums, target)