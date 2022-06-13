class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }   

    sacar(valor) {
        if (valor > this._saldo) {
            console.log('Saldo insuficiente');
        } this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor (agencia, numero, cartãoCredito){
        super(agencia, numero);
        this.tipo = 'Corrente';
        this._cartãoCredito = cartãoCredito;
}
    get cartãoCredito(){
        return this._cartãoCredito;
    }

    set cartãoCredito(valor){
        this._cartãoCredito = valor;
    }
    
}
class contaPoupanca extends contaBancaria{
    constructor (agencia, numero,){
        super(agencia, numero,);
        this.tipo = 'Conta poupança';
}
} 

class contaUniversitaria extends contaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = 'Conta universitária';
}

    sacar(valor){
        if(valor > 500){
        return "Operação Negada";
        }
        this._saldo = this._saldo - valor;
    }
}