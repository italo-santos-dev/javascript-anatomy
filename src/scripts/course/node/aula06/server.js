const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <from action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </from>  
    `);
});

app.post('/', (req, res) => {
    res.semd('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entar em contato com a gente.');
})

app.listen(3000);