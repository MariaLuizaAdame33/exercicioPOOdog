class Produto{
    nome:string;
    valor:number;

    constructor(nome:string, valor:number){
        this.nome=nome;
        this.valor=valor;
    }

    apresentar(){
        return "-Produto: "+this.nome + " 64GB branco, Tela de 6,1”, Câmera Dupla de 12MP, iOS.  " + "Valor:R$"+this.valor;
    }

    desconto(desconto:number){
        let valorDesconto= (this.valor/100)*desconto;
        return "Desconto de "+desconto+"% aplicado. Novo preço "+ (this.valor-valorDesconto);
    }
}

let Produto1=new Produto("iPhone 11 Apple",2700);
console.log(Produto1.apresentar());
console.log(Produto1.desconto(10));

let Produto2=new Produto("Apple iPhone 14 Pro Max",11300);
console.log(Produto2.apresentar());
console.log(Produto2.desconto(10));

let Produto3=new Produto("Apple iPhone 13",4500);
console.log(Produto3.apresentar());
console.log(Produto3.desconto(10));


