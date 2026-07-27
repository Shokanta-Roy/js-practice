/*
# Intuition

The longest common prefix must be shared by **all strings** in the array.

A simple way is to take the first string as the reference prefix and compare it with every other string.
If the prefix does not match, reduce it until it becomes a valid common prefix.

# Approach

1. Assume the first string is the initial prefix.
2. Compare this prefix with each string in the array.
3. While the current string does not start with the prefix:

   * Remove the last character from the prefix.
4. If the prefix becomes empty, return `""`.
5. Return the remaining prefix.

# Complexity

* Time complexity: $$O(n \times m)$$

  * `n` = number of strings
  * `m` = length of the shortest string

* Space complexity: $$O(1)$$

  * Only one extra variable is used.

*/



var longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, prefix.length - 1);

            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
};
