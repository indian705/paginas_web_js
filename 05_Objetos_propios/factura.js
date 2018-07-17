let factura = {
    empresa: {
        nombre: '',
        direccion:'',
        telefono: '',
        nif: ''
    },
    cliente: {
        nombre: '',
        direccion:'',
        telefono: '',
        nif: ''
    },
    elementos : [
        {descripcion:'',
        precio:'',
        cantidad:''},
        {descripcion:'',
        precio:'',
        cantidad:''},
        {descripcion:'',
        precio:'',
        cantidad:''},
    ],
    importeTotal:'',
    tipoIva:'',
    formaPago:''
}

factura.calculaImporteTotal = function(){
    //Este método tiene que actualizar el valor de la propiedad correspondiente

}
factura.mostrar = function (){
    //Este método muestra por pantalla el importe total de la factura en un formato HTML adecuado
}

let factura1 = {
    empresa: {
        nombre: 'Emp1',
        direccion:'Dire1',
        telefono: '123',
        nif: '24Z'
    },
    cliente: {
        nombre: 'Cl1',
        direccion:'Dirc1',
        telefono: '123',
        nif: '24Z'
    },
    elementos : [
        {descripcion:'Libro1',
        precio:30,
        cantidad:5},
        {descripcion:'Libro2',
        precio:25,
        cantidad:12},
        {descripcion:'Libro3',
        precio:8,
        cantidad:20},
    ],
    importeTotal:0,
    tipoIva:1.04,
    formaPago:'Transferencia'
}

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



