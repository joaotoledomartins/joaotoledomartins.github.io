const botãoAdicionar = document.getElementById("bntAdicionar");
const botãoAtualizar = document.getElementById("bntAtualizar");
const botãoDelete = document.getElementById("bntDelete");

const resp = document.getElementById("resp");

const localStorageBooks = JSON.parse(localStorage.getItem('books')) !== null ? JSON.parse(localStorage.getItem('books')) : [];

class Biblioteca {
    constructor() {
        this.livros = [];
        this.carregarDados();
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        this.salvarDados();
    }

    listarLivros() {
        resp.innerHTML = "";
        this.livros.forEach((livro) => {
            resp.innerHTML += `<p>${livro.detalhes()}</p>`;
        });
    }

    atualizarLivro(id, titulo, autor, anoPublicacao) {
        this.livros.forEach((livro) => {
            if(livro.id == id) {
                livro.titulo = titulo;
                livro.autor = autor;
                livro.anoPublicacao = anoPublicacao;
            }
        });
        this.salvarDados();
    }

    removerLivro(id) {
        this.livros = this.livros.filter((livro) => livro.id !== id);
        this.salvarDados();
    }

    salvarDados() {
        localStorage.setItem('books', JSON.stringify(this.livros));
    }

    carregarDados() {
        localStorageBooks.forEach(element => {
            this.adicionarLivro(new Livro(element.titulo, element.autor, element.anoPublicacao, element.id));
        });
    }
}

class Livro {
    constructor(titulo, autor, anoPublicacao, id = Livro.gerarId()) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = true;
    }

    static gerarId() {
        return Math.floor(Math.random() * 10000);
    }

    detalhes() {
        return `${this.id} - Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}, tendo a disponiblidade como ${this.disponivel}`;
    }
}

function apagarInput() {
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("ID").value = "";
    document.getElementById("titulo2").value = "";
    document.getElementById("autor2").value = "";
    document.getElementById("ano2").value = "";
    document.getElementById("idDel").value = "";
}

const biblioteca = new Biblioteca();

botãoAdicionar.addEventListener("click", function () {
    alert("Livro Adicionado!");
    let livro = new Livro(document.getElementById("titulo").value, document.getElementById("autor").value, document.getElementById("ano").value);
    biblioteca.adicionarLivro(livro);
    biblioteca.listarLivros();
    apagarInput();
});

botãoAtualizar.addEventListener("click", function () {
    alert("Livro Atualizado!");
    const id = parseInt(document.getElementById("ID").value);
    const titulo = document.getElementById("titulo2").value;
    const autor = document.getElementById("autor2").value;
    const anoPublicacao = document.getElementById("ano2").value;
    
    biblioteca.atualizarLivro(id, titulo, autor, anoPublicacao);
    biblioteca.listarLivros();
    apagarInput();
});

botãoDelete.addEventListener("click", function () {
    alert("Livro Removido!");
    const id = parseInt(document.getElementById("idDel").value);
    biblioteca.removerLivro(id);
    biblioteca.listarLivros();
    apagarInput();
});
biblioteca.listarLivros();