/**  Criação de Classes */
export class Carro {
    private modelo: String;
    private numProtas: number;
    private velocidade: number = 0;

    constructor(modelo: String, numProtas: number){
        this.modelo = modelo;
        this.numProtas = numProtas;
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number{
        return this.velocidade;
    }

}