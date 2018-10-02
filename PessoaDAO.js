"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDAO.prototype.inserir = function (object) {
        console.log('Resolvendo a lógica insert');
        return false;
    };
    PessoaDAO.prototype.atualizar = function (object) {
        console.log('Resolvendo a lógica atualizar');
        return false;
    };
    PessoaDAO.prototype.remover = function (id) {
        console.log('Resolvendo a lógica remover');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDAO.prototype.selecionar = function (id) {
        console.log('Resolvendo a lógica selecionar');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDAO.prototype.selecionarTodos = function () {
        return [new Pessoa_1.Pessoa('', '')];
    };
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
