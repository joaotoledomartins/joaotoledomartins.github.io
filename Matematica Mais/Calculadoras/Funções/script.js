let respostaFinal = document.getElementById('resp');

const tipo = document.getElementById('tipo');
const informacoes = document.getElementById('CaixaCoeficienteC');
const funcao = document.getElementById('funcao');
const resp = document.getElementById('resp')
const enviar = document.getElementById('enviar')


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
                                <label id='labelC' class='label' for="coeficienteC">Digite o coeficiente c:</label>
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

function virgulaOuPontoVirgula(num1, num2){
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
    
            }
            else{//Negativa
                dados.pos = `]${x1}${virgulaOuPontoVirgula(x1,0)}${x2}[`;
                dados.neg = `]-∞${virgulaOuPontoVirgula(x1, 0)} ${x1}[ ∪ ]${x2}${virgulaOuPontoVirgula(x2, 0)}+∞[`;
                dados.vertice[2] = "Máximo";
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
    
            }
            else{//Negativa
                dados.pos = ``;
                dados.neg = `]-∞${virgulaOuPontoVirgula(x1, 0)} ${x1}[ ∪ ]${x1}${virgulaOuPontoVirgula(x1, 0)}+∞[`;
                dados.vertice[2] = "Máximo";
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
    
            }
            else{//Negativa
                dados.pos = ``;
                dados.neg = `]-∞, +∞[ => Ou seja, para todo o seu domínio`;
                dados.vertice[2] = "Máximo";
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


        if(a > 0){//Duas raízes ∈ ℝ
            let raiz = (-b)/(a);
            dados.raiz = raiz;
            dados.neg = `]-∞${virgulaOuPontoVirgula(raiz, 0)} ${raiz}[`;
            dados.pos = `]${raiz}${virgulaOuPontoVirgula(raiz,0)}+∞[`;
        }
        if(a == 0){//Uma raiz ∈ ℝ
            dados.raiz = [];
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
        }
        return dados;
    }
}

enviar.addEventListener('click', function(){
    if(tipo.value == "quadratica"){
        let resultado = calcular();
        resp.innerHTML = `<p class='txt-resp'>Função: ${resultado.nome}</p>
                            <p class='txt-resp'>${txtQuantRaizes(resultado.raizes)}</p>
                            <p class='txt-resp'>O ponto de ${resultado.vertice[2]} é: (${resultado.vertice[0]}${virgulaOuPontoVirgula(resultado.vertice[0], )} ${resultado.vertice[1]})</p>
                            <p class='txt-resp'>O valor inicial da função é: ${resultado.valorIncial}</p>
                            <p class='txt-resp'>${txtPos(resultado.pos)}</p>
                            <p class='txt-resp'>${txtNeg(resultado.neg)}</p>`;
    }
    if(tipo.value == "afim"){
        let resultado = calcular();
        resp.innerHTML = `<p class='txt-resp'>Função: ${resultado.nome}</p>
                            <p class='txt-resp'>${txtQuantRaizes(resultado.raiz)}</p>
                            <p class='txt-resp'>O valor inicial da função é: ${resultado.valorIncial}</p>
                            <p class='txt-resp'>${txtPos(resultado.pos)}</p>
                            <p class='txt-resp'>${txtNeg(resultado.neg)}</p>`;
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
