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

var multiply = new Function('x', 'y', 'return x * y')

console.log(multiply(7, 5))

var play = function(x, y) {
    return x * y
}

console.log(play(10, 7))

var xbox = function func_name(x, y) {
    return x * y
}

console.log(xbox(5,5))