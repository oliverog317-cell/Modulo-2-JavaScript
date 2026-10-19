let cuenta = {
    titular: "Carolina",
    saldo: 50000,

    mostarSaldo() {
        console.log(this.titular + ": " + this.saldo);
    },

    depositar(monto) {
        this.saldo = cuenta.saldo + monto;
    },

    extraer(monto) {
        if (monto <= saldo) {
            this.saldo = cuenta.saldo - monto;
        } else {
            console.log("Saldo insuficiente")
        }
    },
}

console.log(cuenta);