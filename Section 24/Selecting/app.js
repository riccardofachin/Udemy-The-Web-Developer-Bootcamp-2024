const allImages = document.getElementsByTagName('img');

for (const img of allImages) {
    console.log(img.src);
}

const allSquares = document.getElementsByClassName('square');

for (const square of allSquares) {
    square.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
}

const allLinks = document.querySelectorAll('p a');

for (const link of allLinks) {
    console.log(link.href);
}