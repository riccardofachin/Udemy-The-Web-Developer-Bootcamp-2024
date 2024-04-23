const tryPromise = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand > 0.7) {
                resolve('YOUR DATA IS');
            } else {
                reject('BLEAH');
            }
        }, 1000);
    });
}

tryPromise('/niceUrl')
    .then((val) => console.log(val))
    .catch((err) => console.log(err));


const colorChange = ((color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
})

colorChange('red', 1000)
    .then(() => colorChange('yellow', 1000))
    .then(() => colorChange('orange', 1000))