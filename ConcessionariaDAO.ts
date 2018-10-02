import {DAOInterface} from './DAOInterface';
import {Concessionaria} from './Concessionaria';

export class ConcessionariaDAO implements DAOInterface{
    nomeTabela: String = 'tb_concessionaria';

    inserir(object: Concessionaria): boolean{
        console.log('Resolvendo a lógica insert');
        return false;
    }
    atualizar(object: Concessionaria): boolean{
        console.log('Resolvendo a lógica atualizar');
        return false;
    }
    remover(id: number): Concessionaria{
        console.log('Resolvendo a lógica remover');
        return new Concessionaria('', []);
    }
    selecionar(id: number): Concessionaria{
        console.log('Resolvendo a lógica selecionar');
        return new Concessionaria('', []);
    }
    selecionarTodos(): [Concessionaria]{
        return [new Concessionaria('', [])];
    }
}