let asp = [
    {_id: 'eyJhbGciOiJIUzI1NiJ9'},
    {_id: 'eyJhbGciOiJIUzI1NiJ8'},
    {_id: 'eyJhbGciOiJIUzI1NiJ7'},
    {_id: 'eyJhbGciOiJIUzI1NiJ6'},
    {_id: 5}
]

let campoAsp = []

for (var i = 0; i < asp.length; i++) {
    if (asp[i]._id !== null) {
        campoAsp.push(asp[i])
    }
}

console.log(campoAsp)


var aspCampoNumero = asp.filter(function(asP) {
    return typeof(asP._id) === 'number'
})

console.log(aspCampoNumero)
