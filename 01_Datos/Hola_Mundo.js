/** Declaración */
var saludo
/** Inicialización */
saludo = 'Hola'

/** Declaración + Inicialización */
var user = 'Mundo'


/*
Tipos de datos
- string
- number
- booleans (true / false)
- object
- undefined
*/



/** Tipos de Datos */
var nombre = 'Pepe' // string
var edad = 23 // number
var isEstudiante = false // boolean
var algo // undefined
// Objeto en notación JSON
var persona = {
    nombre: 'Juan',
    edad: 34,
    isEstudiante: true
}

/** Como es JS respecto a los tipos
 * - debil 
 * - dinámico
 */

console.log(saludo, user)
console.log(nombre, typeof nombre)
console.log(edad, typeof edad)
console.log(isEstudiante, typeof isEstudiante)
console.log(algo, typeof algo)
console.log(persona, typeof persona)
console.log(persona.nombre, typeof persona.nombre)