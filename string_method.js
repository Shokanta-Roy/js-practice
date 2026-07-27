//split()--- convert string to array
//split a string into parts based on a separator
// const text = "apple,banana,mango";
// const result = text.split(",");
// console.log(result);
// const word = "Shokanta";
// console.log(word.split(""));

//join()
//cmpletely oposite of split()
// joins array elements into a string
// const fruits = ["apple", "banana", "mango"];
// const result = fruits.join("-");
// console.log(result);

//includes()---------- check existence
//return true and false value
//case sensitive
// const text = "I love JavaScript";
// console.log(text.includes("Love"));

// //slice()--- extract part of string
// //Does not change the original string
// //extract a portion from a string
// // String.slice(start, end);
// const name = "Shokanta Roy";
// console.log(name.slice(0, 5));

// //replace()--- Replace text
// const sentence = "I love my career";
// const result = sentence.replace("career", "family");
// console.log(result);




//Real Example
const sentence = "I love coding";
//split
const words = sentence.split(" ");
//join
const newSentence = words.join("-");
//includes
const hasLove = sentence.includes("love");
//slice
const part = sentence.slice(2,6);
//replce
const updated = sentence.replace("coding", "nodeJs");

console.log(sentence);
console.log(words);
console.log(newSentence);
console.log(hasLove);
console.log(part);
console.log(updated);