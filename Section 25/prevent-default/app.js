const form = document.querySelector('#myForm');
const input = document.querySelector('#cat');
const ul = document.querySelector('#cats');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const catName = input.value;

    input.value = '';

    const newLI = document.createElement('li');
    newLI.innerText = catName;

    ul.append(newLI);
})

input.addEventListener('input', (e) => console.log(e));

ul.addEventListener('click', (e) => {
    console.dir(e.target);

    e.target.remove();
})