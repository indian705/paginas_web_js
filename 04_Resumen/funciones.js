//Declaración


// Calcular el área de diversas figuras

/**
 * 
 * Calcular area de diversas figuras
 * 
 * @param:string nombre de la figura
 * @param:object  datos de la figura
 *  si es triangulo h y b
 *  si es cuadrado l
 *  si es circulo r
 * @return:number   area de la figura
 * 
 */

function calcularArea(figura,datos){
    let resultado = 0
    switch (figura.toLowerCase()) {
        case 'triangulo':
        case 'triángulo':
            resultado = (datos.h * datos.b) / 2           
            break;
        case 'cuadrado':
            resultado = datos.l * datos.l
            break;
        case 'circulo':
        case 'círculo':
            resultado = Math.PI * datos.r * datos.r
            break;
        default:
            throw('Operación o permitida')
            break;
    }
    return resultado.toFixed(2)

}

//Uso o invocación

function probar(){
    let sFigura = 'triángulO'
    let oDatos = {h:12, b:10}
    
    console.log(calcularArea(sFigura,oDatos))
    sFigura = 'Cuadrado'
    oDatos =  {l:10}
    console.log(calcularArea(sFigura,oDatos))

    sFigura = 'Círculo'
    oDatos =  {r:5}
    console.log(calcularArea(sFigura,oDatos))

}

try{
    let sFigura = 'pentagono'
    let oDatos = {}
    console.log(calcularArea(sFigura, oDatos))
} catch(error){
    console.log(error)
}

probar()
