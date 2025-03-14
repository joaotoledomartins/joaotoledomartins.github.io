document.addEventListener("DOMContentLoaded", function () {
    let dataInput = document.getElementById('input-data');
    let dataAtual = new Date();
    let dia = String(dataAtual.getDate()).padStart(2, '0');
    let mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
    let ano = dataAtual.getFullYear();
    let dataFormatada = `${ano}-${mes}-${dia}`;
    dataInput.value = dataFormatada;
});

let listaRegistros = document.getElementById('listaRegistros');

document.getElementById('materialForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    let nome = document.getElementById('input-nome').value;
    let material = document.getElementById('select-material').value;
    let data = document.getElementById('input-data').value;
    let curso = document.getElementById('select-curso').value;

    let registro = nome + ' pegou ' + material + ' em ' + data + ', da turma/curso: ' + curso +'. ';
    let listItem = document.createElement('li');
    listItem.textContent = registro;


    let devolucaoButton = document.createElement('button');
    devolucaoButton.textContent = 'Devolvido';
    devolucaoButton.setAttribute("id", "button-devolve");
    devolucaoButton.setAttribute('data-registro', registro);
    devolucaoButton.addEventListener('click', function () {
        listaRegistros.removeChild(listItem);

        let registrosAntigos = JSON.parse(localStorage.getItem('registros')) || [];
        let registroParaRemover = devolucaoButton.getAttribute('data-registro');
        registrosAntigos = registrosAntigos.filter(function (r) {
            return r !== registroParaRemover;
        });
        localStorage.setItem('registros', JSON.stringify(registrosAntigos));
    });
    listItem.appendChild(devolucaoButton);
    listaRegistros.appendChild(listItem);

    document.getElementById('materialForm').reset();

    let registrosAntigos = JSON.parse(localStorage.getItem('registros')) || [];
    registrosAntigos.push(registro);
    localStorage.setItem('registros', JSON.stringify(registrosAntigos));
});

document.addEventListener("DOMContentLoaded", function () {
    let registrosAntigos = JSON.parse(localStorage.getItem('registros')) || [];

    registrosAntigos.forEach(function (registro) {
        let listItem = document.createElement('li');
        listItem.textContent = registro;

        let devolucaoButton = document.createElement('button');
        devolucaoButton.setAttribute("id", "button-devolve");
        devolucaoButton.textContent = 'Devolvido';
        
        devolucaoButton.setAttribute('data-registro', registro);
        
        devolucaoButton.addEventListener('click', function () {
            listaRegistros.removeChild(listItem);

            let registrosAntigos = JSON.parse(localStorage.getItem('registros')) || [];
            let registroParaRemover = devolucaoButton.getAttribute('data-registro');
            registrosAntigos = registrosAntigos.filter(function (r) {
                return r !== registroParaRemover;
            });
            localStorage.setItem('registros', JSON.stringify(registrosAntigos));
        });
        
        listItem.appendChild(devolucaoButton);
        listaRegistros.appendChild(listItem);
    });
});