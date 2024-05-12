const botao = document.querySelector("#botão");
const limpar = document.querySelector("#limpar");

/**
 * Pega o número natural digitado pelo usuário no input
 * @returns numero natural
 */
const getNumero = () => {
    let numero = parseFloat(document.querySelector("#entradaNumero").value) || 0;
    if(numero < 0)
    {
        numero = numero * (-1);
    }
    return numero;
}

//Somado a ele mesmo
/**
 * Uma função que soma um número a ele mesmo
 * @param {numero} numero 
 * @returns 2 vezes o número
 */
const calculaSoma = (numero) => {
    return numero + numero;
}

//Ao quadrado
/**
 * Uma função que calcula o quadrado de um número
 * @param {numero} numero 
 * @returns número ao quadrado
 */
const calculaQuadrado = (numero) => {
    return numero*numero;
}

//Ao cubo
/**
 * Uma função que calcula o cubo de um número
 * @param {numero} numero 
 * @returns número ao cubo
 */
const calculaCubo = (numero) => {
    return numero*numero*numero;
}

//Sua raiz quadrada
/**
 * Uma função que calcula a raiz quadrada de um número
 * @param {numero} numero 
 * @returns raiz quadrada do número
 */
const calculaRaizQuadrada = (numero) => {
    return Math.sqrt(numero);
}

//Ele é primo ou composto?
/**
 * Verifica se um número ou é primo ou é composto
 * @param {numero} numero 
 * @returns Primo ou Composto
 */
const ehPrimoOuComposto = (numero) => {
    let divisores = 0;
    let i = 0;
    while(i <= numero)
    {
        if(numero % i == 0)
        {
            divisores = divisores+ 1;
        }
        i = i + 1;
    }
    if(divisores == 2)
    {
        return "Primo";
    }
    else
    {
        return "Composto";
    }
}

//Seu fatorial
/**
 * Uma função que calcula o fatorial(!) de um número
 * @param {numero} numero 
 * @returns o fatorial do número
 */
const calculaFatorial = (numero) => {
    let i;
    i = numero;
    let produto = 1;
    if(numero == 0)
    {
        return 1;
    }
    while(i > 0)
    {
        produto = produto * i;
        i = i - 1;
    }
    return produto;
}

//Seu termial
/**
 * Uma função que calcula o termial(?) de um número
 * @param {numero} numero 
 * @returns o termial do número
 */
const calculaTermial = (numero) => {
    let i;
    i = numero;
    let soma = 0;
    if(numero == 0)
    {
        return 0;
    }
    while(i > 0)
    {
        soma = soma + i;
        i = i - 1;
    }
    return soma;
}

//Seu primorial
/**
 * Uma função que calcula o primorial(#) de um número
 * @param {numero} numero 
 * @returns o primorial do número
 */
const calculaPrimorial = (numero) => {
    let i;
    i = numero;
    let produto = 1;
    if(numero == 0)
    {
        return 1;
    }
    while(i > 0)
    {
        if(ehPrimoOuComposto(i) == "Primo")
        {
            produto = produto * i;
        }
        i = i - 1;
    }
    return produto;
}

//Ele é feliz ou infeliz?
/**
 * Calcula a quantidade de dígitos de um número
 * @param {numero} numero 
 * @returns quantidade de dígitos do número
 */
const quantidadeDeDigitos = (numero) => {
    let i = 0;
    let digitos = 0;
    while(numero >= 1)
    {
        numero = numero / 10;
        digitos = digitos + 1;
    }
    if(numero == 0)
    {
        return 1;
    }
    return digitos;
}
/**
 * Verifica se um número ou é feliz ou é infeliz
 * @param {numero} numero 
 * @returns Feliz ou Infeliz
 */
const ehFelizOuInfeliz = (numero) => {
    
    let i = 0;
    let j;
    let somatorio = 0;
    let multiplicacao;
    let digito;
    let digitos;
    while(i < 10)
    {
        j = 0;
        somatorio = 0;
        digitos = quantidadeDeDigitos(numero);
        while(j < digitos)
        {
            digito = Math.trunc(numero % 10);
            multiplicacao = digito * digito;
            somatorio = somatorio + multiplicacao;
            numero = numero / 10;
            j = j + 1;
        }
        numero = somatorio;
        if(numero == 1)
        {
            return "Feliz";
        }
        i = i + 1;
    }
    return "Infeliz";
}

//Ele é par ou ímpar?
/**
 * Verifica se o um número ou é par ou é ímpar
 * @param {numero} numero 
 * @returns Par ou Ímpar
 */
const ehParOuImpar = (numero) => {
    if(numero % 2 == 0)
    {
        return "Par";
    }
    else
    {
        return "Ímpar";
    }
}

//Ele é perfeito ou imperfeito?
/**
 * Verifica se o um número ou é perfeito ou é imperfeito
 * @param {numero} numero 
 * @returns Perfeito ou Imperfeito
 */
const ehPerfeitoOuImperfeito = (numero) => {
    let i = 0;
    let somatorio = 0;
    while(i < numero)
    {
        if(numero % i == 0)
        {
            somatorio = somatorio + i;
        }
        i = i + 1;
    }
    if(somatorio != numero || numero == 0)
    {
        return "Imperfeito";
    }
    else
    {
        return "Perfeito";
    }
}

