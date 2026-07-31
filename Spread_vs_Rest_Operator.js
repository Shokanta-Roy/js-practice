//Spread operator
//think like, "Open or Expand"

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2);

const user = { name: "John", age: 25 };

const newUser = {
  ...user,
  country: "BD",
};

console.log(newUser);