class Conta{
    nome:string;
    saldo:number;

    constructor(nome:string,saldo:number){
        this.nome=nome;
        this.saldo=saldo;
    };   

    consultarSaldo(){
        return "-Olá " + this.nome +" seu saldo é de R$"+this.saldo;
    }
    
    depositoSaldo(deposito:number){
        this.saldo=this.saldo+deposito;
        return this.nome+" Você fez um deposito de R$ "+deposito+". Seu saldo é de R$ "+ this.saldo;
    }

    sacarSaldo(saque:number){
        
        let msgSaque = " Saque realizado com sucesso!";
        if(saque > this.saldo){
            msgSaque= " Saldo insuficiente";
        }else{
            this.saldo=this.saldo-saque;
        msgSaque= this.nome+msgSaque+" Voce fez um saque de "+ saque+". Seu saldo é de R$ "+ this.saldo;
           
        }
        return msgSaque;
    }

}

let Conta1=new Conta("João",1000);
console.log(Conta1.consultarSaldo());
console.log(Conta1.depositoSaldo(500));
console.log(Conta1.sacarSaldo(200));

let Conta2=new Conta("Maria",1000);
console.log(Conta2.consultarSaldo());
console.log(Conta2.depositoSaldo(500));
console.log(Conta2.sacarSaldo(300));

let Conta3=new Conta("Julia",1000);
console.log(Conta3.consultarSaldo());
console.log(Conta3.depositoSaldo(500));
console.log(Conta3.sacarSaldo(400));



