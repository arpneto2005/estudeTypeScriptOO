import {DAOInterface} from './DAOInterface';
import {Pessoa} from './Pessoa';

export class PessoaDAO implements DAOInterface{
    nomeTabela: String = 'tb_pessoa';

    inserir(object: Pessoa): boolean{
        console.log('Resolvendo a lógica insert');
        return false;
    }
    atualizar(object: Pessoa): boolean{
        console.log('Resolvendo a lógica atualizar');
        return false;
    }
    remover(id: number): Pessoa{
        console.log('Resolvendo a lógica remover');
        return new Pessoa('', '');
    }
    selecionar(id: number): Pessoa{
        console.log('Resolvendo a lógica selecionar');
        return new Pessoa('', '');
    }
    selecionarTodos(): [Pessoa]{
        return [new Pessoa('', '')];
    }
}