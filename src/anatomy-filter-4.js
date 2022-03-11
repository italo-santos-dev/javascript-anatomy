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
    'foo', 'bar', 'foo', 
]


var campoSelecaoAsps = asp.filter((este, i) => asp.indexOf(este) === i).filter(function isNaN(item) {
    return item._id
});

console.log(campoSelecaoAsps)

var aspCampoNuNull = asp.filter(function isNaN(asP) {
    return asP._id
});

console.log(aspCampoNuNull)

let itens = asp.filter(a => a !== null).filter((este, i) => asp.filter(a => a !== null).map(a => a._id).indexOf(este._id) === i);

itens.forEach(item => item);

console.log(itens)