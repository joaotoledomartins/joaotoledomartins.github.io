// DECLARÇÃO DE VARIÁVEIS
const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=num]');
const operacoes = document.querySelectorAll('[id*=operacao]');
const igual = document.getElementById('igual');
const apagarDisplay = document.getElementById('apagarDisplay');
const apagarTudo = document.getElementById('apagarTudo');
const voltar = document.getElementById('voltar');
const maisMenos = document.getElementById('maisMenos');
const virgula = document.getElementById('virgula');
const caixaOperador = document.getElementById('caixaOperador');

let xablau = "Xablau";

let numeroNovo = true;
let operador;
let numeroAnterior;

function atualizarDisplay(numero){
    if(numeroNovo){
        display.textContent = numero.toLocaleString('BR');
        numeroNovo = false;   
    }
    else{
        display.textContent += numero;
    }
}

function operacaoPendente(){
    if(operador == undefined){
        return false;
    }
    else{
        return true;
    }
}

function calcular(){
    if(operacaoPendente()){
        const numeroAtual = parseFloat(display.textContent.replace(',','.'));
        numeroNovo = true;
        switch(operador){
            case '+':
                atualizarDisplay(numeroAnterior + numeroAtual);
                break;
            case '-':
                atualizarDisplay(numeroAnterior - numeroAtual);
                break;
            case '×':
                atualizarDisplay(numeroAnterior * numeroAtual);
                break;
            case '÷':
                atualizarDisplay(numeroAnterior / numeroAtual);
                break;
        }
    }
}


function inserirNumero(evento){
    atualizarDisplay(evento.target.textContent); //Donde o número foi clicado, pegue o seu conteúdo, ou seja, o próprio número, e atualize o display
}



function selecionarOperacao(evento){
    if(!numeroNovo){
        calcular();
        operador = evento.target.textContent;
        caixaOperador.innerHTML = operador;
        numeroNovo = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent.replace(',','.'));
    }
}

numeros.forEach(numero => numero.addEventListener('click', inserirNumero));//Ao clicar em algum local dos botões dos números, inseriremos o número

operacoes.forEach(operacao => operacao.addEventListener('click', selecionarOperacao));

function ativarIgual(){
    calcular();
    operador = undefined;
}

igual.addEventListener('click', ativarIgual);


function limparDisplay(){
    display.textContent = "";
}

function limparCalculo(){
    limparDisplay();
    operador = undefined;
    numeroNovo = true;
    numeroAnterior = undefined;
    caixaOperador.innerHTML = "";
}

function removerUltimoNumero(){
    display.textContent = display.textContent.slice(0, -1);
}

function inverterSinal(){
    numeroNovo = true;
    if(display.textContent != 0){
        atualizarDisplay((parseFloat(display.textContent.replace('.','').replace(',','.')) * -1));
    }
    else{
        atualizarDisplay(display.textContent);
    }
}

function existeVirgula(){
    if(display.textContent.indexOf(',') != -1){
        return true;
    }
    else{
        return false;
    }
}

function existeValor(){
    if(display.textContent.length > 0){
        return true;
    }
    else{
        return false;
    }
}

function andarComVirgula(){
    if(!existeVirgula()){
        if(existeValor()){
            atualizarDisplay(',');
        }
        else{
            atualizarDisplay('0,');
        }
    }
 
}

apagarDisplay.addEventListener('click',limparDisplay);
apagarTudo.addEventListener('click',limparCalculo);
voltar.addEventListener('click', removerUltimoNumero);
maisMenos.addEventListener('click', inverterSinal);
virgula.addEventListener('click', andarComVirgula);


const mapaTeclado = {
    '0' : 'num0',
    '1' : 'num1',
    '2' : 'num2',
    '3' : 'num3',
    '4' : 'num4',
    '5' : 'num5',
    '6' : 'num6',
    '7' : 'num7',
    '8' : 'num8',
    '9' : 'num9',
    '/' : 'operacaoDivisao',
    '*' : 'operacaoMultiplicacao',
    '-' : 'operacaoSubtracao',
    '+' : 'operacaoAdicao',
    'Enter' : 'igual',
    '=' : 'igual',
    ',' : 'virgula',
    'Backspace' : 'voltar',
    'c' : 'apagarDisplay',
    'Escape' : 'apagarTudo'
}



function teclaPermitida(tecla){
    if(Object.keys(mapaTeclado).indexOf(tecla) != -1){
        return true;
    }
    else{
        return false;
    }

}

function mapearTeclado(evento){
    tecla = evento.key;
    console.log(tecla);
    if(teclaPermitida(tecla)){
        document.getElementById(mapaTeclado[tecla]).click();
    }
}

document.addEventListener('keydown', mapearTeclado);