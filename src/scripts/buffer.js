const fs = require('fs');
var XLSX = require('xlsx');

const filepath = '../../assets/DRTxit.csv'

const readable = fs.createReadStream(filepath, {
    highWaterMark: 10 * 1024 * 1024,
});

process_RS(readable);

function process_RS(stream) {
    var buffers = [];

    stream.on("data", function (chunk) {

        let uint8arr = new Uint8Array(Buffer.from(chunk, 'base64'));

        buffers.push(uint8arr);
    });

    stream.on("end", function () {
        let buffer = Buffer.concat(buffers);
        let str = Buffer.from(buffer).toString('base64');

        const workbook = XLSX.read(str, {
            type: 'base64',
            cellText: false,
            cellDates: true,
            WTF: true
        });

        if (!workbook) stream.pause()

        const sheetNames = workbook.SheetNames;
        const worksheet = workbook.Sheets[sheetNames[0]];

        const result = XLSX.utils.sheet_to_json(worksheet, {
            blankrows: false,
            raw: false,
            dateNF: 'dd"/"mm"/"yyyy'
        });

        console.log(result)
    });

    stream.on("drain", function (workbook) {
        workbook.resume()
    });
}