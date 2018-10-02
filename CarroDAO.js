"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var CarroDAO = /** @class */ (function () {
    function CarroDAO() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDAO.prototype.inserir = function (object) {
        console.log('Resolvendo a lógica insert');
        return false;
    };
    CarroDAO.prototype.atualizar = function (object) {
        console.log('Resolvendo a lógica atualizar');
        return false;
    };
    CarroDAO.prototype.remover = function (id) {
        console.log('Resolvendo a lógica remover');
        return new Carro_1.Carro('Cobalt', 4);
    };
    CarroDAO.prototype.selecionar = function (id) {
        console.log('Resolvendo a lógica selecionar');
        return new Carro_1.Carro('Cobalt', 4);
    };
    CarroDAO.prototype.selecionarTodos = function () {
        return [new Carro_1.Carro('Cobalt', 4)];
    };
    return CarroDAO;
}());
exports.CarroDAO = CarroDAO;
