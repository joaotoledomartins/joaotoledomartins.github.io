// DECLARAÇÃO DE VARIÁVEIS
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


let numeroNovo = true;
let operador;
let numeroAnterior;


// FUNÇÕES
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

function ativarIgual(){
    calcular();
    operador = undefined;
}

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

// EVENTOS
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));//Ao clicar em algum local dos botões dos números, inseriremos o número

operacoes.forEach(operacao => operacao.addEventListener('click', selecionarOperacao));

igual.addEventListener('click', ativarIgual);

apagarDisplay.addEventListener('click',limparDisplay);

apagarTudo.addEventListener('click',limparCalculo);

voltar.addEventListener('click', removerUltimoNumero);

maisMenos.addEventListener('click', inverterSinal);

virgula.addEventListener('click', andarComVirgula);

// TECLADO
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

// SCROOL REVEAL
window.revelar = ScrollReveal({reset:false});

revelar.reveal('.calculadora',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 200
});

revelar.reveal('.ultimaOperacao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 250
});

revelar.reveal('.caixaOperador',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 500

});

revelar.reveal('#linhaDisplay',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 750
});

revelar.reveal('#linhaApagarDisplay',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 950
});

revelar.reveal('#apagarDisplay',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 1000
});

revelar.reveal('#linhaApagarTudo',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 1200
});

revelar.reveal('#apagarTudo',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 1250
});

revelar.reveal('#linhaVoltar',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 1450
});

revelar.reveal('#voltar',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 1500
});

revelar.reveal('#linhaOperacaoDivisao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 1700
});

revelar.reveal('#operacaoDivisao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 1750
});

revelar.reveal('#linhaNum7',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 1950
});

revelar.reveal('#num7',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2000
});

revelar.reveal('#linhaNum8',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2200
});

revelar.reveal('#num8',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2250
});

revelar.reveal('#linhaNum9',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2450
});

revelar.reveal('#num9',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2500
});

revelar.reveal('#linhaOperacaoMultiplicacao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2700
});

revelar.reveal('#operacaoMultiplicacao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2750
});

revelar.reveal('#linhaNum4',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2950
});

revelar.reveal('#num4',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3000
});

revelar.reveal('#linhaNum5',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3200
});

revelar.reveal('#num5',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3250
});

revelar.reveal('#linhaNum6',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3450
});

revelar.reveal('#num6',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3500
});

revelar.reveal('#linhaOperacaoSubtracao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3700
});

revelar.reveal('#operacaoSubtracao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3750
});

revelar.reveal('#linhaNum1',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3950
});

revelar.reveal('#num1',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4000
});

revelar.reveal('#linhaNum2',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4200
});

revelar.reveal('#num2',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4250
});

revelar.reveal('#linhaNum3',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4450
});

revelar.reveal('#num3',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4500
});

revelar.reveal('#linhaOperacaoAdicao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4700
});

revelar.reveal('#operacaoAdicao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4750
});

revelar.reveal('#ultimoBtnMaisMenos',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4950
});

revelar.reveal('#maisMenos',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5000
});

revelar.reveal('#linhaNum0',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5200
});

revelar.reveal('#num0',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5250
});

revelar.reveal('#linhaVirgula',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5450
});

revelar.reveal('#virgula',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5500
});

revelar.reveal('#ultimoBtnIgual',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5700
});

revelar.reveal('#igual',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5750
});