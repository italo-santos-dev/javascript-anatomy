function showTime() {
    let date = new Date();

    return date.toLocaleDateString('pt-br', {
        hour12: false
    });
}

setInterval(function () {
    console.log(showTime());
}, 1000);