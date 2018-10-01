/** Criação da Classe Consessionaria */
import {Carro} from './Carro'
export class Concessionaria{
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
}