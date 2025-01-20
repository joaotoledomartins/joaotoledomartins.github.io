//Atividade 7
class Jogador{
    constructor(nome, nivel, experiencia){
        this.nome = nome;
        this.nivel = nivel;
        this.experiencia = experiencia;
    }
    ganharExperiencia(pontos){
        let novaXp = this.experiencia + pontos;
        this.experiencia = novaXp;
    }
    subirdeNivel(){
        if(this.experiencia >= 100){
            this.experiencia = this.experiencia - 100;
            this.nivel = this.nivel + 1;
        }
    }
}

/*
    Extra:
    forca (número). Aumente a forca quando o jogador subir de nível.
*/