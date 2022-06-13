export class Cliente {

    get cpf() {
        return this.cpf;
    }
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}