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

function esPar(x){
    let isPar = true
    if (x % 2 != 0) {isPar=false}
    return isPar    
}
let num = 5
let mensaje = `¿El número ${num} es par? ${esPar(num)}`

console.log(mensaje)
