let asp = [
    {_id: 'eyJhbGciOiJIUzI1NiJ9'},
    {_id: NaN},
    {_id: 'eyJhbGciOiJIUzI1NiJ8'},
    {_id: null },
    {_id: 'eyJhbGciOiJIUzI1NiJ7'},
    {_id: 'undefined' },
    {_id: 'eyJhbGciOiJIUzI1NiJ6'},
    {_id: 5},
    {},
    {_id: 6},
    {},
    'foo', 'bar', 'foo', 
]

let campoAsp = []

// for (var i = 0; i < asp.length; i++) {
//     if (asp[i]._id === 'eyJhbGciOiJIUzI1NiJ9') {
//         campoAsp.push(asp[i])
//     }
// }

// console.log(campoAsp)


// var aspCampoNumero = asp.filter(function(asP) {
//     return typeof(asP._id) === 'number'
// })

// console.log(aspCampoNumero)


// var aspNoDuplice = asp.filter(function(asP, i) {
//     return asp.indexOf(asP) === i
// })

// console.log(aspNoDuplice)

var aspCampoNoDuplice = asp.filter((este, i) => asp.indexOf(este) === i)

console.log(aspCampoNoDuplice)

// var aspCampoNuNull = asp.filter(function isNaN(asP) {
//     return asP._id
// })

// console.log(aspCampoNuNull)


