/*
# Intuition

We need to recreate how `Array.map()` works internally.

For each element in the array:

* Apply the function `fn` to it.
* Store the result in a new array at the same index.

# Approach

1. Create an empty result array.
2. Loop through the input array.
3. For each index `i`:

   * Call `fn(arr[i], i)`
   * Store the result in the new array.
4. Return the new array.

# Complexity

* Time complexity: $$O(n)$$
  (We iterate through the array once)

* Space complexity: $$O(n)$$
  (We create a new array of the same size)

# Code

*/


var map = function(arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);
    }

    return result;
};
