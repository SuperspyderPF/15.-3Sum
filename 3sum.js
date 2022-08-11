/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const threeSum = (nums) => {
    
    let result = [];
    nums.sort((a, b) => a - b)

    for (let i = 0; i <= nums.length - 3; i++) {
        if (nums[i] === nums[i - 1]) continue
        let l = i + 1
        let r = nums.length - 1

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]

            if (sum < 0) l++
            else if (sum > 0) r--
            else if (nums[i] !== nums[l] !== nums[r]) result.push([nums[i], nums[l], nums[r]]), l++, r--
        }
    }
    
    let uniqueArray = Array.from(new Set(result.map(JSON.stringify)), JSON.parse)
    return uniqueArray
};