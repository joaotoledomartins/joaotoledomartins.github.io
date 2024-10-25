//função construtora de objetos Produto
var produto = function(id, nome, categoria, img, valorUnitario, quantidade){
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.foto = img;
    this.valorUnitario = valorUnitario;
    this.quantidade = quantidade;
}


// carregamento de cardápio de exemplo
var cardapio = [new produto(1, "Capuccino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/capuccino.png",7,1)
			, new produto(2, "Espresso", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/espresso.png",4,1)
			, new produto(3, "Frapuccino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/frapuccino.png",8,1)
			, new produto(4, "Chococcino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/chococcino.png",7,1)
			, new produto(5, "Chocolate Quente", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/chocolate_quente.png",10,1)
			, new produto(6, "Frapê", "Bebidas Frias", "https://rafaelescalfoni.github.io/desenv_web/img/frape.png",12,1)
			, new produto(7, "Suco de Laranja", "Bebidas Frias", "https://rafaelescalfoni.github.io/desenv_web/img/suco_laranja.png",10,1)
            , new produto(8, "Açaí", "Doces", "https://rafaelescalfoni.github.io/desenv_web/img/acai.png",12,1)
            , new produto(9, "Bolo de Laranja", "Doces", "https://rafaelescalfoni.github.io/desenv_web/img/bolo_laranja.png",8,1)];
		

function pesquisaPorId(vetor, objId){
	return vetor.find(function(item){
		return item.id == objId;
	})
}

const pedidos = document.querySelector("#pedidos");
const carregarPedidos = lista => {
    pedidos.innerHTML= "";
    lista.forEach(pedido => {
        pedidos.innerHTML += `<li id="${pedido.id}"><figure>
                        <img src="${pedido.foto}" alt="${pedido.nome}">
                        <figcaption>${pedido.nome}<strong>${pedido.valorUnitario*pedido.quantidade}</strong></figcaption>
                        </figure>
                        </li>`; 
    })
}

const carregarCardapio = lista => {
    const listaObj = document.querySelector("#cardapio");
    lista.forEach(produto => {
        listaObj.innerHTML += `<li id="${produto.id}"><figure>
                        <img src="${produto.foto}" alt="${produto.nome}">
                        <figcaption>${produto.nome}<strong>${produto.valorUnitario}</strong></figcaption>
                        </figure>
                    </li>`; 
    });
}

carregarCardapio(cardapio);

const valorTotal = document.querySelector("#valorTotal");
const carregarTotal = lista => {
    let total = 0;
    lista.forEach(produto => {
        total += produto.valorUnitario * produto.quantidade;
    });
    valorTotal.innerHTML = `Total - ${total}`;
}

let cesta = [];

const inserirEmCesta = objeto => {
    let temProduto = cesta.some(function(item){ return item === objeto;});
    if(!(temProduto)){
        cesta.push(objeto)
    }
    else{
        objeto.quantidade++;
    }
    return cesta;
}; 

const listaPedidosStorage = () => {
    cardapio.forEach(function(produto) {
        let pedido = JSON.parse(localStorage.getItem(produto.id))
        console.log(pedido)
        if(pedido) {
            produto.quantidade = pedido;
            cesta.push(produto)
        }
    })
}

listaPedidosStorage();
carregarPedidos(cesta)
carregarTotal(cesta)

const item = document.querySelector("#cardapio")
item.addEventListener("click", function(ev){
    // ev PointerEvent => ponteiro para o evento 
    if(ev.target.nodeName == "IMG" || ev.target.nodeName == "FIGCAPTION" || ev.target.nodeName == "STRONG"){
        var objId = ev.target.parentNode.parentNode.id;
        var objeto = pesquisaPorId(cardapio, objId);
        inserirEmCesta(objeto);
        var dinheiro =  objeto.valorUnitario * objeto.quantidade;
        console.log(dinheiro);
        console.log(cesta);
        localStorage.setItem(objeto.id, objeto.quantidade)

        carregarPedidos(cesta);
        carregarTotal(cesta);
    }
});