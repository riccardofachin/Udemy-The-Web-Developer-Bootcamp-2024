const userInput = prompt('Give a number');

if (!(userInput >= 5 && userInput < 50 || userInput > 70)) {
    console.log('Nice one!');
} else {
    console.log('Not nice..');
}