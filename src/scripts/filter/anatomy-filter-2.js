const produtos = [
  { id: 1, descricao: 'Smartphone', categoria: 'Eletrônico' },
  { id: 2, descricao: 'Notebook', categoria: 'Eletrônico' },
  { id: 3, descricao: 'Geladeira', categoria: 'Eletrodoméstico' },
  {},
  { id: null },
  { id: NaN },
  { id: 'undefined' },
  { id: 4, descricao: 'Liquidificador', categoria: 'Eletrodoméstico' },
  { id: 5, descricao: 'Fogão', categoria: 'Eletrodoméstico' }
]

function filtrarPorDescricao (value) {
  if ('id' in value && typeof (value.id) === 'number' && !isNaN(value.id)) {
    return value
  }
}

const produtosValidos = produtos.filter(filtrarPorDescricao)
produtosValidos.forEach(produto => {
  console.log(produto)
})
