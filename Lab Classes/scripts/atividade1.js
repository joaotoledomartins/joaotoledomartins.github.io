//Atividade 1
class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    apresentar(){
        return "Olá, meu nome é " + this.nome + ", tenho " + this.idade + " anos e sou " + this.sexo;
    }
};
class Aluno extends Pessoa{
    constructor(nome, idade, sexo, matricula, curso){
        super(nome, idade, sexo)
        this.matricula = matricula;
        this.curso = curso;
    }
    apresentar(){
        return "Olá, meu nome é " + this.nome + ", tenho " + this.idade + " anos e sou " + this.sexo + ". Meu curso é " + this.curso + " e minha matrícula é " + this.matricula;
    }
};
/* TESTES
    const joao = new Pessoa("João", 17, "Masculino");
    console.log(joao.nome);
    console.log(joao.idade);
    console.log(joao.sexo);
    console.log(joao.apresentar());
    const pedro = new Aluno("Pedro", 17, "Masculino", 157865, "INFO");
    console.log(pedro.nome);
    console.log(pedro.idade);
    console.log(pedro.sexo);
    console.log(pedro.matricula);
    console.log(pedro.curso);
    console.log(pedro.apresentar());
*/