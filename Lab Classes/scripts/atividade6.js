//Atividade 6
class Livro{
    constructor(titulo, autor, disponivel){
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }
    emprestar(){
        this.disponivel = 0;
    }
    devolver(){
        this.disponivel = 1;
    }
    status(){
        let statusLivro;
        if(this.disponivel == 1){
            statusLivro = "disponível";
        }
        else
        {
            statusLivro = "emprestado";
        }
        return "O título do livro é " + this.titulo + " e está " + statusLivro;
    }
}

class Biblioteca extends Livro{
    constructor(titulo, autor, disponivel){
        super(titulo, autor, disponivel)
    }
    listarLivros(){
        
    }
}

let livroDep = new Livro("Ola", "João", 1);
console.log(livroDep.status());
livroDep.emprestar();
console.log(livroDep.status());

/*
    Extra:
    Crie uma classe Biblioteca que gerencie uma coleção de livros.
    Adicione métodos para listar os livros disponíveis e buscar um livro pelo título.
*/