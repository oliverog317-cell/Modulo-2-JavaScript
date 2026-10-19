let cuenta = {
    titular: "Carolina",
    saldo: 50000,

    mostarSaldo() {
        console.log(this.titular + ": " + this.saldo);
    },

    depositar(monto) {
        this.saldo = cuenta.saldo + monto;
        console.log(this.saldo);
    },

    extraer(monto) {
        if (monto <= this.saldo) {
            this.saldo = cuenta.saldo - monto;
        } else {
            console.log("Saldo insuficiente")
        }
        console.log(this.saldo);
    },
}

console.log(cuenta);
