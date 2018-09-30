let ola = (nome: String) => {
    console.log("Olá " + nome);
}
//ola("Angelo");

/**  Criação de Classes */
class Carro {
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

class Concessionaria{
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

class Pessoa{
    private nome: String;
    private carroPreferido: String;
    private carro: any;

    constructor(nome: String, carroPreferido: String){
        this.nome = nome, this.carroPreferido = carroPreferido;
    }

    public dizerNome(): String{
        return this.nome;
    }

    public dizerCarroPreferido(): String{
        return this.carroPreferido;
    }

    public comprarCarro(carro: any): void{

    }

    public dizerCorroQueTem(): any{
        return this.carro;
    }
}

/** Criando Lista de Carros */
let carroA = new Carro('Land Hover', 4);
let carroB = new Carro('Veloster', 3);
let carroC = new Carro('Jetta', 4);

/** Lista de Carros Concesionaria */
let listaCarros: Carro[] = [carroA, carroB, carroC];

/** Criação de Pessoas  */
let pessoa = new Pessoa('Angelo', 'Veloster');
console.log(pessoa.dizerCarroPreferido());

let concessionaria = new Concessionaria('Avenida Heraclito Graça', listaCarros);

/** Exibir LIsta de Carros */
console.log(concessionaria.mostrarListaCarro());