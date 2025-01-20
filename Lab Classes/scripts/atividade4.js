//Atividade 4
class Veiculo{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    descrever(){
        return "Marca: " + this.marca + ", MODELO: " + this.modelo + ", Ano: " + this.ano;
    }
};

class Carro extends Veiculo{
    constructor(marca, modelo, ano, portas){
        super(marca, modelo, ano)
        this.portas = portas;
    }
    descrever(){
        return "Marca: " + this.marca + ", MODELO: " + this.modelo + ", Ano: " + this.ano + ", Portas: " + this.portas;
    }
}

class Moto extends Veiculo{
    constructor(marca, modelo, ano, cilindradas){
        super(marca, modelo, ano)
        this.cilindradas = cilindradas;
    }
    descrever(){
        return "Marca: " + this.marca + ", MODELO: " + this.modelo + ", Ano: " + this.ano + ", Cilindradas: " + this.cilindradas;
    }
}

/* TESTES
    let veiculoJoao = new Veiculo("Ford", "Fiesta", "2020");
    console.log(veiculoJoao.descrever());
    let carroJoao = new Carro("Ford", "Fiesta", "2020", "4");
    console.log(carroJoao.descrever());
    let motoJoao = new Moto("Ford", "Fiesta", "2020", "20");
    console.log(motoJoao.descrever());
*/