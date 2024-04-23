/* const logIn = async (username, password) => {
    if (!username || !password) throw 'Oh no!'
    else if (password === 'nice') return 'Yeah!'
    throw 'bleah'
}

logIn('aa')
    .then((data) => console.log('first', data))
    .catch((err) => console.log('first', err))

logIn('rr', 'nicea')
    .then((data) => console.log('second', data))
    .catch((err) => console.log('second', err))

logIn('rr', 'nice')
    .then((data) => console.log('third', data))
    .catch((err) => console.log('third', err)) */




const changeColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        if (delay < 2000) {
            setTimeout(() => {
                document.body.style.backgroundColor = color
                resolve('yeah')
            }, delay);
        } else {
            reject('Too long..');

        }
    })
}

async function rainbow() {
    try {
        let first = await changeColor('red', 1000);
        console.log(first);
    } catch (e) {
        console.log(e);
    }
    try {
        let second = await changeColor('blue', 3000);
        console.log(second);
    } catch (e) {
        console.log(e);
    }
    await changeColor('green', 1000);
    return 'ALL DONE';
}

rainbow()