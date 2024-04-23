let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const target = Math.floor(Math.random() * maximum) + 1;

console.log(target);

let guess = parseInt(prompt("Enter your guess"));
let attempts = 1;

while (parseInt(guess) !== target) {
    if (guess === 'q') {
        break;
    }

    attempts++;

    if (guess < target) {
        guess = prompt("Too low...");
    } else {
        guess = prompt("Too high");
    }
}

if (guess === 'q') {
    console.log("Quitting..");
} else {
    console.log(`Nice! It took you ${attempts} guesses.`);
}
