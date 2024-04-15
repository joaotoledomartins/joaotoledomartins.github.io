const pi = Math.PI; //3.141592S
const gravidade = 9.806650;
const botao = document.querySelector("#executar");


/**
 * Função que pega o valor da velocidade digitada pelo usuário
 * @returns numero
 */
const getVelocidade = () => parseFloat(document.querySelector("#velocidade").value) || 0

/**
 * Função que pega o valor do ângulo digitado pelo usuário
 * @returns numero
 */
const getAngulo = () => parseFloat(document.querySelector("#angulo").value) || 0

/**
 * Função que calcula o seno de um ângulo em radianos
 * @param {*} radianos - o valor do ângulo em radianos
 * @returns número
 */
const calculaSeno = radianos => Math.sin(radianos)

/**
 * Função que calcula o alcance horizontal de um corpo
 * @param {*} velocidade - velocidade inicial
 * @param {*} angulo - ângulo inicial formado com a superfície
 * @returns numero
 */
const calculaAlcance = (velocidade, angulo) => {
    
    let alcance;
    alcance = ((velocidade ** 2) *  calculaSeno((pi*angulo)/90))/gravidade;
   // console.log(calculaSeno(radianos))
    return alcance;
}

const resposta = alcance => {
    const alcResp = document.querySelector("#lista-result");
    const alcResult = `<li>O alcance horizontal do corpo é: ${alcance}</li>`;
    alcResp.innerHTML = alcResult;
}

botao.addEventListener("click", function()
{
    const velocidade = getVelocidade();
    const angulo = getAngulo();
    const alcance = calculaAlcance(velocidade, angulo)
    resposta(alcance);
})
