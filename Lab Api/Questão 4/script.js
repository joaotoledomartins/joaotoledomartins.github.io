class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
        this.emprestimos = 0;
    }

    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            this.emprestimos++;
        } else {
            console.log(`O livro "${this.titulo}" já está emprestado.`);
        }
    }

    devolver() {
        this.disponivel = true;
    }
}

// Array para armazenar os livros
const biblioteca = [];

const botaoAdicionar = document.getElementById("bntAdd");
const botaoEmprestimo = document.getElementById("bntEmpre");
const resp = document.getElementById("resp");

function listaDisponiveis () {
    document.getElementById("disponiveis").innerHTML = "";

    let disponivel = biblioteca.filter(livro => {
        return livro.disponivel == true;
    })

    disponivel.forEach(livro => {
        document.getElementById("disponiveis").innerHTML += `<p>${livro.titulo}, ${livro.autor}. Emprestado ${livro.emprestimos} vezes. Disponivel: ${livro.disponivel}`;
    });
}

function listaEmprestados () {
    document.getElementById("emprestimos").innerHTML = "";
    
    let titulosEmprestados = biblioteca.filter(livro => {
        return livro.disponivel == false;
    })

    titulosEmprestados = titulosEmprestados.map(livro => {
        return livro.titulo;
    })

    titulosEmprestados.forEach(livro => {
        document.getElementById("emprestimos").innerHTML += `<p>${livro}</p>`;
    });
}

// Função para adicionar um livro
function adicionarLivro() {
    const titulo = document.getElementById("títuloDigitado").value;
    const autor = document.getElementById("autorDigitado").value;

    if (titulo && autor) {
        const livro = new Livro(titulo, autor);
        biblioteca.push(livro);
        resp.innerHTML = `<p>Livro "${titulo}" de ${autor} foi adicionado à biblioteca.</p>`;
    } else {
        resp.innerHTML = `<p>Por favor, preencha todos os campos para adicionar um livro.</p>`;
    }

    document.getElementById("títuloDigitado").value = "";
    document.getElementById("autorDigitado").value = "";

    console.log(biblioteca);

    listaDisponiveis();
    listaEmprestados();
}

// Função para emprestar um livro
function emprestarLivro() {
    let titulo = document.getElementById("títuloDigitado").value;
    if (titulo != "") {
        const livro = biblioteca.find(livro => livro.titulo === titulo);
        if (livro) {
            if (livro.disponivel) {
                livro.emprestar();
                resp.innerHTML = `<p>O livro "${titulo}" foi emprestado com sucesso.</p>`;
            } else {
                resp.innerHTML = `<p>O livro "${titulo}" já está emprestado.</p>`;
            }
        } else {
            resp.innerHTML = `<p>O livro "${titulo}" não foi encontrado na biblioteca.</p>`;
        }
    } else {
        resp.innerHTML = `<p>Por favor, insira o título do livro para realizar o empréstimo.</p>`;
    }

    document.getElementById("títuloDigitado").value = "";


    listaDisponiveis();
    listaEmprestados();
}

botaoAdicionar.addEventListener("click", adicionarLivro);
botaoEmprestimo.addEventListener("click", emprestarLivro);