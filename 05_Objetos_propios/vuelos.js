let oVuelo = {
    airline:'',
    number:'',
    departure : {
        clave_IATA : '',
        time: '',
        ciudad: ''
    },
    arrival: {
        clave_IATA : '',
        time: '',
        ciudad: ''
    },
    mostrarEnBruto: function(){
        console.log(this)
    }
}

oVuelo.mostrar = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                console.log(`Propiedades de ${key}: `)
                this.mostrar(oDatos[key])
            } else {
                console.log(`${key}: ${oDatos[key]}`)
            }    
        }    
    }
}

// oVuelo.mostrar()

let oVuelo1 = Object.create(oVuelo)
oVuelo1.mostrarEnBruto()

console.log(typeof oVuelo1)
console.log(oVuelo instanceof Object)

