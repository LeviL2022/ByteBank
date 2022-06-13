export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this.saldo = saldoInicial;
        this.cliente = cliente;
        this.agencia = agencia;

    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.cliente = novoValor;
        }
    }

    get cliente() {
        return this.cliente;

    }

    get saldo() {
        return this.saldo;
    }

    sacar(valor) {

        let taxa = 1
        const valorSacado = taxa * valor;
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        this.saldo += valor;
    }


    transferir(valor, conta) {

        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}
