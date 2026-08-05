/**
Given a function fn, return a new function that behaves exactly like fn, except it can only be executed once.

The first call should return the result of fn.
All subsequent calls should return undefined.

We use a closure to keep track of whether the function has already been executed.

Key Idea:
Maintain a boolean flag called
Initially set to false
When the function runs the first time:
Execute fn
Set called = true
On future calls:
Skip execution
Return undefined
 */
var once = function (fn) {
    let called = false;
    return function (...args) {
        if (called) {
            return undefined;
        }
        called = true;
        return fn(...args);
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
