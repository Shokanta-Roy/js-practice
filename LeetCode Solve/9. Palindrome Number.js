/*
# Intuition

A palindrome number reads the same from left to right and right to left.
The easiest way is to convert the integer into a string, 
reverse it, and compare it with the original value.

# Approach

1. Convert the number `x` into a string.
2. Reverse the string.
3. Compare the reversed string with the original string.
4. If both are equal, return `true`; otherwise return `false`.

# Complexity

* Time complexity: $$O(n)$$
  (`n` is the number of digits)

* Space complexity: $$O(n)$$
  (Extra space is used for the string)

*/


var isPalindrome = function(x) {
    let str = x.toString();
    let reverse = str.split("").reverse().join("");

    return str === reverse;
};