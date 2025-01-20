//Atividade 9
class Tarefa{
    constructor(descricao, concluida){
        this.descricao = descricao;
        this.concluida = concluida;
    }
    marcarConcluida(){
        this.concluida = 1;
    }
    descrever(){
        let statusTarefa;
        if(this.concluida == 1){
            statusTarefa = "concluída";
        }
        else
        {
            statusTarefa = "não concluída";
        }
        return this.descricao + ". O status da tarefa: " + statusTarefa;
    }
    
}
/*
    Extra:
    Crie uma classe ListaDeTarefas para gerenciar um conjunto de objetos Tarefa.
    Adicione métodos para:
    Adicionar uma tarefa.
    Listar todas as tarefas concluídas
*/