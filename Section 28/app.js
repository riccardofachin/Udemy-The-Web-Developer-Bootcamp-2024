/* fetch('https://swapi.dev/api/people/1')
    .then(data => {
        console.log('resolved1');
        return data.json();
    })
    .then(res => {
        console.log(res);
        return fetch('https://swapi.dev/api/people/2');
    })
    .then(data => {
        console.log('resolved2');
        return data.json();
    })
    .then(res => {
        console.log()
    })
    .catch(err => {
        console.log(err);
    })
*/

const getStarWars = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/1');
        const first = await res.json();
        console.log(first);
        const res2 = await fetch('https://swapi.dev/api/people/2');
        const second = await res2.json();
        console.log(second);
    } catch (e) {
        console.log(e);
    }
}

getStarWars();