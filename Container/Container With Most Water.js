var maxArea = function(height) {
    let n = height.length
    let left = 0
    let right = n - 1
    let res = 0
    while (left < right) {
        res = Math.max(res, height[left] < height[right]
                      ? (right - left) * height[left++]
                      : (right - left) * height[right--]
                      
        )
    }
    return res
};