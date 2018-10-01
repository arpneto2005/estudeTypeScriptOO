/** Criação da Classe Pessoa */
import {Carro} from './Carro'
export class Pessoa{
    private nome: String;
    private carroPreferido: String;
    private carro: Carro;

    constructor(nome: String, carroPreferido: String){
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome(): String{
        return this.nome;
    }

    public dizerCarroPreferido(): String{
        return this.carroPreferido;
    }

    public comprarCarro(carro: Carro): void{
        this.carro = carro;
    }

    public dizerCarroQueTem(): Carro{
        return this.carro;
    }
}
