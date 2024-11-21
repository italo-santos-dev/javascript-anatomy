const name = 'Kif';
const lastname = '';

const speakName = () => {
    console.log(name, lastname);
}

exports.name = name;
exports.lastname = lastname;

console.log(module.exports)