/* function saludar (edad){
    let sal
    if (edad < 12) {
        sal='Hola chaval'
    }
    else if (edad < 30) {
        sal='Hola colega'
    }
    else if (edad < 70) {
        sal='Buenos días'
    }
    else {
        sal='Saludos, maestro'
    }
    return sal       
} */

function saludar (edad) {
    let aMensajes = [
        'Hola chaval', 
        'Hola colega', 
        'Buenos dias', 
        'Saludos, maestro'
    ]
    let mensaje = 3
    if ( edad < 18) {
        mensaje = 0
    } else if ( edad  <30 ) {
        mensaje = 1
    } else if ( edad  <70 ) {
        mensaje = 2
    }
    return aMensajes[mensaje];
}

/* let edad=8
let mensaje = `Si tu edad es ${edad}, ${saludar(edad)}`
console.log(mensaje) */



function probar () {
    let edad = 10
    console.log(`Si tu edad es ${edad}`, saludar(edad)) // Hola chaval
    edad = 19
    console.log(`Si tu edad es ${edad}`, saludar(edad)) // Hola colega
    edad = 40
    console.log(`Si tu edad es ${edad}`, saludar(edad)) // Buenos dias
    edad = 80
    console.log(`Si tu edad es ${edad}`, saludar(edad)) // Saludos, maestro
}

probar()

// Ejemplo del uso de los falsies en un IF

let a = []

//if ( a.length != 0) {
if (a.length) {
    probar(a)
} else {
    console.log('Adios')
}


// if ( a.length == 0) {
if (!a.length) {
    console.log('Adios')
} else {
    probar(a)
}