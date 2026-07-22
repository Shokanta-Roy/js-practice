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
function primeChecker(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

async function main() {
    const number = await askQuestion("Enter a number: ");
    if (primeChecker(number)) {
        console.log(number + " is a prime number.");
    }
    else {
        console.log(number + " is not a prime number.");
    }
    rl.close();
}

main();
