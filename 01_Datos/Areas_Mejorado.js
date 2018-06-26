function calcularArea(radio){
    return (Math.PI*radio*radio).toFixed(2)
}

function mostrar(area){
    let mensaje='El resultado es'
    console.log(mensaje, area)
}

function mostrarArea(radio, area){
    /*  let mensaje = 'El area del circulo de radio '
    mensaje += radio
    mensaje += ' es '
    mensaje += circulo */
    /* Otra forma resumida:
    let mensaje='El área del círculo de radio '
    mensaje += radio + ' es ' + area */
    let mensaje = `
    Resultado:
    El área del círculo de radio ${radio} es ${area}`
    console.log(mensaje)
}

function calcularCircunf(radio){
    return (2*Math.PI*radio).toFixed(2)
}

function mostrarCircunf(radio,circunf){
    let mensaje = `    La circunferencia de radio ${radio} es ${circunf}`
    console.log(mensaje)
}

function main(){
    let radio = 4
    mostrarArea(radio,calcularArea(radio))
    mostrarCircunf(radio,calcularCircunf(radio))
    radio = 7
    mostrarArea(radio,calcularArea(radio))
    mostrarCircunf(radio,calcularCircunf(radio))
}

main()



