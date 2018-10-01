let ola = (nome: String) => {
    console.log("Olá " + nome);
}
ola("Angelo");

import {Carro} from './Carro';
import {Pessoa} from './Pessoa';
import {Concessionaria} from './Concessionaria';

/** Criando Lista de Carros */
/** Instâncias */
let carroA = new Carro('Land Hover', 4);
let carroB = new Carro('Veloster', 3);
let carroC = new Carro('Jetta', 4);
let carroD = new Carro('Renegate', 4);

/** Lista de Carros da Concesionaria */
let listaCarros: Carro[] = [carroA, carroB, carroC, carroD];

let concessionaria = new Concessionaria('Avenida Heraclito Graça', listaCarros);

let cliente = new Pessoa('Angelo', 'Renegate');

/** Exibir LIsta de Carros */
//console.log(concessionaria.mostrarListaCarro());

/** Exibir Carro Favorito */
//console.log('Carro Preferido do Cliente '+ cliente.dizerNome() + ' é: ' + cliente.dizerCarroPreferido());

/** Tratando Informações */
concessionaria.mostrarListaCarro().map((carro: Carro) => {
    //console.log(carro);
    if(carro['modelo'] == cliente.dizerCarroPreferido() ){
        console.log('Carro apos compra: ' + carro);
        cliente.comprarCarro(carro);
    }
});

//console.log('Cliente apos a compra: ' + cliente.dizerCarroQueTem());