let oVuelo = {
    airline:'',
    number:'',
    departure : {
        clave_IATA : '',
        time: '',
        ciudad: ''
    },
    arival: {
        clave_IATA : '',
        time: '',
        ciudad: ''
    },
    mostrarEnBruto: function() {
        console.log(this)
    }
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

// Los objetos tienen una propiedad [[Prototype]]
// accesible con Object.getPrototypeOf() 

console.log('prototype: ', Object.getPrototypeOf( oVuelo ))


// Objetos creados mediante Object.create
// Implementación en ES5 del patrón de 
// herencia prototípica (prototypical inheritance)
// planteado por Douglas Crockford

let oVuelo1 = Object.create(oVuelo)
console.log('*** El objeto creado ***')
console.dir(oVuelo1)
console.log('type; ', typeof oVuelo1)
console.log('¿Instancia de Object? ', oVuelo instanceof Object);

// inspect the object sub-type
console.log('prototype type: ', Object.prototype.toString.call( oVuelo1 ))
console.log('prototype: ', Object.getPrototypeOf( oVuelo1 ))
console.log('prototype constructor: ', Object.prototype.constructor)



// modificando una propiedad que existe en el prototipo : shadowing
oVuelo1.airline = "Iberia"
console.dir(oVuelo1)

// Objeto clonado mediante Object.assign
let oVuelo2 = {}
Object.assign(oVuelo2, oVuelo)
console.log('*** El objeto clonado ***')
console.dir(oVuelo2)