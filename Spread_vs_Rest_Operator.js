//Spread operator
//think like, "Open or Expand"
//spread is used to expand an array into seperate elements.

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(numbers);
console.log(maximum);
console.log(minimum);


let userName = "shokanta";
let letters = [...userName].join("-");
console.log(letters);

let fruits = ["apple", "banana", "orange"];
let vegetables = ["potato", "tomato", "chili"];
let food = [...fruits, ...vegetables];

console.log(fruits);
console.log(vegetables);
console.log(food);

// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];

// console.log(arr2);

// const user = { name: "John", age: 25 };

// const newUser = {
//   ...user,
//   country: "BD",
// };

// console.log(newUser);


//rest = bundles seperate elements into an array
