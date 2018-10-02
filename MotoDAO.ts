import {DAOInterface} from './DAOInterface';
import {Moto} from './Moto';

export class MotoDAO implements DAOInterface{
    nomeTabela: String = 'tb_moto';

    inserir(object: Moto): boolean{
        console.log('Resolvendo a lógica insert');
        return false;
    }
    atualizar(object: Moto): boolean{
        console.log('Resolvendo a lógica atualizar');
        return false;
    }
    remover(id: number): Moto{
        console.log('Resolvendo a lógica remover');
        return new Moto();
    }
    selecionar(id: number): Moto{
        console.log('Resolvendo a lógica selecionar');
        return new Moto();
    }
    selecionarTodos(): [Moto]{
        return [new Moto()];
    }
}