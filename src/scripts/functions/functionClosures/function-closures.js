// Habilidade que a função tem em acessar seu escopo lexico
// Ability that the function has to access its lexical scope

function returnFunction(name) {
    return function() {
        return name;
    };
}

const fun = returnFunction('Digna');

console.dir(fun);
console.log(fun());