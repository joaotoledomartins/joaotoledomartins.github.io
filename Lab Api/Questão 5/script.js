async function pegarFrases () {
    let API = await fetch("https://api.quotable.io/random");
    frase = await API.json();
    console.log(frase);
}

pegarFrases();