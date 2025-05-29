let respostaFinal = document.getElementById('resp');

const tipo = document.getElementById('tipo');
const informacoes = document.getElementById('CaixaCoeficienteC');
const funcao = document.getElementById('funcao');
const resp = document.getElementById('resp')
const enviar = document.getElementById('enviar')


function trocarplaceHolder(){
    if(tipo.value == "seno"){
        funcao.placeholder = 'Ex.: sen x';
    }
    else{
        funcao.placeholder = 'Ex.: #';
    }
}

function definirFuncao(){
    if(tipo.value == "seno"){
        informacoes.innerHTML = `<div class="conjunto">
                                <label id='labelC' class='label' for="n">Digite n:</label>
                                <br/>
                                <input type="number" name="n" id="n" placeholder="Ex.: 10">
                                </div>`;
        trocarplaceHolder();
    }
    else{
        informacoes.innerHTML = "";
        trocarplaceHolder();
    }
}

tipo.addEventListener('change', definirFuncao());

/*function virgulaOuPontoVirgula(num1, num2){
    if(num1 % 1 === 0){
        return ",";
    }
    else{
        return ";";
    }
}

function txtQuantRaizes(arrayRaizes){
    let tamanho = arrayRaizes.length;
    if(tamanho == 2){
        return `As raízes da função são: ${arrayRaizes[0]} e ${arrayRaizes[1]}`;
    }
    if(tamanho == 1){
        return `A raiz da função é: ${arrayRaizes[0]}`;
    }
    if(tamanho == 0){
        if(tipo.value == "quadratica"){
            return `A função não possui raízes reais (Δ < 0)`;
        }
        if(tipo.value == "afim"){
            return `A função não possui raiz`;
        }
    }
}

function txtPos(pos){
    if(pos == ``){
        return `A função nunca é positiva`;
    }
    else{
        return `A função é positiva em: ${pos}`;
    }
}

function txtNeg(neg){
    if(neg == ``){
        return `A função nunca é negativa`;
    }
    else{
        return `A função é negativa em: ${neg}`;
    }
}

function txtCres(cres){
    if(cres == ``){
        return `A função nunca é crescente`;
    }
    else{
        return `A função é crescente em: ${cres}`;
    }
}

function txtDecres(decres){
    if(decres == ``){
        return `A função nunca é decrescente`;
    }
    else{
        return `A função é decrescente em: ${decres}`;
    }
}

function calcular(){
    if(tipo.value == "quadratica"){
        let formulaFuncao = document.getElementById('funcao').value;
        let a = document.getElementById('coeficienteA').value;
        let b = document.getElementById('coeficienteB').value;
        let c = document.getElementById('coeficienteC').value;

        if(a == ''){
            a = 0;
        }
        if(b == ''){
            b = 0;
        }
        if(c == ''){
            c = 0;
        }

        let valorIncial = c;
        valorIncial = valorIncial + "";
        valorIncial = valorIncial.replaceAll(".",",");

        let dados = new Object();
        dados.nome = formulaFuncao;
        dados.raizes = "";
        dados.vertice = ["","", ""];
        dados.valorIncial = valorIncial;
        dados.pos = "";
        dados.neg = "";
        dados.cres = "";
        dados.decres = "";

        let delta = Math.pow(b,2) -4 * a * c;

        if(delta > 0){//Duas raízes ∈ ℝ
            let x1 = (-b + Math.sqrt(delta))/(2 * a);
            let x2 = (-b - Math.sqrt(delta))/(2 * a);

            if(x1 > x2){
               let menorRaiz = x2;
               x2= x1;
               x1 = menorRaiz;
            }

            let xv = (x1 + x2)/2;
            let yv = (-delta)/(4 * a);
    
    
            x1 = x1 + "";
            x2 = x2 + "";
            xv = xv + "";
            yv = yv + "";
    
            x1 = x1.replaceAll(".",",");
            x2 = x2.replaceAll(".",",");
            xv = xv.replaceAll(".",",");
            yv = yv.replaceAll(".",",");
    
    
    
            dados.raizes = [x1, x2];
            dados.vertice[0] = xv;
            dados.vertice[1] = yv;
            if(a > 0){//Positiva
                dados.pos = `]-∞${virgulaOuPontoVirgula(x1, 0)} ${x1}[ ∪ ]${x2}${virgulaOuPontoVirgula(x2, 0)}+∞[`;
                dados.neg = `]${x1}${virgulaOuPontoVirgula(x1,0)}${x2}[`;
                dados.vertice[2] = "Mínimo";
                dados.cres = `]${xv}${virgulaOuPontoVirgula(xv, 0)}+∞[`;
                dados.decres = `]-∞${virgulaOuPontoVirgula(xv, 0)} ${xv}[`;
    
            }
            else{//Negativa
                dados.pos = `]${x1}${virgulaOuPontoVirgula(x1,0)}${x2}[`;
                dados.neg = `]-∞${virgulaOuPontoVirgula(x1, 0)} ${x1}[ ∪ ]${x2}${virgulaOuPontoVirgula(x2, 0)}+∞[`;
                dados.vertice[2] = "Máximo";
                dados.cres = `]-∞${virgulaOuPontoVirgula(xv, 0)} ${xv}[`;
                dados.decres = `]${xv}${virgulaOuPontoVirgula(xv, 0)}+∞[`;
            }
        }
        if(delta == 0){//Uma raiz ∈ ℝ
            let x1 = (-b)/(2 * a);

            let xv = x1;
            let yv = 0;
    
            x1 = x1 + "";
            xv = xv + "";
            yv = yv + "";
    
            x1 = x1.replaceAll(".",",");
            xv = xv.replaceAll(".",",");
            yv = yv.replaceAll(".",",");
    
    
    
            dados.raizes = [x1];
            dados.vertice[0] = xv;
            dados.vertice[1] = yv;
            if(a > 0){//Positiva
                dados.pos = `]-∞${virgulaOuPontoVirgula(x1, 0)} ${x1}[ ∪ ]${x1}${virgulaOuPontoVirgula(x1, 0)}+∞[`;
                dados.neg = ``;
                dados.vertice[2] = "Mínimo";
                dados.cres = `]${xv}${virgulaOuPontoVirgula(xv, 0)}+∞[`;
                dados.decres = `]-∞${virgulaOuPontoVirgula(xv, 0)} ${xv}[`;
    
            }
            else{//Negativa
                dados.pos = ``;
                dados.neg = `]-∞${virgulaOuPontoVirgula(x1, 0)} ${x1}[ ∪ ]${x1}${virgulaOuPontoVirgula(x1, 0)}+∞[`;
                dados.vertice[2] = "Máximo";
                dados.cres = `]-∞${virgulaOuPontoVirgula(xv, 0)} ${xv}[`;
                dados.decres = `]${xv}${virgulaOuPontoVirgula(xv, 0)}+∞[`;
            }
        }
        if(delta < 0){//Nenhuma raiz ∈ ℝ
            let xv = (-b)/(2 * a)
            let yv = (-delta)/(4 * a);
    
    
            xv = xv + "";
            yv = yv + "";

            xv = xv.replaceAll(".",",");
            yv = yv.replaceAll(".",",");
    
    
    
            dados.raizes = [];
            dados.vertice[0] = xv;
            dados.vertice[1] = yv;
            if(a > 0){//Positiva
                dados.pos = `]-∞, +∞[ => Ou seja, para todo o seu domínio`;
                dados.neg = ``;
                dados.vertice[2] = "Mínimo";
                dados.cres = `]${xv}${virgulaOuPontoVirgula(xv, 0)}+∞[`;
                dados.decres = `]-∞${virgulaOuPontoVirgula(xv, 0)} ${xv}[`;
    
            }
            else{//Negativa
                dados.pos = ``;
                dados.neg = `]-∞, +∞[ => Ou seja, para todo o seu domínio`;
                dados.vertice[2] = "Máximo";
                dados.cres = `]-∞${virgulaOuPontoVirgula(xv, 0)} ${xv}[`;
                dados.decres = `]${xv}${virgulaOuPontoVirgula(xv, 0)}+∞[`;
            }
        }
        return dados
    }
    if(tipo.value == "afim"){
        let formulaFuncao = document.getElementById('funcao').value;
        let a = document.getElementById('coeficienteA').value;
        let b = document.getElementById('coeficienteB').value;

        if(a == ''){
            a = 0;
        }
        if(b == ''){
            b = 0;
        }


        let valorIncial = b;
        valorIncial = valorIncial + "";
        valorIncial = valorIncial.replaceAll(".",",");

        let dados = new Object();
        dados.nome = formulaFuncao;
        dados.raiz = "";
        dados.valorIncial = valorIncial;
        dados.pos = "";
        dados.neg = "";
        dados.cres = "";
        dados.decres = "";


        if(a > 0){//Duas raízes ∈ ℝ
            let raiz = (-b)/(a);
            dados.raiz = raiz;
            dados.neg = `]-∞${virgulaOuPontoVirgula(raiz, 0)} ${raiz}[`;
            dados.pos = `]${raiz}${virgulaOuPontoVirgula(raiz,0)}+∞[`;
            dados.cres = `]-∞, +∞[ => Ou seja, semepre será crescente`;
            dados.decres = '';
        }
        if(a == 0){//Uma raiz ∈ ℝ
            dados.raiz = [];
            dados.cres = '';
            dados.decres = '';
            if(b > 0){
                dados.pos = `]-∞, +∞[ => Ou seja, para todo o seu domínio (Função Constante)`;
                dados.neg = ``;
            }
            else{
                if(b < 0){
                    dados.neg = `]-∞, +∞[ => Ou seja, para todo o seu domínio (Função Constante)`;
                    dados.pos = ``;
                }
                else{
                    dados.pos = ``;
                    dados.neg = ``;
                }
            }
        }
        if(a < 0){//Nenhuma raiz ∈ ℝ
            let raiz = (-b)/(a);
            dados.raiz = raiz;
            dados.pos = `]-∞${virgulaOuPontoVirgula(raiz, 0)} ${raiz}[`;
            dados.neg = `]${raiz}${virgulaOuPontoVirgula(raiz,0)}+∞[`;
            dados.cres = '';
            dados.decres = `]-∞, +∞[ => Ou seja, semepre será decrescente`;
        }
        return dados;
    }
}
*/

