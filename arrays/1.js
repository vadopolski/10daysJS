function getSecondLargest(nums) {
    let tmp = 0;
    let isBreak;
    do {
        isBreak = false;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                tmp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = tmp;
                isBreak = true;
            }
        }
    } while (isBreak);

    for (let i = nums.length - 1;  i > 0; i--){
        if (nums[i] != nums[i -1])
            return nums[i -1];
    }

    return 0;
}

console.log(getSecondLargest([2,3,6,6,5,6,1,6,11,8,11,11,11,8,9,1,4,4,0]));