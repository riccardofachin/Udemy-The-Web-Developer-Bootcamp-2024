const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    const color = createColor();
    document.body.style.backgroundColor = color;
    h1.innerText = color;
});


const createColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    h1.style.color = r + g + b > 300 ? 'black' : 'white';

    return `rgb(${r}, ${g}, ${b})`;
};