"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ola = function (nome) {
    console.log("Olá " + nome);
};
ola("Angelo");
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
/** Criando Lista de Carros */
/** Instâncias */
var carroA = new Carro_1.Carro('Land Hover', 4);
var carroB = new Carro_1.Carro('Veloster', 3);
var carroC = new Carro_1.Carro('Jetta', 4);
var carroD = new Carro_1.Carro('Renegate', 4);
/** Lista de Carros da Concesionaria */
var listaCarros = [carroA, carroB, carroC, carroD];
var concessionaria = new Concessionaria_1.Concessionaria('Avenida Heraclito Graça', listaCarros);
var cliente = new Pessoa_1.Pessoa('Angelo', 'Renegate');
/** Exibir LIsta de Carros */
//console.log(concessionaria.mostrarListaCarro());
/** Exibir Carro Favorito */
//console.log('Carro Preferido do Cliente '+ cliente.dizerNome() + ' é: ' + cliente.dizerCarroPreferido());
/** Tratando Informações */
concessionaria.mostrarListaCarro().map(function (carro) {
    //console.log(carro);
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        console.log('Carro apos compra: ' + carro);
        cliente.comprarCarro(carro);
    }
});
//console.log('Cliente apos a compra: ' + cliente.dizerCarroQueTem());
