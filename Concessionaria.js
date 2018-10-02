"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Concessionaria.prototype.fornecerHorarioDeFuncionamento = function () {
        return 'Segunda à Sexta das 8:00 às 18:00';
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
