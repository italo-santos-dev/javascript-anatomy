function showTime() {
    let date = new Date();

    return  date.toLocaleDateString('pt-br', {
        hour12: false
    });
}

function intervalTime() {
    console.log(showTime());
}

setInterval(intervalTime, 1000);