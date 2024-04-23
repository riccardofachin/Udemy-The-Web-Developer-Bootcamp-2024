const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    console.log(event);
})


const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
    console.log(e);
})

window.addEventListener('keyup', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            console.log(e.key, e.code);
            break;
        case 'ArrowDown':
            console.log(e.key, e.code);
            break;
        default:
            console.log('UGH');
    }
})