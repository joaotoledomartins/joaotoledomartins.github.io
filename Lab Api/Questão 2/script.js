const url = `https://www.omdbapi.com/?apikey=eb80acdf&t=`;
const btn = document.querySelector("#btn");
const resp = document.querySelector("#resp");

async function carregarFilme(url){
  let requisicao = await fetch(url);
  requisicao = await requisicao.json();
  let tituloFilme = requisicao["Title"];
  let diretorFilme = requisicao["Director"];
  let anoFilme = requisicao["Year"];
  let arrayFilmes = [tituloFilme, diretorFilme, anoFilme];
  return arrayFilmes;
}


btn.addEventListener('click', async () =>{
    const nomeFilme = document.querySelector("#pesquisa").value;
    let urlFilme = url + nomeFilme;
    let resposta = await carregarFilme(urlFilme);
    resp.innerHTML = `O título do filme é: ${resposta[0]}, o seu diretor é ${resposta[1]} e seu ano de lançamento é ${resposta[2]}`;
    console.log(resposta);

});