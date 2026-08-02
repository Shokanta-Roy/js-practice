/*
# Intuition

We need to recreate how `Array.reduce()` works internally.

A reducer function keeps an **accumulator** value that changes after processing each element.

Example:


init = 0

acc = fn(0, 1)  → 1
acc = fn(1, 2)  → 3
acc = fn(3, 3)  → 6
acc = fn(6, 4)  → 10


The final accumulator value is the answer.

# Approach

1. Store `init` as the starting accumulator value.
2. Loop through every element in `nums`.
3. For each element:

   * Update accumulator by calling `fn(accumulator, nums[i])`.
4. Return the final accumulator.
5. If the array is empty, the loop will not execute, so `init` is returned.

# Complexity

* Time complexity: $$O(n)$$
  (We process each element once)

* Space complexity: $$O(1)$$
  (Only the accumulator variable is used)
*/

var reduce = function(nums, fn, init) {
    let accumulator = init;

    for (let i = 0; i < nums.length; i++) {
        accumulator = fn(accumulator, nums[i]);
    }

    return accumulator;
};

