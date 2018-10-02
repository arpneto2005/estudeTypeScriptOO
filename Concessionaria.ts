/** Criação da Classe Consessionaria */
import {Carro} from './Carro'
import {ConcessionariaInterface} from './ConcessionariaInterface'

export class Concessionaria implements ConcessionariaInterface{
    private endereco: String;
    private listaCarro: Array<Carro>;

    constructor(endereco: String, listaCarro: Array<Carro>){
        this.endereco = endereco;
        this.listaCarro = listaCarro;
    }

    public fornecerEndereco(): String {
        return this.endereco;
    }

    public mostrarListaCarro(): Array<Carro>{
        return this.listaCarro;
    }

    public fornecerHorarioDeFuncionamento(): String{
        return 'Segunda à Sexta das 8:00 às 18:00';
    }
}