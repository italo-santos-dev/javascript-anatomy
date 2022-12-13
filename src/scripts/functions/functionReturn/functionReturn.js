function createPerson(name, lastname) {
    return {
        name: name, lastname: lastname
    }
}

const person_1 = createPerson('Italo', 'Santos');

console.log(person_1);
console.log(typeof person_1);

function speakSentence(start) {
    function talkRest(rest) {
        return start + ' ' + rest;
    }
    return talkRest;
}

const speak = speakSentence("Hello");
const rest = speak("World");

console.log(rest);