const bnt = document.getElementById('bnt');
const rsp = document.getElementById('rsp');

async function buscarClima(nomeCidade) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=fb33a468ad2c0adcbe306c6232c9f786&lang=pt_br&units=metric`;
    const response = await fetch(url);

    const dadosClima = await response.json();
    const temperaturas = [dadosClima.main.temp];

    const condicoesExtremas = temperaturas.filter(temperatura => temperatura >= 35 || temperatura <= 5);

    if (condicoesExtremas.length > 0) {
        rsp.innerHTML = `
            <h1>${dadosClima.name} - ${dadosClima.sys.country}</h1>
            <p>Está em condições extremas!</p>
            <p>A temperatura é de ${dadosClima.main.temp}ºC</p>
            <p>A umidade é de ${dadosClima.main.humidity}</p>
        `;
    } else {
        rsp.innerHTML = `
            <h1>${dadosClima.name} - ${dadosClima.sys.country}</h1>
            <p>Está em condições extremas!</p>
            <p>A temperatura é de ${dadosClima.main.temp}ºC</p>
            <p>A umidade é de ${dadosClima.main.humidity}</p>
        `;
    }
}

bnt.addEventListener("click", async () => {
    const nomeCidade = document.getElementById('cidadeDigitada').value;
    if (nomeCidade) {
        await buscarClima(nomeCidade);
    } else {
        rsp.innerHTML = `<p>Por favor, insira o nome de uma cidade.</p>`;
    }
});
