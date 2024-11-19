const name = 'Kif';
const lastname = 'Miranda';

const speakName = () => {
    console.log(name, lastname);
}

exports.name = name;
exports.lastname = lastname;

console.log(module.exports)