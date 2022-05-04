// Date.prototype.addDias = function (dias) {
//    this.setDate(this.getDate() + dias)
// };

// var dt = new Date();

// dt.addDias(5);

// console.log(dt);

// if (dt > dt) {
//    dt.addDias(6);

//    console.log(dt);
// }


function addDaysToDate(date, days){
   const res = new Date(date);
   res.setDate(res.getDate() + days);
   return res;
}

const tmpDate = new Date(); // Augest 20, 2020
console.log(addDaysToDate(tmpDate, 4));