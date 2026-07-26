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
Array.reduce((accumulator, currentValue) => {
    return updatedValue;
}, initialValue);
