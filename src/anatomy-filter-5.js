let obras = [
    {_id: 'eyJhbGciOiJIUzI1NiJ9', name: "SAP", employee: "PJ"},
    {_id: NaN},
    {_id: 'eyJhbGciOiJIUzI1NiJ8', name: "E2E", employee: "PJ"},
    {_id: null },
    {_id: 'eyJhbGciOiJIUzI1NiJ7', name: "NEXT", employee: "CLT"},
    {_id: 'undefined'},
    {_id: 'eyJhbGciOiJIUzI1NiJ6', name: "INTER", employee: "CLT"},
    {_id: 'eyJhbGciOiJIUzI1NiJ5', name: "INTER", employee: "CLT"},
    {_id: 3},
    {},
    {_id: 2},
]

let itens = obras.filter((el) => {
    return el.name === 'E2E'
});

console.log(itens)

let listClt = obras.filter((el) => {
    return el.employee === 'CLT'
}).length;

console.log(listClt)

let listPj = obras.filter((el) => {
    return el.employee === 'PJ'
}).length;

console.log(listPj)