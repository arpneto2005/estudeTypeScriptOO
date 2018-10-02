/** Arquivo Criado Para Tester as Interfaces Criadas e o Inicio da Criação do Designer Patterns */
import {Carro} from './Carro'
import {Moto} from './Moto'
import {Concessionaria} from './Concessionaria'

let carro = new Carro('Hilux', 4);
let moto = new Moto();

carro.acelerar();
moto.acelerar();

console.log(carro);
console.log(moto);,

/** Teste Interface */
let concessionaria = new Concessionaria('', []);

console.log('Horário de Funcionamento: ' + concessionaria.fornecerHorarioDeFuncionamento());

/** Teste dos Arquivos DAO */
// ConcessionariaDAO
import {ConcessionariaDAO} from './ConcessionariaDAO'
import { PessoaDAO } from './PessoaDAO';
import { Pessoa } from './Pessoa';
import { CarroDAO } from './CarroDAO';
import { MotoDAO } from './MotoDAO';

let dao: ConcessionariaDAO = new ConcessionariaDAO();
dao.inserir(concessionaria);

// PessoaDAO
let dao2: PessoaDAO = new PessoaDAO();
let pessoa: Pessoa = new Pessoa('', '');
dao2.atualizar(pessoa);

// Carro
let dao3: CarroDAO = new CarroDAO();
dao3.inserir(carro);

// Moto
let dao4 : MotoDAO = new MotoDAO();
dao4.atualizar(moto);