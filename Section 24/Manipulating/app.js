const allLinks = document.querySelectorAll('p');

for (const link of allLinks) {
    console.log(link.innerText);
    console.log(link.textContent);
}

const titolo = document.querySelector('h1')
titolo.innerHTML += '<sup>TrySup</sup>'

const nav = document.getElementById('toc');

nav.setAttribute('id', 'nope');

nav.style.backgroundColor = 'violet';

console.log(window.getComputedStyle(nav));


const span = document.querySelector('span');

span.classList.toggle('toctogglespan');
span.classList.toggle('toctogglespan');
