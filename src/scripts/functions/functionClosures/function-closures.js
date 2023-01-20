function returnFunction(name) {
    return function() {
        return name;
    };
}

const fun = returnFunction('Digna');

console.dir(fun);
console.log(fun());