function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, tmp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tmp);
    })
}

wait('Phrase', rand(1, 3))
    .then(response => {
        console.log(response);
        return wait('Phrase 1', rand(1, 3));
    })
    .then(response => {
        console.log(response);
        return wait('Phrase 2', rand(1, 3));
    })
    .then(response => {
        console.log(response);
    })
    .catch();

const promises = [
    wait('Promise 1', 3000),
    wait('Promise 2', 2000),
    wait('Promise 3', 1000),
];

Promise.all(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (err) {
        console.log(err);
    });

Promise.race(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (err) {
        console.log(err);
    });

function downloadPage() {
    const inCache = true;

    if (inCache) {
        return Promise.resolve('Página em cache');
    } else {
        return wait('Download', 3000);
    }
}

downloadPage()
.then(dadosPage => {
    console.log(dadosPage);
})
.catch(e => console.log(e));