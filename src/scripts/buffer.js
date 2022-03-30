const fs = require('fs');
var XLSX = require('xlsx');

const filepath = '../../assets/DRT (1).csv'

const readable = fs.createReadStream(filepath, {
    highWaterMark: 10 * 1024 * 1024
});

process_RS(readable);

function process_RS(stream) {
    var buffers = [];

    stream.on("data", function (chunk) {
        buffers.push(chunk);
    });

    stream.on("end", function () {
        let buffer = Buffer.concat(buffers);

        const workbook = XLSX.read(buffer, {
            type: "buffer",
            WTF: true
        });

        const sheetNames = workbook.SheetNames;
        const worksheet = workbook.Sheets[sheetNames[0]];
        const result = XLSX.utils.sheet_to_json(worksheet);

        console.log(result)
    });
}


// const stream = fs.createReadStream(filepath, {
//     encoding: 'UTF-8',
//     highWaterMark: 10 * 1024 * 1024
// })

// stream.on('error', function (err) {
//     throw "Erro ao processar arquivo" + err
// });

// stream.on('data', function (chunk) {
//     // console.log(`${totalReads++} - ${chunk.length} bytes`)

//     const workbook = XLSX.read(chunk, { type: "string", cellText: false, cellDates: true });

//     if (!workbook) stream.pause()

//     var sheetName = workbook.SheetNames
//     var sheet = workbook.Sheets[sheetName]

//     let rows = XLSX.utils.sheet_to_json(sheet, { blankrows: false, raw: false, dateNF: 'dd"/"mm"/"yyyy' })

//     console.log(rows);

// })

// stream.on("drain", function () {
//     workbook.resume()
// });

// stream.on("end", function () {

// });