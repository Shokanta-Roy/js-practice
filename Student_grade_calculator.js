const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

function calculateAverage(scores) {
  const sum = scores.reduce((acc, val) => acc + val, 0);
  return sum / scores.length;
}

function getGrade(avg) {
  if (avg >= 80) return "A";
  else if (avg >= 70) return "B";
  else if (avg >= 60) return "C";
  else if (avg >= 50) return "D";
  else return "F";
}

async function main() {
  try {
    const input = await askQuestion("Enter scores separated by space: ");

    const scores = input.trim().split(" ").map(Number);

    if (scores.length === 0 || scores.some(isNaN)) {
      console.log("❌ Invalid input. Please enter valid numbers.");
      rl.close();
      return;
    }

    if (scores.some((score) => score < 0 || score > 100)) {
      console.log("❌ Scores must be between 0 and 100.");
      rl.close();
      return;
    }

    const avg = calculateAverage(scores);
    const grade = getGrade(avg);

    console.log("\n📊 Results:");
    console.log("Scores:", scores.join(", "));
    console.log("Average:", avg.toFixed(2));
    console.log("Grade:", grade);
  } catch (error) {
    console.log("❌ Error:", error.message);
  } finally {
    rl.close();
  }
}

main();
