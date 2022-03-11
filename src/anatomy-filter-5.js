let area = [
    {_id: 'eyJhbGciOiJIUzI1NiJ9', name: "SAP"},
    {_id: NaN},
    {_id: 'eyJhbGciOiJIUzI1NiJ8', name: 'E2E'},
    {_id: null },
    {_id: 'eyJhbGciOiJIUzI1NiJ7', name: "NEXT"},
    {_id: 'undefined'},
    {_id: 'eyJhbGciOiJIUzI1NiJ6', name: "INTER"},
    {_id: 5},
    {},
    {_id: 6},
]

let itens = area.filter((el) => {
    return el.name === 'E2E'
})

itens.forEach(item => {
    return item
})

console.log(itens)