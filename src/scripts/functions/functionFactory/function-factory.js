 function createUser(name, lastname, a, p) {
    return {
        name,
        lastname,
        speaks(subjectmatter) {
            return `${this.name} está ${subjectmatter}.`;
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
 }

 const userID1 = createUser('Bianca',  'Cavalcante', 1.8, 80);
 console.log(userID1.speaks('loves to read books'));
 console.log(userID1.imc());