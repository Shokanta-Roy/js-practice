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

function countDigits(numberstr) {
    return numberstr.length;
}

async function main() {
    const numberstr = await askQuestion("Enter a number: ");
    const digitCount = countDigits(numberstr);
    console.log(`The number of digits in ${numberstr} is ${digitCount}`);
    rl.close();
}

main();