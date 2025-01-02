const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');

const pessoas = [
    { nome: 'Test 1'},
    { nome: 'Test 2'},
    { nome: 'Test 3'},
    { nome: 'Test 4'},
]

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json)