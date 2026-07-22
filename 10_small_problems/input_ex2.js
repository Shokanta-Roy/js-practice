const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query,resolve);
    });
}

async function main() {

    const name = await askQuestion("What is your name? ");
    const age = await askQuestion("What is your age? ");

    console.log("Your name is "+ name);
    console.log("Your age is "+ age);
    rl.close();
}

main();
