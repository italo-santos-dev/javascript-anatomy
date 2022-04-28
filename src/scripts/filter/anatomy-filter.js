const produtos = [
  { _id: 1, descricao: 'Smartphone', categoria: 'Eletrônico' },
  { _id: 2, descricao: 'Notebook', categoria: 'Eletrônico' },
  { _id: 3, descricao: 'Geladeira', categoria: 'Eletrodoméstico' },
  { _id: 4, descricao: 'Liquidificador', categoria: 'Eletrodoméstico' },
  { _id: 5, descricao: 'Fogão', categoria: 'Eletrodoméstico' }
]
function retornaEletronico (value) {
  if (value._id !== null) { return value }
}
const produtosEletronico = produtos.filter(retornaEletronico)
produtosEletronico.forEach(produtoEletro => {
  console.log(produtoEletro)
})
