"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Arquivo Criado Para Tester as Interfaces Criadas e o Inicio da Criação do Designer Patterns */
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
var concessionaria = new Concessionaria_1.Concessionaria('', []);
var pessoa = new Pessoa_1.Pessoa('', '');
var carro = new Carro_1.Carro('Hilux', 4);
var moto = new Moto_1.Moto();
carro.acelerar();
moto.acelerar();
console.log(carro);
console.log(moto);
/** Teste Interface */
console.log('Horário de Funcionamento: ' + concessionaria.fornecerHorarioDeFuncionamento());
/** Teste dos Arquivos DAO */
// ConcessionariaDAO
/*
import {ConcessionariaDAO} from './ConcessionariaDAO'
import { PessoaDAO } from './PessoaDAO';
import { CarroDAO } from './CarroDAO';
import { MotoDAO } from './MotoDAO';
*/
//let dao: ConcessionariaDAO = new ConcessionariaDAO();
//dao.inserir(concessionaria);
// PessoaDAO
//let dao2: PessoaDAO = new PessoaDAO();
//dao2.atualizar(pessoa);
// Carro
//let dao3: CarroDAO = new CarroDAO();
//dao3.inserir(carro);
// Moto
//let dao4 : MotoDAO = new MotoDAO();
//dao4.atualizar(moto);
/** Uso de Classes Genéricas */
var DAO_1 = require("./DAO");
var daoConcessionaria = new DAO_1.DAO('', []);
var daoPessoa = new DAO_1.DAO('', '');
var daoCarro = new DAO_1.DAO();
var daoMoto = new DAO_1.DAO();
daoConcessionaria.inserir(concessionaria);
daoPessoa.atualizar(pessoa);
daoCarro.inserir(carro);
daoMoto.atualizar(moto);
