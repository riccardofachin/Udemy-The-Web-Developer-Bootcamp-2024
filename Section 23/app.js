function greet(name, salute = 'Hi', punc = '!!!') {
    return `${salute}, ${name}${punc}`
}

console.log(greet('ric', 'ciao'));

const nums = [5, 10, 3, 28, 4, 75, 2];

console.log(Math.max(...nums));

const name = 'riccardo';

console.log(...name);

const bigNums = [114, 546, 324, 672, 921];

console.log([...nums, ...bigNums, 0])

console.log([...name]);

const cat = { name: 'mick', legs: 4, sound: 'miao' };
const dog = { name: 'ruf', color: 'brown', speed: 5 };

const catDog = { ...cat, ...dog, friends: 'lilly' };

function tryArguments() {
    console.log(arguments);
}

tryArguments(1, 10, 100, 1000);

function tryRest(first, second, ...others) {
    console.log(others);
}

tryRest('a', 'b', 'c', 'd', 'e')

const [first, second, ...others] = nums;

const { name: animalName, legs = 2, color: animalColor = 'red' } = cat;

function animalProfile({ name, legs = 2 }) {
    console.log(name, legs);
}