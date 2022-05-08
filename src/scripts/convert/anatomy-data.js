const reverseDateRepresentation = date => {
    let parts = date.split('/');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

const sortedDates = ['3/20/22', '02/01/2018', '01/01/2018']
    .map(reverseDateRepresentation)
    .sort()
    .map(reverseDateRepresentation);

console.log(sortedDates);


function converteDate(str) {
    if (str === null) {
        return null;
    }

    let dates = (str).split('/');

    // YYYYY-MM-DD
    // var dateString = new Date(dates);

    // let dateString = !isNaN(Date.parse(dates))


    // if (dateString === true) {
    //     return new Date(dates)
    // }

    var y = dates[2]

    // TODO: Converter data de 'M[0]/D[1]/YY[2]' para 'D/MM/YYYY'
    var dateStringTest = (dates[1] <= 9 ? '0' + dates[1] : dates[1]) + '/' + (dates[0] <= 9 ? '0' + dates[0] : dates[0]) + '/' + y;

    return dateStringTest
    //    return dateString
    // return new Date(Date.UTC(dates[2], parseInt(dates[1]) - 1, dates[0]));
}

let data = new Date("Jan 29 2020");
let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate()));
console.log(dataFormatada);

console.log(converteDate(str = "4/1/20"))

console.log(converteDate(str = '3/25/2020'))

console.log(converteDate(str = '2020/2/29'))

// var data = new Date('3/25/1900');
// console.log(data.toISOString().substr(0, 10).split('-').reverse().join('/'));

let stringsFromAPI = ["4/1/22"];

stringsFromAPI.forEach((d) => {
    if (!isNaN(Date.parse(d))) {
        console.log(new Date(d));
    }
})


function convertFromStringToDate(responseDate) {
    let dateComponents = responseDate.split('/');
    let datePieces = dateComponents;
    return (new Date(datePieces[2], (datePieces[1] - 1), datePieces[0],
    ))
}

console.log(convertFromStringToDate("21/03/2020"))

let dataTest = "10/11/1922"

let dataSemTime = dataTest.split("/");
let dataValidacaoDoRegistro = new Date(20 + dataSemTime[2].substr(-2), dataSemTime[1] - 1, dataSemTime[0]);

// .toLocaleDateString();

console.log("########## " + dataValidacaoDoRegistro)

let d = "12/12/2020 00:00:00 AM";

let dsT = d.split(" ")[0];

console.log(dsT);
