const readline = require("readline");  //require("readline"), this load node.js

const rl = readline.createInterface({ //readline.createInterface(...) → creates a connection between your program and the terminal
    //rl = your interface object (you’ll use it to ask questions)
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", function(name) {
    //function(name) → callback function
    //Runs after user enters input

    rl.question("What is your age? ", function(age) {
        console.log("Hello " + name + ", you are " + age + " years old.");
        rl.close();
        //Closes the readline interface
    });
});