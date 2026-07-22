const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => 
        rl.question(query, resolve));
}

async function main() {
    let num1 = await askQuestion("Enter the first number: ");
    let num2 = await askQuestion("Enter the second number: ");
    let num3 = await askQuestion("Enter the third number: ");

    let min = Math.min(num1, num2, num3);
    let max = Math.max(num1, num2, num3);
    console.log("The minimum number is: " + min);
    console.log("The maximum number is: " + max);
    rl.close();
}

main();