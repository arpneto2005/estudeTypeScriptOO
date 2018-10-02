"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**  Criação da Classe Veículo */
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.velocidade = 0;
    }
    /*
    constructor(modelo: String, numProtas: number){
        this.modelo = modelo;
        this.numProtas = numProtas;
    }
    */
    Veiculo.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
