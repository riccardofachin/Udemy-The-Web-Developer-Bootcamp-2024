const saluta = function (saluto) {
    console.log(saluto);
}

saluta('ciao');

function factoryRaggio(num1, num2) {
    return function calcolaRaggio(tot) {
        return tot + num1 + num2;
    }
}

const mioRaggio = factoryRaggio(10, 20);

console.log(mioRaggio(5));

const myCar = {
    color: 'red',
    showColor() {
        return this.color;
    }
}

function yell(nome) {
    try {
        nome.toUpperCase();
    } catch (e) {
        console.log(e);
    }
}