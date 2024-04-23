const button = document.getElementById('v2');

button.onclick = function () {
    alert('my oh my');
}

const button3 = document.querySelector('#v3');

button3.addEventListener('click', () => {
    alert('best practice!')
})