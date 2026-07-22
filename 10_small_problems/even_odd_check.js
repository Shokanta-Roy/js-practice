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
    if (number % 2 === 0) {
        console.log(number + " is even.");
    }
    else {
        console.log(number + " is odd.");
    }
    rl.close();
}

main();