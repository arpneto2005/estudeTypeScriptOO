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
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
