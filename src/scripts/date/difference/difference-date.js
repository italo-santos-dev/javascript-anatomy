let date1 = new Date("2022-04-05");
let date2 = new Date("2022-04-10");
let timeDiff = Math.abs(date2.getTime() - date1.getTime());
let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
console.log(diffDays)

let gg = new Date();
let el = new Date();

if (gg.toDateString() === el.toDateString()) {
    console.log(el)   
}

let dateGg = new Date();

let dateEl = new Date("2022-05-05T20:34:34.073Z")

console.log(dateGg.valueOf() == dateEl.valueOf())