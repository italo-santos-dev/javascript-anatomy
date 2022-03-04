function myFunction(obj) {
    obj.marca = "Toyota"
}

var myCarro = {
    marca: "Honda",
    modelo: "Accord",
    ano: 1998
}

console.log(myCarro.marca)

myFunction(myCarro)

console.log(myCarro.marca)

// Function Constructor
var multiply = new Function('x', 'y', 'return x * y')

console.log(multiply(7, 5))

// Function Anônima
var play = function(x, y) {
    return x * y
}

console.log(play(10, 7))

// Function expression de uma função nomeada
var xbox = function func_name(x, y) {
    return x * y
}

console.log(xbox(5,5));