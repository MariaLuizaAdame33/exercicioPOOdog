"use strict";
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
class Desenvolvedor extends Funcionario {
    constructor() {
        super("Desenvolvedor", 2500);
    }
    salarioMensal() {
        return this.salario;
    }
}
class Gerente extends Funcionario {
    constructor() {
        super("Gerente", 3000);
    }
    salarioMensal() {
        return this.salario + ((this.salario / 100) * 10);
    }
}
const desenvolvedor1 = new Desenvolvedor();
console.log("O salário do desenvolvedor João é de :" + desenvolvedor1.salarioMensal());
const gerente1 = new Gerente();
console.log("O salário do gerente José é de :" + gerente1.salarioMensal());
const gerente2 = new Gerente();
console.log("O salário do gerente Josué é de :" + gerente2.salarioMensal());
