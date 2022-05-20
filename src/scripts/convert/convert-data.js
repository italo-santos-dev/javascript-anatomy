function converteDate(str) {
    if (str == null || str.trim().length === 0) {
        return null;
    }
    let dates = (str).split('/');
    //return new Date(Date.UTC(20 + dates[2].substr(-2), parseInt(dates[0]) - 1, dates[1], 3, 0, 0));

    //return new Date(Date.UTC(dates[2], parseInt(dates[1]) - 1, dates[0], 3, 0, 0));
    return new Date(Date.UTC(20 + dates[2].substr(-2), parseInt(dates[1]) - 1, dates[0], 3, 0, 0));
}

console.log(converteDate("15/03/22"))

// d / m / yyyy
let object = "03/15/2030"

// m / d / yyyy
let err = "05/15/2030"

let data = object.split('/');
let dataErr = err.split("/");

let dataValidacaoDoRegistro = new Date(data[2], data[0] - 1, data[1]);

//let dataValidacaoDoRegistro = new Date(20 + data[2].substr(-2), data[0] - 1, data[1]);
//let dataValidacaoDoRegistro = new Date(Date.UTC(data[2], data[1], data[0], 3, 0, 0));
console.log(dataValidacaoDoRegistro)

//  let dataValidErr = new Date(Date.UTC(dataErr[2],  dataErr[0], dataErr[1]));

 let dataValid = new Date(Date.UTC(dataErr[2],  dataErr[1], dataErr[0]));
//  console.log(dataValidErr)

 console.log(dataValid)

let dat = setTimeTo6(new Date());

console.log(dat)

function setTimeTo6(updateDate) {
    let date = new Date(updateDate);
    let day = date.getUTCDate();
    let month = date.getUTCMonth();
    let year = date.getUTCFullYear();
    
    date.setHours(6,0,0,0);
    date.setDate(day);
    date.setMonth(month);
    date.setYear(year);

    return date;
}