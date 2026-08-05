//Given an array of functions functions = [f1, f2, ..., fn], return a new function that represents their composition.
//Composition Rule:compose([f1, f2, f3])(x) = f1(f2(f3(x)))
//Functions are applied from right to left
//If the array is empty → return identity function f(x) = x

/*
approach: Traverse functions from right to left
          Apply each function to the accumulated result
          Use JavaScript's built-in reduceRight() for clean implementation.

*/
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        return functions.reduceRight((acc,fn) => {
            return fn(acc);
        }, x);
        
    };
};