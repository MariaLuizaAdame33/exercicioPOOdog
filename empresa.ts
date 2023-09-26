abstract class Funcionario{

    private nome: string;
    protected salario: number;


    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }
    abstract salarioMensal(): number;
}

class Desenvolvedor extends Funcionario {

    constructor() { 
        super("Desenvolvedor", 2500);
       
    }

    salarioMensal(): number {
        return this.salario;
    }

}

class Gerente extends Funcionario {
    constructor() {
        super("Gerente", 3000)
    }

    salarioMensal(): number {
        return this.salario + ((this.salario/100) *10);
    }

}
const desenvolvedor1 = new Desenvolvedor();
console.log("O salário do desenvolvedor João é de :"+ desenvolvedor1.salarioMensal());

const gerente1 = new Gerente();
console.log("O salário do gerente José é de :"+ gerente1.salarioMensal());

const gerente2 = new Gerente();
console.log("O salário do gerente Josué é de :"+ gerente2.salarioMensal());
