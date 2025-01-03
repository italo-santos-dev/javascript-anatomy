const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler')

// const pessoas = [
//     { nome: 'Test 1'},
//     { nome: 'Test 2'},
//     { nome: 'Test 3'},
//     { nome: 'Test 4'},
// ]

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    rederizaDados(dados);
}

function rederizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(element => {
        console.log(element);
    });
}

lerArquivo(caminhoArquivo);