/*
Intution
To check if brackets are valid,
we need to make sure that every opening bracket has a matching closing bracket in the correct order.

A stack is the best data structure for this:
When we see an opening bracket, we push it into the stack.
When we see a closing bracket, it must match the most recent opening bracket (the top of the stack).
If it does not match, the string is invalid.

Approach
Create a stack to store opening brackets.
Create a mapping of closing brackets to their matching opening brackets.
Traverse each character:
If it is an opening bracket, push it into the stack.

If it is a closing bracket:
Check if the top of the stack matches.
If not, return false.
Otherwise, remove the top element.
After traversal, the stack should be empty.
Empty stack means all brackets were properly closed.
Otherwise, return false.



*/

var isValid = function(s) {
    let stack = [];

    const map = {
      ")": "(",
      "}": "{",
      "]": "["
    };

    for(let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else {
            if(stack.pop() !== map[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}