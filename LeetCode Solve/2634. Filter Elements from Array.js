/*
# Intuition

We need to recreate how `Array.filter()` works.

For each element:

* Apply the function `fn`.
* If it returns a **truthy value**, include the element in the result.
* Otherwise, skip it.

# Approach

1. Create an empty result array.
2. Loop through the input array.
3. For each index `i`:

   * Call `fn(arr[i], i)`
   * If it is truthy, push `arr[i]` into the result array.
4. Return the result array.

# Complexity

* Time complexity: $$O(n)$$
  (We iterate through the array once)

* Space complexity: $$O(n)$$
  (In the worst case, all elements are included)

*/


var filter = function(arr, fn) {
    const result = [];

    for(let i=0; i<arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
}