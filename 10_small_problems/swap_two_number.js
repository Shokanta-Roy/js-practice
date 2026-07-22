const readline = require('readline');

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
    let num1 = await askQuestion("Enter the first number: ");
    let num2 = await askQuestion("Enter the second number: ");
    console.log("Before swapping: num1 = " + num1 + ", num2 = " + num2);

    //swapping the numbers
    let temp = num1;
    num1 = num2;
    num2 = temp;
    console.log("After swapping: num1 = " + num1 + ", num2 = " + num2);
    rl.close();
}

main();
