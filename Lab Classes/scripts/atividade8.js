//Atividade 8
class Turma{
    constructor(curso){
        this.curso = curso;
        this.alunos = [];
    }
    adicionarAluno(nome){
        let tamanhoTurma = this.alunos.length;
        this.alunos[tamanhoTurma] = nome;
    }
    removerAluno(nome){
        this.alunos = this.alunos.filter(function(aluno){
            if(aluno != nome){
                return aluno;
            }
        });
    }
    listarAlunos(){
        let tamanhoTurma = this.alunos.length;
        let turma = "";
        for(i = 0; i < tamanhoTurma; i++){
            turma = turma + this.alunos[i] + ", ";
        }
        return turma;
    }
    
}

class TurmaOnline extends Turma{
    constructor(curso, linkDeAcesso){
        super(curso)
        this.linkDeAcesso = linkDeAcesso;
    }
    listarAlunos(){
        let tamanhoTurma = this.alunos.length;
        let turma = "";
        for(i = 0; i < tamanhoTurma; i++){
            turma = turma + this.alunos[i] + ", ";
        }
        turma = turma + ". Link de Acesso: " + this.linkDeAcesso;
        return turma;
    }
    
}