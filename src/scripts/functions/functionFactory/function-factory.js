 function createUser(name, lastname) {
    return {
        name,
        lastname,
        speaks(subjectmatter) {
            return `${this.name} está ${subjectmatter}.`;
        }
    }
 }

 const userID1 = createUser('Bianca',  'Cavalcante ');
 console.log(userID1.speaks('loves to read books'));