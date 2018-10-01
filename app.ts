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

/** Criando Lista de Carros */
/** Instâncias */
let carroA = new Carro('Land Hover', 4);
let carroB = new Carro('Veloster', 3);
let carroC = new Carro('Jetta', 4);
let carroD = new Carro('Renegate', 4);

/** Lista de Carros da Concesionaria */
let listaCarros: Carro[] = [carroA, carroB, carroC, carroD];

let concessionaria = new Concessionaria('Avenida Heraclito Graça', listaCarros);

let cliente = new Pessoa('Angelo', 'Renegate');

/** Exibir LIsta de Carros */
//console.log(concessionaria.mostrarListaCarro());

/** Exibir Carro Favorito */
//console.log('Carro Preferido do Cliente '+ cliente.dizerNome() + ' é: ' + cliente.dizerCarroPreferido());

/** Tratando Informações */

concessionaria.mostrarListaCarro().map((carro: Carro) => {
    //console.log(carro);
    if(carro['modelo'] == cliente.dizerCarroPreferido() ){
        console.log('Carro apos compra: ' + carro);
        cliente.comprarCarro(carro);
    }
});

//console.log('Cliente apos a compra: ' + cliente.dizerCarroQueTem());