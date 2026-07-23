/*

if (condition) {
    //run if condition is true
}
else {
    //run if condition is false
}

const readline = require("readline-sync");
let age = readline.question("Enter your age: ");
*/

/*
let afternoon = false;
if (afternoon) {
    console.log("you can go for football");
}
else {
    console.log("you can go for study");
}

*/

/*
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}
async function main() {
    const score = await askQuestion("Enter a score: ");
    if (score <= 100) {
        if (score >= 90) {
            console.log("A");
        }
        else if (score >= 80) {
            console.log("B");
        }
        else if (score >= 70) {
            console.log("C");
        }
        else if (score >= 60) {
            console.log("D");
        }   
        else {
            console.log("F");
        }
    }
    else {
        console.log("Invalid score. Please enter a score between 0 and 100.");
    }
    
    rl.close();
}
main();     

*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}  
/* 
async function main() {
    const age = await askQuestion("Enter your age: ");
    let result = (age >= 18) ? "You are an adult." : "You are a minor.";
    console.log(result);
    rl.close();
}
*/
async function main() {
    const day = await askQuestion("Enter a day of the week (1-7): ");
    let result;
    switch (day) {
        case "1":
            result = "Monday";
            break;
        case "2":
            result = "Tuesday";
            break;
        case "3":
            result = "Wednesday";
            break;
        case "4":
            result = "Thursday";
            break;
        case "5":
            result = "Friday";
            break;
        case "6":
            result = "Saturday";
            break;
        case "7":
            result = "Sunday";
            break;
        default:
            result = "Invalid day. Please enter a number between 1 and 7.";
    }
    console.log(result);
    rl.close();
}
main();
