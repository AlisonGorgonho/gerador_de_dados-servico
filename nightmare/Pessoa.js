var jquery = require('jquery');
const Nightmare = require('nightmare');
const nightmare = Nightmare({
     show: false,
});

class Pessoa {
    
    constructor(nome ,cpf ,rg ,data_nascimento ,signo ,mae ,pai ,email ,senha ,cep ,endereco ,numero ,bairro ,cidade ,estado ,telefone ,celular ,altura ,peso ,tipo_sanguineo ,cor_favorita){
    
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.data_nascimento = data_nascimento;
        this.signo = signo;
        this.mae = mae;
        this.pai = pai;
        this.email = email;
        this.senha = senha;
        this.cep = cep;
        this.endereco = endereco;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.telefone = telefone;
        this.celular = celular;
        this.altura = altura;
        this.peso = peso;
        this.tipo_sanguineo = tipo_sanguineo;
        this.cor_favorita = cor_favorita;

    }

    async gerarPessoaMulher(){
        console.log('Gerando pesssoa mulher');

        var pessoaInstancia = new Pessoa();

        await nightmare
            .goto('https://www.4devs.com.br/gerador_de_pessoas')
            .click('#sexo_mulher')
            .wait(1000)
            .click('#bt_gerar_pessoa')
            .wait(2000)
            .evaluate(() => {
                var pessoa = {}
                pessoa.nome = $('#nome span').text()
                pessoa.cpf = $('#cpf span').text()
                pessoa.rg = $('#rg span').text()
                pessoa.dataNascimento = $('#data_nasc span').text()
                pessoa.email = $('#email span').text()
                pessoa.cep = $('#cep span').text()
                pessoa.endereco = $('#endereco span').text()
                pessoa.numero = $('#numero span').text()
                pessoa.bairro = $('#bairro span').text()
                pessoa.cidade = $('#cidade span').text()
                pessoa.estado = $('#estado span').text()
                pessoa.telefone = $('#telefone_fixo span').text()
                pessoa.celular = $('#celular span').text()
                return pessoa;
            })
            .then(response => {
                pessoaInstancia.nome = response.nome;
                pessoaInstancia.cpf = response.cpf;
                pessoaInstancia.rg = response.rg;
                pessoaInstancia.data_nascimento = response.dataNascimento;
                pessoaInstancia.email = response.email;
                pessoaInstancia.cep = response.cep;
                pessoaInstancia.endereco = response.endereco;
                pessoaInstancia.numero = response.numero;
                pessoaInstancia.bairro = response.bairro;
                pessoaInstancia.cidade = response.cidade;
                pessoaInstancia.estado = response.estado;
                pessoaInstancia.telefone = response.telefone;
                pessoaInstancia.celular = response.celular;
                console.log(pessoaInstancia.signo)
            })
            .catch(error => {
                console.error('Search failed:', error)
            })
            // console.log(pessoaInstancia);
            return pessoaInstancia;
    }

}

module.exports = Pessoa;