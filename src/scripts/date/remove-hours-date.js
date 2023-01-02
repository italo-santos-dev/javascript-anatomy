let data = new Date(new Date().setHours(-3, 0, 0, 0));
let dataTest = new Date(new Date("Wed Oct 26 2022 12:07:22 GMT-0300 (BRT)").setHours(-3, 0, 0, 0));


let data1 = new Date();
let data2 = new Date();
let data1HoraZerada = new Date(data1.getFullYear(), data1.getMonth(), data1.getDate(), 0, 0, 0, 0);
let data2HoraZerada = new Date(data2.getFullYear(), data2.getMonth(), data2.getDate(), 0, 0, 0, 0);

console.log(dataTest);