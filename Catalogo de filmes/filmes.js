// Criando um novo objeto XMLHttpRequest

const xhttp = new XMLHttpRequest();
const listaFilmes = (dados) => {
    let info = ``;
    let ul = ``;
    dados.forEach(dado => {
        info += `<li>${dado}</li>`;
    });
    ul = info;
    return ul;
}
const títulosSemelhantes = (dados, titulos_s) =>{
    let titles = '';
    titulos_s.forEach(dado => {
        if((dado - 1) in dados){
            let filme = dados[(dado-1)].titulo;
            titles += `
                <li>
                    ${filme}
                </li>`;
        }
    });
    return titles;
}
const adicionarFilmeDOM = (img, nome, generos, elenco, idade, descricao, titulos_sem, opinioes, filmes) =>{
    const cardGenero = listaFilmes(generos);
    const cardElenco = listaFilmes(elenco);
    let classIndicativa = "";
    if(idade >= 0 && idade <= 14) {
        classIndicativa = "classe-kid";
    };
    if(idade >= 15 && idade <= 17) {
        classIndicativa = "classe-teen";
    };
    if(idade >= 18) {
        classIndicativa = "classe-adult";
    };
    const filme_apresentacao = `
                <div class="img-container">
                    <img src="${img}" alt="Imagem do filme ${nome} ">
                    <div class="card_infos">
                        <h4 class="nome">${nome}</h4>
                        <p class="faixa-etaria ${classIndicativa}">Recomendado para ${idade} anos</p>
                        <div class="generos-lista">
                            <ul>
                                ${cardGenero}
                            </ul>
                        </div>

                        <div class="resumo">
                            <div class="atores">
                                Elenco:
                                <ul>
                                    ${cardElenco}
                                </ul>
                            </div>
                            <div>
                                <p class="descricao-final">Descrição:</p><br/>${descricao}</p><br/>
                            </div>
                        <div>
                        <ul class="titulos_semelhantes">Títulos semelhantes:${títulosSemelhantes(filmes, titulos_sem)}</ul>
                    </div>
                </div>`;
    let filmeOpnioes = ``;
    let filmeNotas = ``;
    opinioes.forEach(opiniao => {
        filmeNotas = ``;
        for(let i=0; i < opiniao.rating; i++){
            filmeNotas += `<img src="./imagens/estrela.png"></img>`;
        }
        let filmeComentarios = `<div class='comentario'>${opiniao.descricao}</div>`;
        let filmeOpnião = `
                <div class="opiniao">
                    Nota: ${opiniao.rating}<br>
                    Comentário: ${filmeComentarios}<br>
                </div>`;
        filmeOpnioes += filmeOpnião;
    });
    return `<div class="card-item">
                ${filme_apresentacao}
                <div class="opinioes">
                    ${filmeOpnioes}
                </div>
            </div>`;
}

function filmeCatalago(){
    const url_filmes = 'https://rafaelescalfoni.github.io/desenv_web/filmes.json';
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status==200){
                // console.log(JSON.parse(this.responseText));
                const filmes = JSON.parse(this.response);

                filmes.forEach(filme => {
                    document.querySelector("#catalogo").innerHTML += adicionarFilmeDOM(filme.figura, filme.titulo, filme.generos, filme.elenco, filme.classificacao, filme.resumo, filme.titulosSemelhantes, filme.opinioes, filmes);
                });
            }
            else{
                alert("Erro na requisição");
            }
        }
    }
    xhttp.open("GET", url_filmes);
    xhttp.send();
}
filmeCatalago();