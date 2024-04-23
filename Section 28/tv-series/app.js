const button = document.querySelector('#findButton');
const form = document.querySelector('#find');
const imagesDiv = document.querySelector('#imagesDiv');

const makeImg = (imgUrl) => {
    const img = document.createElement('img');
    img.src = imgUrl;
    imagesDiv.append(img);
}

const findShows = async (e) => {
    e.preventDefault();

    let lastImg = document.querySelector('#imagesDiv img');

    while (lastImg) {
        imagesDiv.removeChild(lastImg);
        lastImg = document.querySelector('#imagesDiv img');
    }

    const config = { params: { q: form.elements.query.value } }
    const shows = await axios.get(`https://api.tvmaze.com/search/shows`, config);

    for (let show of shows.data) {
        if (show.show?.image?.medium) {
            makeImg(show.show?.image.medium);
        }
    }

    form.elements.query.value = '';
}

form.addEventListener('submit', findShows) 