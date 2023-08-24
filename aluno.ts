class Estudante{
    nome:string;
    idade:number;
    nota:number[];

    constructor(nome:string, idade:number,nota:number[]){
        this.nome=nome;
        this.idade=idade;
        this.nota=nota;
    
    }

    apresentacao(){
        return "Aluno: "+this.nome+" Idade: "+this.idade+" anos  Notas:"+this.nota;
    }

    Calculo(){
       
        let soma = 0;
        for (let i = 0; i < this.nota.length; i++) {
        soma += this.nota[i];
        }
        const media = soma / this.nota.length;
       
        if(media< 7){
            return this.nome + ", sua média é "+ media + "  e você precisa estudar mais para melhorar seu desempenho. "
        }

        return "Parabéns, "+ this.nome+ " Sua média é "+ media+" e você está aprovado(a).";
       

    }
} 

let Aluno1=new Estudante("Maria",20,[8,7.5,9.2,6.8,9.5]);
console.log(Aluno1.apresentacao());
console.log(Aluno1.Calculo());
