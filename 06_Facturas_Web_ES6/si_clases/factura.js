class Factura {
    constructor(empresa,total){
        this.empresa = empresa
        this.total = total
    }
    mostrar(){
        console.log(this)
    }
}

let f1 = new Factura('Boracay', 300)
f1.mostrar()



