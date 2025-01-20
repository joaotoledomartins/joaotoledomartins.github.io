//Atividade 3
class Produto{
    constructor(nome, preco, quantidadeEmEstoque){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    atualizarEstoque(quantidade){
        let estoqueNovo = this.quantidadeEmEstoque + quantidade;
        this.quantidadeEmEstoque = estoqueNovo;
    }
    calcularValorEstoque(){
        let valorTotal = this.preco * this.quantidadeEmEstoque
        return "O valor total do estoque é de " + valorTotal;
    }
    mostrarEstoque(){
        return "Seu estoque atualizado é de: " + this.quantidadeEmEstoque;
    }
};

class ProdutoPerecivel extends Produto{
    constructor(nome, preco, quantidadeEmEstoque, dataDeValidade){
        super(nome, preco, quantidadeEmEstoque);
        this.dataDeValidade = dataDeValidade;
    }
    verificarValidade(dataAtual){
        if(new Date(this.dataDeValidade) < new Date(dataAtual)){
            return "O produto está dentro da validade!";
        }
        else{
            return "O produto está fora da validade!";
        }
    }
}
/* TESTES
    const sorvete = new Produto("Sorvete Napole", 4.50, 50);
    console.log(sorvete.mostrarEstoque());
    console.log(sorvete.atualizarEstoque(-25));
    console.log(sorvete.mostrarEstoque());
    console.log(Date);
*/