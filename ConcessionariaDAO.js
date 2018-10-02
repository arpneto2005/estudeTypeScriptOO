"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDAO = /** @class */ (function () {
    function ConcessionariaDAO() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDAO.prototype.inserir = function (object) {
        console.log('Resolvendo a lógica insert');
        return false;
    };
    ConcessionariaDAO.prototype.atualizar = function (object) {
        console.log('Resolvendo a lógica atualizar');
        return false;
    };
    ConcessionariaDAO.prototype.remover = function (id) {
        console.log('Resolvendo a lógica remover');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDAO.prototype.selecionar = function (id) {
        console.log('Resolvendo a lógica selecionar');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDAO.prototype.selecionarTodos = function () {
        return [new Concessionaria_1.Concessionaria('', [])];
    };
    return ConcessionariaDAO;
}());
exports.ConcessionariaDAO = ConcessionariaDAO;
