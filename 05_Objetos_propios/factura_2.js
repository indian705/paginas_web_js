
let factura1 = {}

factura1.empresa = {
    nombre: 'Emp1',
    direccion:'Dire1',
    telefono: '123',
    nif: '24Z'
}
factura1.cliente = {
    nombre: 'Cl1',
    direccion:'Dirc1',
    telefono: '123',
    nif: '24Z'
}
factura1.elementos = [] 

factura1.elementos[0] = {
    descripcion:'Libro1',
    precio:30,
    cantidad:5
}

factura1.elementos[1] = {
    descripcion:'Libro2',
    precio:25,
    cantidad:12
}

factura1.elementos[2] =  {
    descripcion:'Libro3',
    precio:8,
    cantidad:20
}

factura1.importeTotal = 0
factura1.tipoIva = 1.04
factura1.formaPago = 'Transferencia'


factura1.calculaImporteTotal = function(){
    //Este método tiene que actualizar el valor de la propiedad correspondiente
    //this.importeTotal
    this.elementos.forEach(
        item => this.importeTotal += item.precio*item.cantidad*this.tipoIva
    )
}
factura1.mostrar = function (){
    //Este método muestra por pantalla el importe total de la factura en un formato HTML adecuado
    this.calculaImporteTotal()
    this.pintaDatos()
}

factura1.pintaDatos = function (oDatos = this) {
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


factura1.mostrar()



