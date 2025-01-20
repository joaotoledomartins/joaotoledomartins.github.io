//Atividade 5
class Funcionario{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }
    aumentarSalario(percentual){
        let aumentoNoSalario = (this.salario/100) * percentual;
        this.salario = this.salario + aumentoNoSalario;

    }
    mostrarInformacoes(){
        return "O nome do funcionário é " + this.nome + " e o seu salário é de R$" + this.salario;
    }
}

class Gerente extends Funcionario{
    constructor(nome, salario, departamento){
        super(nome, salario)
        this.departamento = departamento;
    }
    mostrarInformacoes(){
        return "O nome do funcionário é " + this.nome + ", o seu salário é de R$" + this.salario + " e o departamento " + this.departamento;
    }
}

class Estagiario extends Funcionario{
    constructor(nome, salario){
        super(nome, salario)
    }
    aumentarSalario(percentual){
        if(percentual < 10){
            let aumentoNoSalario = (this.salario/100) * percentual;
            this.salario = this.salario + aumentoNoSalario;
        }
        else{
            console.error("Erro! Funcionário não pode ter um aumento maior do que 10%");
        }

    }
}

/* TESTES
    let estagiarioJoao = new Estagiario("João", 100);
    estagiarioJoao.aumentarSalario(40);
    console.log(estagiarioJoao.mostrarInformacoes());
*/