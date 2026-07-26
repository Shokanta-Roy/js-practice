//forEach()
//it runs a function for each element
//does not return s new array
// const numbers = [1, 2, 3, 4];
// numbers.forEach(function (num) {
//   console.log(num);
// });
// //arrow version
// numbers.forEach((num) => console.log(num));

//map()
//creates a new array
//works on every element of the array
//if I want to modify every element of the array, I can use map()
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled);

//filter()
//creates a new array
//works on matched condition element
//if i want to modify some or one element or want to remove condition matcing element i can use it
// const numbers = [1,2,3,4]
// const evenChecker = numbers.filter(num => num%2 === 0);
// console.log(evenChecker);

//reduce()--- reduce to single value
//it return only one value
// array.reduce((accumulator, currentValue) => {
//   return updatedValue;
// }, initialValue);
// const numbers = [1,2,3,4];
// const sum = numbers.reduce((total, num) => {
//     return total+num;
// },0);
// console.log(sum);

//find()
//returns only the first matched with the condition
// i will use it if I need to get one matching element
// const numbers = [3,7,11,10,15];
// const result = numbers.find(num => num>8);
// console.log(result);

//real life example
const users = [
  { name: "John", age: 20 },
  { name: "Sara", age: 25 },
  { name: "Mike", age: 17 },
];

// 1. Get names
const names = users.map((user) => user.name);

// 2. Adults only
const adults = users.filter((user) => user.age >= 18);

// 3. Total age
const totalAge = users.reduce((sum, user) => sum + user.age, 0);

// 4. Find first minor
const minor = users.find((user) => user.age < 18);

console.log(names);
console.log(adults);
console.log(totalAge);
console.log(minor);