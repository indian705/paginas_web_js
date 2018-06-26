function calcularArea(radio){
    let area
    area=Math.PI*radio*radio
    return area
}

function mostrar(area){
    let mensaje='El resultado es'
    console.log(mensaje, area)
}


function main(){
    let radio = 4
    let area = calcularArea(radio)
    mostrar(area)
    radio = 7
    area = calcularArea(radio)
    mostrar(area)
}

main()



