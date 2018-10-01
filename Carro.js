"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Carro = Carro;
