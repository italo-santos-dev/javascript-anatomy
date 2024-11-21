const name = 'Kif';
const lastname = '';

const speakName = () => name + '' + lastname;

exports.name = name;
exports.lastname = lastname;
exports.speakName = speakName;

console.log(module.exports)