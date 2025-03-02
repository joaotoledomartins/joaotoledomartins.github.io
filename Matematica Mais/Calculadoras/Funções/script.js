let respostaFinal = document.getElementById('resp');

const tipo = document.getElementById('tipo');
const informacoes = document.getElementById('CaixaCoeficienteC');
const funcao = document.getElementById('funcao');
const resp = document.getElementById('resp')
const enviar = document.getElementById('enviar')

const a = document.getElementById('coefcienteA');
const b = document.getElementById('coefcienteB');
const c = document.getElementById('coefcienteC');

let xablau = "xablau";

function trocarplaceHolder(){
    if(tipo.value == "quadratica"){
        funcao.placeholder = 'Ex.: x² - 5x + 6';
    }
    else{
        funcao.placeholder = 'Ex.: x - 5';
    }
}

function definirFuncao(){
    if(tipo.value == "quadratica"){
        informacoes.innerHTML = `<div class="conjunto">
                                <label  class='label' for="coeficienteC">Digite o coeficiente c:</label>
                                <br/>
                                <input type="number" name="coeficienteC" id="coeficienteC" placeholder="Ex.: 6">
                                </div>`;
        trocarplaceHolder();
    }
    else{
        informacoes.innerHTML = "";
        trocarplaceHolder();
    }
}

tipo.addEventListener('change', definirFuncao());



enviar.addEventListener('click', function(){
    if(tipo.value = "quadratica"){
        resp.innerHTML = `<p class='txt-resp'>Função: ${xablau}</p>
    <p class='txt-resp'>As raízes da função são: ${xablau} e ${xablau}</p>
    <p class='txt-resp'>A Soma e o produto das raízes são respectivamente: ${xablau} e ${xablau}</p>
    <p class='txt-resp'>O vértice da função é: ${xablau}</p>
    <p class='txt-resp'>O valor inicial da função é: ${xablau}</p>
    <p class='txt-resp'>A função é postiva em: ${xablau}</p>
    <p class='txt-resp'>A função é negaiva em: ${xablau}</p>`
    }
    if(tipo.value = "afim"){
        resp.innerHTML = `<p class='txt-resp'>Função: ${xablau}</p>
    <p class='txt-resp'>A raiz da função é: ${xablau}</p>
    <p class='txt-resp'>O valor inicial da função é: ${xablau}</p>
    <p class='txt-resp'>A função é postiva em: ${xablau}</p>
    <p class='txt-resp'>A função é negaiva em: ${xablau}</p>`
    }

})