function rand(min, max) {
    min *= 1000;
    max *=1000;
    return Math.floor(Math.random() * (max - min) + min);
}
 
function wait(msg, tmp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tmp);
    })
}

wait('Phrase', rand(1,3))
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