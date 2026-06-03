function rodarSimulacao() {
    try {
        // Captura os dados da tela
        const quantLancamentos = parseInt(document.getElementById("quantLancamentos").value);
        const quantDados = parseInt(document.getElementById("quantDados").value);
        const maiorNumero = parseInt(document.getElementById("maiorNumero").value);
        
        const maiorSoma = maiorNumero * quantDados;
        const menorSoma = quantDados;
        const linhas = 3;
        const colunas = maiorSoma - menorSoma + 1;

        // Criando a matriz preenchida com zeros
        let matriz = [];
        for (let i = 0; i < linhas; i++) {
            matriz.push(new Array(colunas).fill(0));
        }

        // Loop de simulação dos lançamentos
        for (let j = 0; j < quantLancamentos; j++) {
            let somaDaVez = 0;
            for (let d = 0; d < quantDados; d++) {
                let dadoSorteado = Math.floor(Math.random() * maiorNumero) + 1;
                somaDaVez += dadoSorteado;
            }
            matriz[1][somaDaVez - menorSoma] += 1;
        }

        // Cálculo das somas e frequências relativas
        for (let j = 0; j < colunas; j++) {
            matriz[0][j] = menorSoma + j;
            matriz[2][j] = (100 * matriz[1][j]) / quantLancamentos;
        }

        // Formatação estética da matriz para exibição na tela
        let textoMatriz = "";
        for (let i = 0; i < linhas; i++) {
            let linhaFormatada = matriz[i].map(numero => {
                if (i === 0 || i === 1) {
                    return Math.floor(numero).toString();
                } else {
                    return numero.toFixed(2) + "%";
                }
            });
            textoMatriz += "[" + linhaFormatada.join("   ") + "]\n";
        }
        document.getElementById("matrix-output").innerText = textoMatriz;

        // Preparando os dados para o gráfico do Plotly
        let eixoX = [];
        for (let x = menorSoma; x <= maiorSoma; x++) {
            eixoX.push(x);
        }
        
        let eixoYPercentual = matriz[2];
        let eixoYAbsoluto = matriz[1];

        // Definição das Barras
        var traceBarras = {
            x: eixoX,
            y: eixoYPercentual,
            customdata: eixoYAbsoluto,
            hovertemplate: 
                "<b>Soma: %{x}</b><br>" +
                "Percentual: %{y:.2f}%<br>" +
                "Quantidade: %{customdata} vezes<extra></extra>",
            type: 'bar',
            marker: { color: 'royalblue' },
            name: 'Barras'
        };

        // Definição do Polígono de Frequência (Linha)
        var traceLinha = {
            x: eixoX,
            y: eixoYPercentual,
            mode: 'lines+markers',
            line: { color: 'red', width: 2 },
            marker: { size: 8, color: 'darkred' },
            name: 'Polígono de Frequência',
            hoverinfo: 'skip'
        };

        // Configurações de Layout do Gráfico
        var layout = {
            title: `Distribuição de Somas (${quantLancamentos} Lançamentos)`,
            xaxis: {
                title: 'Soma dos Dados',
                tickmode: 'linear',
                dtick: 1
            },
            yaxis: {
                title: 'Frequência Relativa (%)'
            },
            showlegend: true,
            margin: { l: 40, r: 20, t: 50, b: 40 }
        };

        // Renderiza o gráfico nativamente
        Plotly.newPlot('graph-output', [traceBarras, traceLinha], layout);

    } catch (error) {
        document.getElementById("matrix-output").innerText = "Erro no processamento: " + error.message;
    }
}