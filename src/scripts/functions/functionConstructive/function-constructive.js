function people(name, surname) {
    this.name = name;
    this.surname = surname;
}

const p1 = new people('Luiz', 'Otávio');
const p2 = new people('Maria', 'Linda');

console.log(p1.name);