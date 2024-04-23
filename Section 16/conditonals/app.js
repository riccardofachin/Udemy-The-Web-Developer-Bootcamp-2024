const userNumber = prompt('ENTER A NUMBER');

if (userNumber < 0.5) {
    console.log("It's working");
} else if (userNumber >= 0.5 && userNumber < 0.8) {
    console.log('Even better.');
} else {
    console.log('WOW');
}