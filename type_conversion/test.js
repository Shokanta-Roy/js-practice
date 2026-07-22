const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function main() {
  const input = await askQuestion("Enter a number: ");
  const number = Number(input);
  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    console.log(`You entered the number: ${number}`);
  }
    rl.close();
}

main(); 