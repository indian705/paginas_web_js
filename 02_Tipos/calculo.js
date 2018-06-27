function sumar(a, b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else {
        resultado = Number(a) + Number(b)
        // resultado = +a + +b
        //resultado = parseFloat(a) + parseFloat(b)
    }
    return resultado
}

function restar(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else {
        resultado = a - b
    }
    return resultado
}

function multiplicar(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else {
        resultado = a * b
    }
    return resultado
}

function dividir(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else if (b==0) { resultado = "No se puede dividir por 0"}
    else {
        resultado = a / b
    }
    return resultado
}

function calcularModulo(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else {
        resultado = a % b
    }
    return resultado
}

function main() {
    let num1 = '22'
    let num2 = 4
    console.log(sumar(num1,num2))
    console.log(restar(num1,num2))
    console.log(multiplicar(num1,num2))
    console.log(dividir(num1,num2))
    console.log(calcularModulo(num1,num2))


}

main()
