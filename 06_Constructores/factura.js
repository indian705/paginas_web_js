function Empresa (nombre, direccion, telefono, nif){
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}
function Elemento(descripcion,precio,cantidad){
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
}

function Factura(empresa,cliente,tipoIVA,formaPago){
    this.empresa = empresa
    this.cliente = cliente
    this.elementos = []
    this.importeTotal = 0
    this.tipoIva = tipoIVA
    this.formaPago = formaPago
    this.calculaImporteTotal = function(){
        //Este método tiene que actualizar el valor de la propiedad correspondiente
        this.importeTotal=0
        this.elementos.forEach(
        item => this.importeTotal += item.precio*item.cantidad*this.tipoIva
        )
    }
    this.mostrar = function (){
        //Este método muestra por pantalla el importe total de la factura en un formato HTML adecuado
        this.calculaImporteTotal()
        this.pintaDatos(this)
    }
    this.pintaDatos = function (oDatos = this) {
        for (const key in oDatos) {
            if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
                if (typeof oDatos[key] === 'object'){
                    if (isNaN(key)) { 
                        console.log(`Propiedades de ${key}: `)
                    }
                    this.pintaDatos(oDatos[key])
                } else {
                    console.log(`${key}: ${oDatos[key]}`)
                }    
            }    
        }
    }
}

let empresa = new Empresa ('Emp1','Dir1','Tfn1','NIF1')
let cliente = new Empresa ('Emp2','Dir2','Tfn2','NIF2')
//let elemento1 = new Elemento ('Libr1', 30, 5)
//let elemento2 = new Elemento ('Libr2', 25, 12)
//let elemento3 = new Elemento ('Libr3', 8, 20)


function crearFactura1(){
    

}
    let factura1 = new Factura (empresa,cliente,1.04,'contado')
factura1.elementos.push(new Elemento ('Libr1', 30, 5))
factura1.elementos.push( new Elemento ('Libr2', 25, 12))
factura1.elementos.push(new Elemento ('Libr3', 8, 20))

factura1.mostrar()
