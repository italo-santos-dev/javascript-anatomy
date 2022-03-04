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
