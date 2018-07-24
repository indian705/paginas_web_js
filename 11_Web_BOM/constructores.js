function Persona (nombre,edad){
    this.nombre = nombre
    this.edad = edad
}

Persona.prototype.saludar = function() {
    console.log (`Hola, soy ${this.nombre}`)
}

let p1 = new Persona('Pepe', 23)
let p2 = new Persona('Juan', 24)
p1.saludar()

p2.empresa = 'Oracle'
Persona.prototype.empresa = 'IBM'
console.log(p1)
console.log(p1.empresa)
console.log(p2.empresa)
console.log(p2)

