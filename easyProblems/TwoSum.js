
let twoSum = function(nums,target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return[i + j];
            }
        }
    }
};


// time Complexity : O(N^2)
// space complexity : O(1) - constant


let nums = [2,7,11,15], target = 9



// Input: nums = [2,7,11,15], target = 9


// using hashMap

let twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        let complementPair = target - value;
        if(map[complementPair] !== undefined) {
            return [map[complementPair], i];
        } else {
            map[value] = i;
        }
    }
};

// time complexity : O(N)
