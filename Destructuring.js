// what is destructuring?
// extract values from object or arrays into variables

//Object Destructuring
//basic example
const user = {
    name: "Shokanta",
    age: 24,
    city: "Dhaka"
};
//old way 
const name1 = user.name;

//destructuring 
const {name, age} = user;
console.log(name);
console.log(age);
//rename veriables
const {name: userName} = user;
console.log(userName);
// default values
const { country = "Bangladesh"} = user;
console.log(country);
console.log(user);
//nested object Destructuring
const student = {
  name: "Jion",
  age: 25,
  marks: {
    bangla: 50,
    english: 60,
    math: 70,
    science: 80,
  },
};
console.log(student);
const {marks: {math}} = student;
console.log("Math = " + math);



