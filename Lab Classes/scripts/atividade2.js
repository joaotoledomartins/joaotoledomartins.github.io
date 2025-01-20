//Atividade 2
class ContaBancaria{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor){
        let saldoNovo = this.saldo + valor;
        this.saldo = saldoNovo;
    }
    sacar(valor){
        if(valor < this.saldo || valor == this.saldo){
            let saldoNovo = this.saldo - valor;
            this.saldo = saldoNovo;
        }
        else{
            console.error("Erro! Saldo insuficiente!");
            
        }
    }
    mostrarSaldo(){
        return "O saldo da sua conta é de " + this.saldo;
    }
};

class ContaCorrente extends ContaBancaria{
    constructor(titular, saldo, limite){
        super(titular, saldo)
        this.limite = limite;
    }
    sacar(valor){
        if(valor <= this.limite){
            if(valor <= this.saldo){
                let saldoNovo = this.saldo - valor;
                this.saldo = saldoNovo;
            }
            else{
                console.error("Erro! Saldo insuficiente!");
                
            }
        }
        else{
            console.error("Erro! Limite ultrapassado!");
        }
    }
    mostrarLimite(){
        return "O limite da sua conta é de " + this.limite;
    }
}
/* TESTES
    const contaBancariaJoao = new ContaBancaria("João", 400);
    const contaCorrenteJoao = new ContaCorrente("João", 500, 250);
*/