function calculaIntegral(){
    if(tipo.value == "seno"){
        let formulaFuncao = document.getElementById('funcao').value;
        let a = document.getElementById('a').value;
        let b = document.getElementById('b').value;
        let n = document.getElementById('n').value;
        if(a == "π"){
            a = Math.PI;
        }else{
            if(b == "π"){
                b = Math.PI;
            }
        }
        console.log(b);
        let termoMultiplicador = ((b-a)/n);
        let multiplicacaoDaVez = 0;
        let termoDaVez = 0;
        let somaDaVez = 0;
        let somatorio = 0;

        
    
        for (let i = 0; i < n; i++) {
            multiplicacaoDaVez = i*termoMultiplicador;
            termoDaVez = a+multiplicacaoDaVez;
            somaDaVez = Math.sin(termoDaVez);
            somatorio = somatorio + somaDaVez;
            
        }
        return termoMultiplicador * somatorio;
    }
}



enviar.addEventListener('click', function(){
    /*if(tipo.value == "quadratica"){
        let resultado = calcular();
        resp.innerHTML = `<p class='txt-resp'>Função: ${resultado.nome}</p>
                            <p class='txt-resp'>${txtQuantRaizes(resultado.raizes)}</p>
                            <p class='txt-resp'>O ponto de ${resultado.vertice[2]} é: (${resultado.vertice[0]}${virgulaOuPontoVirgula(resultado.vertice[0], )} ${resultado.vertice[1]})</p>
                            <p class='txt-resp'>O valor inicial da função é: ${resultado.valorIncial}</p>
                            <p class='txt-resp'>${txtPos(resultado.pos)}</p>
                            <p class='txt-resp'>${txtNeg(resultado.neg)}</p>
                            <p class='txt-resp'>${txtCres(resultado.cres)}</p>
                            <p class='txt-resp'>${txtDecres(resultado.decres)}</p>`;
    }
    if(tipo.value == "afim"){
        let resultado = calcular();
        resp.innerHTML = `<p class='txt-resp'>Função: ${resultado.nome}</p>
                            <p class='txt-resp'>${txtQuantRaizes(resultado.raiz)}</p>
                            <p class='txt-resp'>O valor inicial da função é: ${resultado.valorIncial}</p>
                            <p class='txt-resp'>${txtPos(resultado.pos)}</p>
                            <p class='txt-resp'>${txtNeg(resultado.neg)}</p>
                            <p class='txt-resp'>${txtCres(resultado.cres)}</p>
                            <p class='txt-resp'>${txtDecres(resultado.decres)}</p>`;
    }*/
    if(tipo.value == "seno"){
        let resultado = calculaIntegral();
        resp.innerHTML = `<p class='txt-resp'>${resultado}</p>`;
    }
    if(tipo.value == "#"){
        let resultado = 0;
        resp.innerHTML = `<p class='txt-resp'>${resultado}</p>`;
    }
})


// SCROOL REVEAL
window.revelar = ScrollReveal({reset:false});

revelar.reveal('#labelTipo',
{
    duration: 2000,
    origin: 'bottom',
    distance: '0px',
});

revelar.reveal('#tipo',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 100
});


revelar.reveal('#labelFuncao',
{
    duration: 2000,
    origin: 'bottom',
    distance: '0px',
    delay: 200
});

revelar.reveal('#funcao',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 300
});

revelar.reveal('#labelA',
{
    duration: 2000,
    origin: 'bottom',
    distance: '0px',
    delay: 400
});

revelar.reveal('#coeficienteA',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 500
});

revelar.reveal('#labelB',
{
    duration: 2000,
    origin: 'bottom',
    distance: '90px',
    delay: 600
});

revelar.reveal('#coeficienteB',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 700
});

revelar.reveal('#efeito-btn-enviar',
{
    duration: 1000,
    origin: 'bottom',
    distance: '90px',
    delay: 800
});
