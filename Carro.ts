import {Veiculo} from './Veiculo'

export class Carro extends Veiculo {
    private numPortas: number;
    
    constructor(modelo: String, numProtas: number){
        super();
        this.modelo = modelo;
        this.numPortas = numProtas;
    }
    
}