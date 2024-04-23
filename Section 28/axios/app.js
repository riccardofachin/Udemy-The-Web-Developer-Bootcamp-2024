/* axios.get('https://youtubeapp-fb07a.firebaseio.com/items.json')
    .then(res => console.log('result', res.data))
    .catch(err => console.log('error', err)) */


const getYoutube = async () => {
    try {
        const youtubeRes = await axios.get('https://youtubeapp-fb07a.firebaseio.com/items.json');
        console.log(youtubeRes);
    }
    catch (e) {
        console.log(youtubeRes);
    }
}

// getYoutube();

const button = document.querySelector('button');
const list = document.querySelector('ul');

const addJoke = async () => {
    const gotJoke = await getJoke();
    const newLI = document.createElement('li');
    newLI.innerText = gotJoke;
    list.append(newLI);
}

button.addEventListener('click', addJoke)

const getJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const catchJoke = await axios.get('https://icanhazdadjoke.com/', config);
        return catchJoke.data.joke;
    }
    catch (e) {
        return 'NO Joke'
    }
}

getJoke();