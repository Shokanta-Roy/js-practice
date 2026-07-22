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
function reverseNumber(numStr) {
    return numStr.split('').reverse().join('');
}

async function main() {
    const number = await askQuestion("Enter a number: ");
    const reversedNumber = reverseNumber(number);
    console.log("The reversed number is: " + reversedNumber);
    rl.close();
}

main();
