enum StatusPedidos{
    AguardandoPreparo= "Aguardando o preparo",
    EmPreparo= "Em Preparo",
    SaiuParaEntrega="Saiu Para Entrega",
    Entregue="Entregue",
    ClienteAusente="Pedido não entregue,Cliente não encontrado"
}

class ProdutoPedido{
    nome:string;
    valor:number;

    constructor(nome:string,valor:number){
        this.nome=nome;
        this.valor=valor;
    }
}

class Pedidos{
    private produtos:ProdutoPedido[];
    private status:StatusPedidos;
    constructor(){
        this.status= StatusPedidos.AguardandoPreparo;
        this.produtos=[];
    }

    adicionarProduto(produtos: ProdutoPedido) {
        this.produtos.push(produtos);
        return "Produto adicionado com sucesso "

    }

    atualizarStatus(status:StatusPedidos){
        this.status= status;
    }

    exibirStatus(){
        return this.status
    }

    exibirProdutosDoPedidos(){
        console.log("Produtos do pedidos: ");
        for(let index=0;index < this.produtos.length; index++){
            console.log("Produto: "+this.produtos[index].nome+" R$ "+this.produtos[index].valor.toFixed(2));
        }
    }
}

const produtoPedido=new ProdutoPedido("X-tudo",30);
const outroProdutoPedido=new ProdutoPedido("X-burguer",16);
const novoPedido=new Pedidos();
novoPedido.adicionarProduto(produtoPedido);
novoPedido.adicionarProduto(outroProdutoPedido);
console.log("Status atual do pedido: "+novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedidos.ClienteAusente);
console.log("status atual do pedido: "+novoPedido.exibirStatus());
+novoPedido.exibirProdutosDoPedidos()







