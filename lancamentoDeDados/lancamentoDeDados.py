import random
import numpy as np
import matplotlib.pyplot as plt
import plotly.graph_objects as go


quantLancamentos = 1000

#dadosIguais = str(input("Todos os seus dados são igual? (s/n): \t"))
quantDados = int(input("Qual é a quantidade de dados? \t"))
maiorNumero = int(input("Qual é o maior número dos dados? \t")) # Aqui depende do tipo de dado.
maiorSoma = maiorNumero*quantDados # A maior soma possível no lançamento de dados é o maior número vezes a quantidade de dados.
menorSoma = quantDados # A menor soma possível no lançamento de dados é 1 vezes a quantidade de dados.
linhas = 3 # Sempre duas linhas: a linha 0 é a linha da frequência absoluta; a linha 1 é a frequência relativa.
colunas = maiorSoma-menorSoma+1 # Aqui é a quantidade somas possíveis nos lançamentos; ela é a diferença entre a maior soma e a menor soma mais 1.


# Criando uma matriz preenchida com zeros.
matriz = np.zeros((linhas, colunas))

# Criamos uma lista de opções possíveis para o dado (de 1 até o maiorNumero)
# Ex.: se o maiorNumero for 6, as opções serão [1, 2, 3, 4, 5, 6]
opcoesDoDado = list(range(1, maiorNumero + 1))

# A coluna da menor Soma é a coluna 0.
# A coluna que representa a somaDaVez é igual a diferença entre a somaDaVez e a menorSoma.
j = 0
while j < quantLancamentos:
    # O random.choices sorteia vários números ao mesmo tempo
    dadosLancados = random.choices(opcoesDoDado, k=quantDados)
    somaDaVez = sum(dadosLancados)
    matriz[1, somaDaVez-menorSoma] += 1
    j += 1

j = 0 
while j < colunas:
    matriz[0,j]= menorSoma + j
    matriz[2, j] = 100*matriz[1, j]/quantLancamentos
    j += 1

# Aqui estamos fazendo uma melhor exibição, porém ela só é estética; na memória, os dados não estão nem arredondados e nem com %.
for i, linhaAtual in enumerate(matriz):
    if i == 0 or i == 1 :
        # Formatamos para número inteiro
        linhaFormatada = [f"{int(numero)}" for numero in linhaAtual]
    # Para todas as outras linhas
    else:
        # Formatamos com 2 casas decimais e adicionamos o símbolo de %
        linhaFormatada = [f"{numero:.2f}%" for numero in linhaAtual]
    print("[" + "  ".join(linhaFormatada) + "]")


# <========================Gráfico========================>
# <=====Uma versão mais simples=====>
# np.arange cria uma lista que vai da menorSoma até a maiorSoma
# eixoX = np.arange(menorSoma, maiorSoma + 1)
# eixoY = matriz[1]
# plt.bar(eixoX, eixoY, color='royalblue', edgecolor='black', alpha=0.7, label='Frequência')
# plt.plot(eixoX, eixoY, color='red', marker='o', linewidth=2, label='Polígono')
# plt.title(f'Frequência de Somas em {quantLancamentos} Lançamentos')
# plt.xlabel('Soma dos Dados')
# plt.ylabel('Frequência Relativa (%)')
# plt.xticks(eixoX) # Garantindo que o eixo X mostre apenas números inteiros (as somas).
# plt.legend()
# plt.show()

# <=====Uma versão mais complexa=====>
eixoX = np.arange(menorSoma, maiorSoma + 1)
eixoYPercentual = matriz[2]
eixoYAbsoluto = matriz[1]
fig = go.Figure(data=[
    go.Bar(
        x=eixoX,
        y=eixoYPercentual,
        # 'customdata' permite esconder dados extras dentro da barra para usarmos depois
        customdata=eixoYAbsoluto,
        # 'hovertemplate' é onde a mágica acontece! É a regra da caixinha de texto.
        # %{x} pega o eixo X, %{y} pega o Y, e %{customdata} pega a nossa quantidade
        hovertemplate=
        "<b>Soma: %{x}</b><br>" +
        "Percentual: %{y:.2f}%<br>" +
        "Quantidade: %{customdata} vezes" +
        "<extra></extra>", # Esse extra vazio remove um lixo visual que o Plotly coloca por padrão
        marker_color='royalblue',
        name='Barras'
    )
])
fig.add_trace(
    go.Scatter(
        x=eixoX,
        y=eixoYPercentual,
        mode='lines+markers', # 'lines' desenha o polígono, 'markers' marca os topos
        line=dict(color='red', width=2), # Linha vermelha
        marker=dict(size=8, color='darkred'), # Pontos vermelhos escuros
        name='Polígono de Frequência',
        hoverinfo='skip' # Desativa o mouse na linha para não atrapalhar o mouse da barra
    )
)
fig.update_layout(
    title=f'Distribuição de Somas ({quantLancamentos} Lançamentos)',
    xaxis_title='Soma dos Dados',
    yaxis_title='Frequência Relativa (%)',
    xaxis=dict(tickmode='linear'),
    showlegend=True # Mostra a legenda identificando a barra e a linha
)
fig.show()


# A partir de agora, toda vez que mandarmos imprimir uma matriz, mostrará apenas 2 casas decimais e suprimirá a notação científica.
# np.set_printoptions(precision=2, suppress=True)