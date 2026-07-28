// create an object 
//basic object
const person = {
  name: "Shokanta",
  age: 21,
  city: "Dhaka",
};
//empty object + add later
const user = {};
user.name = "Jhon";
user.age = 20;
user.city = "New York";



//Read (Access properties)
//dot notation
console.log(person.name); 
// bracket notation 
console.log(person["age"]);
console.log(user["name"]);
console.log(user["age"]);




//update properties
person.age = 30 //update existing 
console.log(person.age);
user.country = "US";
console.log(user.country); // add a new property



//delete properties
delete person.city;
console.log(person.city); // undefined



// example
const student = {
    name: "Jion",
    marks: 80
};
//read
console.log(student.name);
//update
student.marks = 99;
//add
student.grade = "A";
//delete
delete student.name


console.log(student);