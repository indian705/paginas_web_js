function isPalindromo(cadena) {

    // Array con cada palabra
    let aDatos = cadena.split(' ')
    // Reconstruyo la frase 
    let frase = aDatos.join('')
    // Array con cada letra
    aDatos= frase.split('')
    // Clon del array con cada letra
    aClon = aDatos.join('|').split('|')
    // Clon del array al reves
    aClon.reverse()
    // frase invertida
    let alReves = aClon.join('')

    let result = false
    // comparacion
    if (frase.toUpperCase() === alReves.toUpperCase()) {
        result = true
    }

    return result
}

function isPaliShort(cadena) {
    let resul=false
    if (cadena.toLowerCase().split(' ').join('') === cadena.toLowerCase().split(' ').join('').split('').reverse().join('')){
        resul=true
    }       
    return resul
}

function probar(){
    letcadena'Hola, no soy palíndromo'
    console.log(isPaliShort(texto))  //False
    texto = 'Luz azul'
    console.log(isPaliShort(texto))  //True
}

probar()
