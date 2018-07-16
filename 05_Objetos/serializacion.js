let oPersona = {
    name: 'Pepe',
    edad: 33,
    saludar: function() {
        console.log(`Hola, me llamo ${this.name}`)
    }
}


console.log(JSON.stringify(oPersona))

console.log(typeof JSON.stringify(oPersona))


let aDatos = [2,3,4,5]

console.log(typeof JSON.stringify(aDatos));
console.log('Tengo un string '+ JSON.stringify(aDatos));


