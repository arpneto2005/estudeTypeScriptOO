import {DAOInterface} from './DAOInterface';
import {Carro} from './Carro';

export class CarroDAO implements DAOInterface{
    nomeTabela: String = 'tb_carro';

    inserir(object: Carro): boolean{
        console.log('Resolvendo a lógica insert');
        return false;
    }
    atualizar(object: Carro): boolean{
        console.log('Resolvendo a lógica atualizar');
        return false;
    }
    remover(id: number): Carro{
        console.log('Resolvendo a lógica remover');
        return new Carro('Cobalt', 4);
    }
    selecionar(id: number): Carro{
        console.log('Resolvendo a lógica selecionar');
        return new Carro('Cobalt', 4);
    }
    selecionarTodos(): [Carro]{
        return [new Carro('Cobalt', 4)];
    }
}