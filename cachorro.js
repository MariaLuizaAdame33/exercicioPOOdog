"use strict";
class Cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentar() {
        return "Oi, eu sou " + this.nome + " um " + this.raca + " de " + this.idade + " anos";
    }
    apresentarPara(humano) {
        return "Ola " + humano + " eu sou " + this.nome + " um " + this.raca + " de " + this.idade + " anos";
    }
}
let nina = new Cachorro("Nina", "Basset", 1);
let akira = new Cachorro("Akira", "Vira lata", 3);
let julia = new Cachorro("Julia", "garota", 16);
console.log(nina.nome);
console.log(akira.nome);
console.log(nina.apresentar());
console.log(akira.apresentar());
console.log(nina.apresentarPara("Maria"));
console.log(akira.apresentarPara("Maria"));
