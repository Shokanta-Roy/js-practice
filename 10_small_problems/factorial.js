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

function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

async function main() {
    const number = await askQuestion("Enter a number: ");
    const factorial = calculateFactorial(number);
    console.log(`The factorial of ${number} is ${factorial}`);
    rl.close();
}
main();
