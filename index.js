const express = require('express');
const Pessoa = require('./nightmare/Pessoa');

const pessoa = new Pessoa();
const app = express();


app.get('/', (req, res) => {
    res.send('Serviço de geração de dados');
})
app.get('/api/get-pessoa', (req, res) => {
    pessoa.gerarPessoaMulher().then(response => res.send(JSON.stringify(response)));
})

//PORT
const port = process.env.PORT || 3000
app.listen(3000, () => console.log(`Escutando a porta ${port}`))
