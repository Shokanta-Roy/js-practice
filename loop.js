/*
for(initialization; condition; increment /decrement) {
    //code to be executed repeatedly
}
*/

let n=10;
// for(let i=1; i<= n; i++) {
//     console.log(i);
// }

// //while loop
// while(condition) {
//     //code to be executed repeatedly
//     //when the condition is false, the loop will stop
// }

let i=5;
// while(i <= n) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// }
// while (i<10);

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
for (const fruit of fruits) {
    console.log(fruit);
}

for (const index in fruits) {
    console.log(index, fruits[index]);
}

for(const char of "Hello") {
    console.log(char);
}