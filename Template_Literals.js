//use backtics instend of using double qoute
let num1 = 10;
let num2 =20;

let result = num1 + num2;

console.log(result);
console.log("addition of num1 and num2 is result");
console.log("addition of " + num1 + " and " + num2 + " is " + result);
console.log(`addition of ${num1} and ${num2} is ${result}`);
console.log(`hi, I am shokanta roy.
    I am from UIU`);
console.log(`sum is ${num1+num2}`);

const age = 18;
console.log(`you are ${age >=18 ? `audult`: `minor`}`);


// User object
const user = {
  name: "Shokanta",
  balance: 1500,
  accountType: "Savings",
  isActive: true
};

// Function to generate summary
function generateSummary(userData) {
  const { name, balance, accountType, isActive } = userData;

  return `
👤 Account Holder: ${name}
🏦 Account Type: ${accountType}
💰 Balance: ৳${balance}
📊 Status: ${isActive ? "Active ✅" : "Inactive ❌"}
`;
}

// Function to withdraw money
function withdraw(userData, amount) {
  const { balance, name } = userData;

  if (amount > balance) {
    return `❌ Sorry ${name}, insufficient balance!`;
  }

  userData.balance -= amount;

  return `✅ ${name}, you withdrew ৳${amount}. New balance: ৳${userData.balance}`;
}



console.log(generateSummary(user));

console.log(withdraw(user, 500));

console.log(generateSummary(user));