/*
# Intuition

Roman numerals follow a pattern where values are generally added from left to right.
However, when a smaller value appears before a larger value (like IV or IX), it means subtraction instead of addition.
So, while traversing the string:

* If the current value is **less than the next value**, we subtract it.
* Otherwise, we add it.

# Approach

1. Create a mapping of Roman symbols to their integer values.
2. Traverse the string from left to right.
3. For each character:

   * Compare it with the next character.
   * If current < next → subtract current value.
   * Else → add current value.
4. Return the final result.

# Complexity

* Time complexity: $$O(n)$$
  (We traverse the string once)

* Space complexity: $$O(1)$$
  (Fixed map size, no extra space depending on input size)

*/


var romanToInt = function(s) {
    let ans = 0;

    const mp = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100,
        D: 500, M: 1000
    };

    for (let i = 0; i < s.length; i++) {
        const curr = mp[s[i]];
        const next = mp[s[i + 1]] || 0;

        if (curr < next) {
            ans -= curr;
        } else {
            ans += curr;
        }
    }

    return ans;
};

