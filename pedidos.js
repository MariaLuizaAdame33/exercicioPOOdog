"use strict";
var StatusPedidos;
(function (StatusPedidos) {
    StatusPedidos["AguardandoPreparo"] = "Aguardando o preparo";
    StatusPedidos["EmPreparo"] = "Em Preparo";
    StatusPedidos["SaiuParaEntrega"] = "Saiu Para Entrega";
    StatusPedidos["Entregue"] = "Entregue";
    StatusPedidos["ClienteAusente"] = "Pedido n\u00E3o entregue,Cliente n\u00E3o encontrado";
})(StatusPedidos || (StatusPedidos = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedidos {
    constructor() {
        this.status = StatusPedidos.AguardandoPreparo;
        this.produtos = [];
    }
    adicionarProduto(produtos) {
        this.produtos.push(produtos);
        return "Produto adicionado com sucesso ";
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutosDoPedidos() {
        console.log("Produtos do pedidos: ");
        for (let index = 0; index < this.produtos.length; index++) {
            console.log("Produto: " + this.produtos[index].nome + " R$ " + this.produtos[index].valor.toFixed(2));
        }
    }
}
const produtoPedido = new ProdutoPedido("X-tudo", 30);
const outroProdutoPedido = new ProdutoPedido("X-burguer", 16);
const novoPedido = new Pedidos();
novoPedido.adicionarProduto(produtoPedido);
novoPedido.adicionarProduto(outroProdutoPedido);
console.log("Status atual do pedido: " + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedidos.ClienteAusente);
console.log("status atual do pedido: " + novoPedido.exibirStatus());
+novoPedido.exibirProdutosDoPedidos();
