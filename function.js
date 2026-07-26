//Function Declaration
// function functionname(parameters) {
//     //code
// }

// function add(a,b) {
//     return a+b;
// }
// console.log(add(10,20));

//Function Declaration Hoisting
hello();

function hello() {
  console.log("Hello, roy");
}
//Function expression
const variableName = function (perameters) {
  //code
};
// const add = function(a,b) {
//     return a+b;
// }
// console.log(add(5,7));

//arrow function
const add = (a, b) => {
  return a + b;
};
console.log(add(50, 60));

const multi = (a, b) => {
  return a * b;
};
console.log(multi(4, 5));

const square = (x) => {
  return x * x;
};
console.log(square(5));
