let data = new Date();

const onehour = 1000*60*60;
const oneDya = 1000*60*60*24;

data.setMinutes(data.getMinutes() + 3);

console.log(new Date((new Date()).getTime() + oneDya));

data.setHours(data.getHours() + 1);

console.log(data);