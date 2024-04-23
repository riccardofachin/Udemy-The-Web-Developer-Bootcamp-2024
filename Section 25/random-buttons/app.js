const createColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorise);
}


function colorise() {
    this.style.backgroundColor = createColor();
    this.style.color = createColor();
}