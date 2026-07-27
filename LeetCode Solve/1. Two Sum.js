/*
In this problem, I can do one thing,take two loop, i er value thik rekhe j er maddhome baki element gula traverse kora.
i=0, j=i+1;
if it match target then i wikk print those index numbers
*/

function twoSum(nums, target) {
    for (let i=0; i<nums.length -1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i]+nums[j] == target) {
                return [i,j];
            }
        }
    }
    return [];
}