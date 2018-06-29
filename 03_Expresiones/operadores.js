function incrementos () {
	let x = 23
let y
y = ++x // x= x+1 y luego y=x
y = x++ // y=x y luego x= x+1 
console.log(x,y)
y =--x // x= x-1 y luego y=x
y = x-- // y=x y luego x= x-1 
console.log(x,y)
}

function asignaciones () {
	let x = 2
	x += 1 // x = x + 1
	x = 2
	x -= 1
	x = 2
	x *= 3
	x = 2
	x /= 2
	x %= 2

}

// incrementos()
asignaciones()

function esPar (num) {
	let isPar = true
	if (typeof num != 'number'|| 
		 (num % 2)) {
		isPar = false
	} 
	return isPar
}


function esPar2 (num) {
	let isPar = false
	// compruebo si SI eres par: num % 2 == 0
	if (!num % 2) {
		isPar = true
	} 
	return isPar
}

function esParFinal (num){
	return (typeof num == 'number' && num % 2 == 0) ? true : false
}


let num = 5
let mensaje = `¿El número ${num} es par? ${esPar(num)}`


console.log('22 es par?', esPar(22))
console.log('25 es par?', esPar(25))
console.log('0 es par?', esPar(0))
console.log('Pepe es par?', esPar('Pepe'))
console.log('"" es par?', esPar(''))
console.log(' es par?', esPar())
console.log('true es par?', esPar(true))
console.log('false es par?', esPar(false))

console.log(mensaje)

// falsy: 
/* console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined)) */
// truly
/* console.log(Boolean(true))
console.log(Boolean(109))
console.log(Boolean('Pepe'))
 */
let a = 'Juan'
let b = 0
// compruebo si b == 0
if (!b) {
	a = 'Pepe'
}
console.log(a)
b = 4
// compruebo si b != 0
if (b) {
	a = 'Luis'
}
console.log(a)