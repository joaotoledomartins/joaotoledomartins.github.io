//Atividade 10
class Carro10{
    constructor(placa, modelo){
        this.placa = placa;
        this.modelo = modelo;
    }
    descrever(){
        return "PLACA: " + this.placa + ", MODELO: " + this.modelo;
    }
    
}

class Estacionamento{
    constructor(vagasTotais){
        this.vagasTotais = vagasTotais;
        this.carros = [];
    }
    adicionarCarro(carro){
        if(this.carros.length < this.vagasTotais){
            let tamanhoEstacionamento = this.carros.length;
            this.carros[tamanhoEstacionamento] = carro;
        }
        else{
            console.error("Erro! Vagas insuficientes")
        }
    }
    removerCarro(placa){
        this.carros = this.carros.filter(function(elem){
            if(elem.placa != placa){
                return elem;
            }
        });
    }
    listarCarros(){
        let tamanhoEstacionamento = this.carros.length;
        let estacionamento = "";
        for(i = 0; i < tamanhoEstacionamento; i++){
            estacionamento = estacionamento + this.carros[i] + ", ";
        }
        return estacionamento;
    }
}
    