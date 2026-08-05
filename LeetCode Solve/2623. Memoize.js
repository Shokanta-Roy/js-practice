/*
Given a function fn, return a memoized version of that function.

A memoized function:

Stores results for previously seen inputs
Returns cached results instead of recomputing
Ensures fn is never called twice with the same inputs

Approach
We use a cache (Map) to store results based on input arguments.

Key Idea:
Convert function arguments into a unique key
Store result in cache after first computation
On repeated calls:
Return cached result
Do NOT call fn again


*/


function memoize(fn) {
    // Cache to store results
    const cache = new Map();

    return function(...args) {
        // Convert arguments into a unique key
        const key = JSON.stringify(args);

        // If result exists in cache → return it
        if (cache.has(key)) {
            return cache.get(key);
        }

        // Otherwise compute, store, and return
        const result = fn(...args);
        cache.set(key, result);

        return result;
    };
}
