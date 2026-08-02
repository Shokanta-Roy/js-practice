/**
 * @param {any} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    /**
     * toBe: checks strict equality (===)
     */
    toBe: function (otherVal) {
      if (val === otherVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },

    /**
     * notToBe: checks strict inequality (!==)
     */
    notToBe: function (otherVal) {
      if (val !== otherVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

/**

 *
 * 1. expect(val)
 *    - This function takes a value and "stores" it using closure.
 *
 * 2. It returns an object with two methods:
 *    - toBe()
 *    - notToBe()
 *
 * 3. toBe(otherVal)
 *    - Checks if val === otherVal
 *    - If yes → return true
 *    - If no  → throw Error("Not Equal")
 *
 * 4. notToBe(otherVal)
 *    - Checks if val !== otherVal
 *    - If yes → return true
 *    - If no  → throw Error("Equal")
 *

 */

try {
  console.log(expect(5).toBe(5)); // true
} catch (e) {
  console.log(e.message);
}

try {
  console.log(expect(5).notToBe(5)); // throws "Equal"
} catch (e) {
  console.log(e.message); // "Equal"
}

try {
  console.log(expect(5).toBe(null)); // throws "Not Equal"
} catch (e) {
  console.log(e.message);
}