//Conversão em binário
/**
 * Converte o número decimal digitado para a linguagem binária
 * @param {numero} numero 
 * @returns o número em binário
 */
const conversaoBinario = (numero) => {
    let result = "";
    let i;
    let resto;
    let restos = "";
    while(numero > 1)
    {
        resto = numero % 2;
        restos = restos + resto;
        numero = Math.trunc(numero / 2);
    }
    restos = restos + numero;
    i = restos.length - 1;
    while(i >= 0)
    {
        result = result + restos[i];
        i = i - 1;
    }
    return result;
}

//Conversão em octal
/**
 * Converte o número decimal digitado para a linguagem octal
 * @param {numero} numero 
 * @returns o número em octal
 */
const conversaoOctal = (numero) => {
    let result = "";
    let i;
    let resto;
    let restos = "";
    while(numero > 1)
    {
        resto = numero % 8;
        restos = restos + resto;
        numero = Math.trunc(numero / 8);
    }
    restos = restos + numero;
    i = restos.length - 1;
    while(i >= 0)
    {
        result = result + restos[i];
        i = i - 1;
    }
    return result;
}


//Conversão em hexadecimal
/**
 * Converte o número decimal digitado para a linguagem hexadecimal
 * @param {numero} numero 
 * @returns o número em hexadecimal
 */
const conversaoHexadecimal = (numero) => {
    let result = "";
    let i;
    let resto;
    let restos = "";
    while(numero > 1)
    {
        resto = numero % 16;
        switch(resto)
        {
            case 10:
                resto = "A";
                break;
            case 11:
                resto = "B";
                break;
            case 12:
                resto = "C";
                break;
            case 13:
                resto = "D";
                break;
            case 14:
                resto = "E";
                break;
            case 15:
                resto = "F";
                break;
        }
        restos = restos + resto;
        numero = Math.trunc(numero / 16);
    }
    restos = restos + numero;
    i = restos.length - 1;
    while(i >= 0)
    {
        result = result + restos[i];
        i = i - 1;
    }
    return result;
}

botao.addEventListener("click", function()
{
    let soma = calculaSoma(getNumero());
    let aoQuadrado = calculaQuadrado(getNumero());
    let aoCubo = calculaCubo(getNumero());
    let raizQuadrada = calculaRaizQuadrada(getNumero());
    let fatorial = calculaFatorial(getNumero());
    let primorial = calculaPrimorial(getNumero());
    let termial = calculaTermial(getNumero());
    let binario = conversaoBinario(getNumero());
    let octal = conversaoOctal(getNumero());
    let hexadecimal = conversaoHexadecimal(getNumero());
    let primoOuComposto = ehPrimoOuComposto(getNumero())
    let felizOuInfeliz = ehFelizOuInfeliz(getNumero());
    let parOuImpar = ehParOuImpar(getNumero());
    let perfeitoOuImperfeito = ehPerfeitoOuImperfeito(getNumero());
    const lista = document.querySelector("#listaResposta");
    if(getNumero() == 69)
    {
        lista.innerHTML += `<p><span>MALDADE SUPREMA</span>:</p>`;
    }
    lista.innerHTML += `<p>Sobre o número <span>${getNumero()}</span>:</p>`;
    lista.innerHTML += `<li id="infor">Somado a ele mesmo é igual a: <span>${soma}</span></li>`;
    lista.innerHTML += `<li id="infor">Elevado ao quadrado é igual a: <span>${aoQuadrado}</span></li>`;
    lista.innerHTML += `<li id="infor">Elevado ao cubo é igual a: <span>${aoCubo}</span></li>`;
    lista.innerHTML += `<li id="infor">Possui uma raiz quadrada de: <span>${raizQuadrada}</span></li>`;
    lista.innerHTML += `<li id="infor">Possui um fatorial (!) de: <span>${fatorial}</span></li>`;
    lista.innerHTML += `<li id="infor">Possui um primorial (#) de: <span>${primorial}</span></li>`;
    lista.innerHTML += `<li id="infor">Possui um termial (?) de: <span>${termial}</span></li>`;
    lista.innerHTML += `<li id="infor">Em linguagem binária é: <span>${binario}</span></li>`;
    lista.innerHTML += `<li id="infor">Em linguagem octal é: <span>${octal}</span></li>`;
    lista.innerHTML += `<li id="infor">Em linguagem hexadecimal é: <span>${hexadecimal}</span></li>`;
    lista.innerHTML += `<li id="infor">Ele é <span>${primoOuComposto}</span></li>`;
    lista.innerHTML += `<li id="infor">Ele é <span>${felizOuInfeliz}</span></li>`;
    lista.innerHTML += `<li id="infor">Ele é <span>${parOuImpar}</span></li>`;
    lista.innerHTML += `<li id="infor">Ele é <span>${perfeitoOuImperfeito}</span></li>`;
    lista.innerHTML += `<li id="infor"><hr id="linha" /></li>`;
    document.querySelector(("#entradaNumero")).value = "";
}
);

limpar.addEventListener("click", function()
{
    let lista = document.querySelector("#listaResposta");
    lista.innerHTML = "";
    let numero = document.querySelector(("#entradaNumero")).value = "";
});