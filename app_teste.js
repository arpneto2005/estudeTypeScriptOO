"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Arquivo Criado Para Tester as Interfaces Criadas e o Inicio da Criação do Designer Patterns */
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var Concessionaria_1 = require("./Concessionaria");
var carro = new Carro_1.Carro('Hilux', 4);
var moto = new Moto_1.Moto();
carro.acelerar();
moto.acelerar();
console.log(carro);
console.log(moto);
/** Teste Interface */
var concessionaria = new Concessionaria_1.Concessionaria('', []);
console.log('Horário de Funcionamento: ' + concessionaria.fornecerHorarioDeFuncionamento());
/** Teste dos Arquivos DAO */
// ConcessionariaDAO
var ConcessionariaDAO_1 = require("./ConcessionariaDAO");
var PessoaDAO_1 = require("./PessoaDAO");
var Pessoa_1 = require("./Pessoa");
var CarroDAO_1 = require("./CarroDAO");
var MotoDAO_1 = require("./MotoDAO");
var dao = new ConcessionariaDAO_1.ConcessionariaDAO();
dao.inserir(concessionaria);
// PessoaDAO
var dao2 = new PessoaDAO_1.PessoaDAO();
var pessoa = new Pessoa_1.Pessoa('', '');
dao2.atualizar(pessoa);
// Carro
var dao3 = new CarroDAO_1.CarroDAO();
dao3.inserir(carro);
// Moto
var dao4 = new MotoDAO_1.MotoDAO();
dao4.atualizar(moto);
