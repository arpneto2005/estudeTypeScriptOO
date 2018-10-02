"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = require("./Moto");
var MotoDAO = /** @class */ (function () {
    function MotoDAO() {
        this.nomeTabela = 'tb_moto';
    }
    MotoDAO.prototype.inserir = function (object) {
        console.log('Resolvendo a lógica insert');
        return false;
    };
    MotoDAO.prototype.atualizar = function (object) {
        console.log('Resolvendo a lógica atualizar');
        return false;
    };
    MotoDAO.prototype.remover = function (id) {
        console.log('Resolvendo a lógica remover');
        return new Moto_1.Moto();
    };
    MotoDAO.prototype.selecionar = function (id) {
        console.log('Resolvendo a lógica selecionar');
        return new Moto_1.Moto();
    };
    MotoDAO.prototype.selecionarTodos = function () {
        return [new Moto_1.Moto()];
    };
    return MotoDAO;
}());
exports.MotoDAO = MotoDAO;
