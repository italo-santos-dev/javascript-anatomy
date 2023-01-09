//MM-DD-YYYY
var start = new Date("2022-04-05");
var end = new Date("2022-04-10");


var loop = new Date(start);

while (loop <= end) {
    console.log(loop);

    var newDate = loop.setDate(loop.getDate() + 1);
    loop = new Date(newDate);
}