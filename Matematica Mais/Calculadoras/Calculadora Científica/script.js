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
const pi =  Math.PI;
const e =  Math.E;


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

function passarRadiano(grau){
    return (grau * pi)/180;
}

function passarGrau(rad){
    return (rad * 180)/pi;
}

function fatorial(numero){
    if(numero == 0){
        return 1;
    }
    else{
        let produto = 1;
        for(numero; numero > 0; numero--){
            produto = produto * numero;
        }
        return produto;
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
            case '√':
                atualizarDisplay(Math.sqrt(numeroAnterior));
                break;
            case 'x²':
                atualizarDisplay(numeroAnterior*numeroAnterior);
                break;
            case 'sin':
                atualizarDisplay(Math.sin(passarRadiano(numeroAnterior)));
                break;
            case 'cos':
                atualizarDisplay(Math.cos(passarRadiano(numeroAnterior)));
                break;
            case 'tan':
                atualizarDisplay(Math.tan(passarRadiano(numeroAnterior)));
                break;
            case 'sin-1':
                atualizarDisplay(passarGrau(Math.asin(numeroAnterior)));
                break;
            case 'cos-1':
                atualizarDisplay(passarGrau(Math.acos(numeroAnterior)));
                break;
            case 'tan-1':
                atualizarDisplay(passarGrau(Math.atan(numeroAnterior)));
                break;
            case 'n!':
                atualizarDisplay(fatorial(numeroAnterior));
                break;
            case '∛':
                atualizarDisplay(Math.cbrt(numeroAnterior));
                break;
            case 'x³':
                atualizarDisplay(Math.pow(numeroAnterior, 3));
                break;
            case 'ex':
                atualizarDisplay(Math.exp(numeroAnterior));
                break;
            case '10x':
                atualizarDisplay(Math.pow(10, numeroAnterior));
                break;
            case 'n√x':
                atualizarDisplay(Math.pow(numeroAtual, 1/numeroAnterior));
                break;
             case '%':
                atualizarDisplay(numeroAnterior/100);
                break;
            case '|x|':
                atualizarDisplay(Math.abs(numeroAnterior));
                break;
            case 'log':
                atualizarDisplay(Math.log10(numeroAnterior));
                break;
            case 'ln':
                atualizarDisplay(Math.log(numeroAnterior));
                break;
            case 'log xn':
                atualizarDisplay(Math.log10(numeroAtual)/Math.log10(numeroAnterior));//NúmeroAnterior: base; númeroAtual: logaritmando
                break;
        }
    }
}

function inserirNumero(evento){
    if(evento.target.textContent == "π"){
        atualizarDisplay(pi);
    }
    else{
        atualizarDisplay(evento.target.textContent); //Donde o número foi clicado, pegue o seu conteúdo, ou seja, o próprio número, e atualize o display
    }
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
    '%' : 'operacaoPorcentagem',
    '²' : 'operacaoAoQuadrado',
    '³' : 'operacaoAoCubo',
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

revelar.reveal('#linhaOperacaoRaizQuadrada',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 1950
});
        
revelar.reveal('#operacaoRaizQuadrada',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2000
});

revelar.reveal('#linhaNum7',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2200
});

revelar.reveal('#num7',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2250
});

revelar.reveal('#linhaNum8',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2450
});

revelar.reveal('#num8',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2500
});

revelar.reveal('#linhaNum9',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2700
});

revelar.reveal('#num9',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2750
});

revelar.reveal('#linhaOperacaoMultiplicacao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 2950
});

revelar.reveal('#operacaoMultiplicacao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3000
});

revelar.reveal('#linhaOperacaoAoQuadrado',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3200
});

revelar.reveal('#operacaoAoQuadrado',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3250
});

revelar.reveal('#linhaNum4',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3450
});

revelar.reveal('#num4',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3500
});

revelar.reveal('#linhaNum5',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3700
});

revelar.reveal('#num5',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3750
});

revelar.reveal('#linhaNum6',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 3950
});

revelar.reveal('#num6',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4000
});

revelar.reveal('#linhaOperacaoSubtracao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4200
});

revelar.reveal('#operacaoSubtracao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4250
});

revelar.reveal('#linhaOperacaoSin',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4450
});

revelar.reveal('#operacaoSin',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4500
});

revelar.reveal('#linhaNum1',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4700
});

revelar.reveal('#num1',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4750
});

revelar.reveal('#linhaNum2',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 4950
});

revelar.reveal('#num2',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5000
});

revelar.reveal('#linhaNum3',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5200
});

revelar.reveal('#num3',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5250
});

revelar.reveal('#linhaOperacaoAdicao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5450
});

revelar.reveal('#operacaoAdicao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5500
});

revelar.reveal('#linhaOperacaoCos',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5700
});

revelar.reveal('#operacaoCos',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5750
});

revelar.reveal('#linhaMaisMenos',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 5950
});

revelar.reveal('#maisMenos',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 6000
});

revelar.reveal('#linhaNum0',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 6200
});

revelar.reveal('#num0',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 6250
});

revelar.reveal('#linhaVirgula',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 6450
});

revelar.reveal('#virgula',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 6500
});

revelar.reveal('#linhaIgual',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 6700
});

revelar.reveal('#igual',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 6750
});

revelar.reveal('#linhaOperacaoTan',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 6950
});

revelar.reveal('#operacaoTan',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 7000
});

revelar.reveal('#linhaPi',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 7200
});

revelar.reveal('#numPi',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 7250
});

revelar.reveal('#linhaOperacaoSin-1',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 7450
});

revelar.reveal('#operacaoSin-1',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 7500
});

revelar.reveal('#linhaOperacaoCos-1',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 7700
});

revelar.reveal('#operacaoCos-1',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 7750
});

revelar.reveal('#linhaOperacaoTan-1',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 7950
});

revelar.reveal('#operacaoTan-1',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 8000
});

revelar.reveal('#linhaOperacaoFatorial',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 8200
});

revelar.reveal('#operacaoFatorial',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 8250
});

revelar.reveal('#linhaOperacaoRaizCubica',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 8450
});

revelar.reveal('#operacaoRaizCubica',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 8500
});

revelar.reveal('#linhaOperacaoAoCubo',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 8700
});

revelar.reveal('#operacaoAoCubo',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 8750
});

revelar.reveal('#linhaOperacaoEnaX',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 8950
});

revelar.reveal('#operacaoEnaX',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 9000
});

revelar.reveal('#linhaOperacao10naX',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 9200
});

revelar.reveal('#operacao10naX',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 9250
});

revelar.reveal('#linhaOperacaoEnesima',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 9450
});

revelar.reveal('#operacaoEnesima',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 9500
});

revelar.reveal('#linhaOperacaoPorcentagem',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 9700
});

revelar.reveal('#operacaoPorcentagem',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 9750
});

revelar.reveal('#linhaOperacaoModulo',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 9950
});

revelar.reveal('#operacaoModulo',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 10000
});

revelar.reveal('#linhaOperacaoLog10',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 10200
});

revelar.reveal('#operacaoLog10',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 10250
});

revelar.reveal('#linhaOperacaoLn',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 10450
});

revelar.reveal('#operacaoLn',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 10500
});

revelar.reveal('#linhaOperacaoLogXnaBaseN',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 10700
});

revelar.reveal('#operacaoLogXnaBaseN',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 10750
});