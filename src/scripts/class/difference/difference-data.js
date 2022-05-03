let date1 = new Date("01/20/2010");
let date2 = new Date("01/11/2010");
let timeDiff = Math.abs(date2.getTime() - date1.getTime());
let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
console.log(diffDays)