/* let oDatos = {edad:22}
//Es lo mismo que oDatos2=new Object()
oDatos.nombre='Pepe'
oDatos['apellido']='Pérez'
 */


let oDatos = {
    nombre:'Pepe',
    apellido:'Pérez',
    edad:22
}
oDatos.profesion = 'programador'

console.log(oDatos)

let x=22
x *= 2
oDatos.edad *= 3

let oVuelo = {
    airline : 'Oceanic',
    number: '815',
    salida: {
        clave_IATA: 'SYD',
        datetime: '2004-09-22 14:55',
        ciudad: 'Sydney'
    },
    llegada:{
        clave_IATA: 'LAX',
        datetime: '2004-09-23 10:42',
        ciudad: 'Los Angeles'
    },
}

oVuelo.calcularPasajeros = function () {
}


oVuelo.mostrar = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                console.log(`Las propiedades de ${key} son: `)
                this.mostrar(oDatos[key])
            } else {
                console.log(`La propiedad ${key} vale ${oDatos[key]}`)
            }    
        }    
    }
}





//console.log(oVuelo)

function leeObjeto(oDatos){
    for (const key in oDatos) {
        if (typeof oDatos[key]==='object'){
            console.log(`Las propiedades de ${key} son:`)
            leeObjeto(oDatos[key])
        }
        else{
            console.log(`La propiedad ${key} vale ${oDatos[key]}`)
        }
    }
}

//leeObjeto(oVuelo)

console.clear()
oVuelo.mostrar()


