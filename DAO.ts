import { DAOInterface } from "./DAOInterface";

export class DAO implements DAOInterface<T>{
    nomeTabela: String = '';

    inserir(object: T): boolean{
        console.log('Resolvendo a lógica insert');
        return false;
    }
    atualizar(object: T): boolean{
        console.log('Resolvendo a lógica atualizar');
        return false;
    }
    remover(id: number): T{
        console.log('Resolvendo a lógica remover');
        return new Object();
    }
    selecionar(id: number): T{
        console.log('Resolvendo a lógica selecionar');
        return new Object();
    }
    selecionarTodos(): [T]{
        return [new Object()];
    }
}