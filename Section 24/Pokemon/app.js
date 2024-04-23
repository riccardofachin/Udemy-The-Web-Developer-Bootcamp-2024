// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    const label = document.createElement('span');
    label.innerText = `#${i}`;

    const image = document.createElement('img');
    image.src = `${url}${i}.png`;

    pokemon.appendChild(image);
    pokemon.appendChild(label);

    container.appendChild(pokemon);
}