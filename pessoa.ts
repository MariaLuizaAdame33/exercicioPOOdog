class Pessoa{
    nome: string;
    idade: number;
    comidas :string[];

    constructor(nome:string , idade:number , comidas:string[]){
        this.nome=nome;
        this.idade=idade;
        this.comidas=comidas;
    }

    cumprimentar(){
        let msgHabilitação = " ja posso tirar minha CNH";
        if(this.idade < 18){
            msgHabilitação= " Não posso tirar minha CNH";
        }
        return "Ola meu nome é "+ this.nome +" tenho "+ this.idade + "anos" +msgHabilitação+".";
    }

    comidasFavoritas(){
        console.log("Minha(s) comida(s) favoritas(s)");
        for(let i=0; i< this.comidas.length; i++){
            console.log(this.comidas[i]);
        }
    }

}

let Pessoa1=new Pessoa("Maria",16,["bolo" , "lasanha"]);
console.log(Pessoa1.cumprimentar());
console.log(Pessoa1.comidasFavoritas());

