"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO = /** @class */ (function () {
    function DAO() {
        this.nomeTabela = '';
    }
    DAO.prototype.inserir = function (object) {
        console.log('Resolvendo a lógica insert');
        return false;
    };
    DAO.prototype.atualizar = function (object) {
        console.log('Resolvendo a lógica atualizar');
        return false;
    };
    DAO.prototype.remover = function (id) {
        console.log('Resolvendo a lógica remover');
        return new Object();
    };
    DAO.prototype.selecionar = function (id) {
        console.log('Resolvendo a lógica selecionar');
        return new Object();
    };
    DAO.prototype.selecionarTodos = function () {
        return [new Object()];
    };
    return DAO;
}());
exports.DAO = DAO;
