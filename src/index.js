const fs = require("fs");
const fastCsv = require("fast-csv");


fs.createReadStream("assets/DRT.csv", { encoding: "utf-8" })
  .on("data", (st) => {
    console.log(st);
  })
  .on("error", (err) => {
    console.log(err);
  });

// const options = {
//   objectMode: true,
//   delimiter: ";",
//   quote: null,
//   headers: true,
//   discardUnmappedColumns: true,
//   renameHeaders: false,
// };

// const data = [];

// fs.createReadStream("assets/DRT.csv")
//   .pipe(fastCsv.parse(options))
//   .on("error", (error) => {
//     console.log(error);
//   })
//   .on("data", (row) => {
//     data.push(row);
//   })
//   .on("end", (rowCount) => {
//     console.log(rowCount);
//     console.log(data);
//   });