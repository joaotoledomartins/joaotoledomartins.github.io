const url = `https://v6.exchangerate-api.com/v6/af8d670acc715021dc0ea030/latest/USD`;
const lista = document.querySelector("#moeda-origem");
const btn = document.querySelector("#btn");
const resp = document.querySelector("#resp");

async function carregarMoedas(url, lista){
  let requisicao = await fetch(url);
  requisicao = await requisicao.json();
  let taxa_conversao = requisicao.conversion_rates
  for (const taxa in taxa_conversao) {
    let opcao = `<option value="${taxa}" id="${taxa}">${taxa}</option>`;
    lista.innerHTML += opcao;
  }
}
carregarMoedas(url,lista);


btn.addEventListener('click', async () =>{
  let requisicao = await fetch(url);
  requisicao = await requisicao.json();
  let taxa_conversao = requisicao.conversion_rates
  let fator = taxa_conversao[document.querySelector("#moeda-origem").value]
  const valorDigitado = document.querySelector("#valorDigitado").value;
  let result = valorDigitado * fator;
  console.log(fator);
  resp.innerHTML = result;
});