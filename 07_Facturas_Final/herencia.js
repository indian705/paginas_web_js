class Persona{
    constructor(nombre, edad, pais = 'España'){
        this.nombre = nombre
        this.edad = edad
        this.pais = pais
    }
    mostrar() {
        console.log(this)
    }
    saludar() {
        let msg = `Hola soy ${this.nombre}, de ${this.pais}, y tengo ${this.edad} años`
        console.log( msg )
        return msg
    }
}

let p1 =  new Persona('Pepe', 34)
//p1.mostrar()

let p2 = new Persona('Rosa', 25)
//p2.mostrar()

let p3 = new Persona('Pierre', 41, 'Rep. Dominicana')
//p3.mostrar()


class Estudiante extends Persona {
    constructor (nombre, edad, pais, numMatricula, curso) {
        super(nombre, edad, pais)
        this.numMatricula = numMatricula
        this.curso = curso
    }
    saludar(){
        let msg = super.saludar()
        msg += ` y estudio ${this.curso}`
        console.clear()
        console.log(msg)
    }
}

e1 = new Estudiante('Juan', 21, 'España', '0034', 'Web')
//e1.mostrar()
e1.saludar()




