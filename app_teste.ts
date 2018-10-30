/** Arquivo Criado Para Tester as Interfaces Criadas e o Inicio da Criação do Designer Patterns */
import {Carro} from './Carro'
import {Moto} from './Moto'
import {Concessionaria} from './Concessionaria'
import { Pessoa } from './Pessoa';

let concessionaria = new Concessionaria('', []);
let pessoa: Pessoa = new Pessoa('', '');
let carro = new Carro('Hilux', 4);
let moto = new Moto();

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
import {DAO} from './DAO'

let daoConcessionaria: DAO<Concessionaria> = new DAO<Concessionaria>('', []);
let daoPessoa: DAO<Pessoa> = new DAO<Pessoa>('', '');
let daoCarro: DAO<Carro> = new DAO<Carro>();
let daoMoto: DAO<Moto> = new DAO<Moto>();

daoConcessionaria.inserir(concessionaria);
daoPessoa.atualizar(pessoa);
daoCarro.inserir(carro);
daoMoto.atualizar(moto);