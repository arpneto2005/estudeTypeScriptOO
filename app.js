"use strict";
var ola = function (nome) {
    console.log("Olá " + nome);
};
//ola("Angelo");
/**  Criação de Classes */
var Carro = /** @class */ (function () {
    function Carro(modelo, numProtas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numProtas = numProtas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaCarro) {
        this.endereco = endereco;
        this.listaCarro = listaCarro;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaCarro = function () {
        return this.listaCarro;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome, this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
    };
    Pessoa.prototype.dizerCorroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/** Criando Lista de Carros */
var carroA = new Carro('Land Hover', 4);
var carroB = new Carro('Veloster', 3);
var carroC = new Carro('Jetta', 4);
/** Lista de Carros Concesionaria */
var listaCarros = [carroA, carroB, carroC];
/** Criação de Pessoas  */
var pessoa = new Pessoa('Angelo', 'Veloster');
console.log(pessoa.dizerCarroPreferido());
var concessionaria = new Concessionaria('Avenida Heraclito Graça', listaCarros);
/** Exibir LIsta de Carros */
console.log(concessionaria.mostrarListaCarro());
