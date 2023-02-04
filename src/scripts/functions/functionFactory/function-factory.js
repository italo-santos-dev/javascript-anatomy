 function createUser(name, lastname) {
    return {
        name,
        lastname,
        fala: function(subjectmatter) {
            return `${name} está ${subjectmatter}.`;
        }
    }
 }

 const userID1 = createUser('Bianca',  'Cavalcante ');
 console.log(userID1.fala('loves to read books'));