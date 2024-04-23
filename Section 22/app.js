const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (number) {
    console.log(number);
})

const doubles = numbers.map(function (number) {
    return number * 2;
})

const triple = (num) => {
    return num * 3;
}

console.log(triple(5));

const shortDoubles = numbers.map(number => number * 2);

setTimeout(
    () => console.log('finally'),
    5000
)

const intervalId = setInterval(
    () => console.log('now'),
    1000
)

const smallEvenNums = numbers.filter(num => num < 5).map(num => num % 2 === 0);
console.log(smallEvenNums);

const numsSum = numbers.reduce((tot, curNum) => tot + curNum, 100);