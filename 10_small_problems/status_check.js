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
    const number = await askQuestion("Enter a number: ");
    if (number > 0) {
        console.log(number + " is positive.");
    }
    else if (number < 0) {
        console.log(number + " is negative.");
    }
    else {
        console.log(number + " is zero.");
    }
    rl.close();
}

main();
