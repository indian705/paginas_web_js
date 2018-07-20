function app () {

    //Defino los nodos del DOM que me interesan
    let domNombre = document.querySelector("#nombre")
    let domBtnSaludar = document.querySelector("#btnSaludar")
    let domBtnBorrar = document.querySelector("#btnBorrar")
    let domOutput = document.querySelector("#output")

    //Defino los manejadores de eventos de algunos nodos
    domNombre.addEventListener('input', leerDatos)
    domNombre.addEventListener('change', detectarChange)
    domBtnSaludar.addEventListener('click', saludar)
    domBtnBorrar.addEventListener('click', borrar)
        
    function leerDatos() {
        let valorNombre = domNombre.value
        console.log('Input detectado')
        console.log('valorNombre: ', valorNombre)
        domOutput.innerHTML = `Hola, <strong>${valorNombre}</strong>`
    }


    function detectarChange(){
        let finalNombre = domNombre.value
        console.log('Change detectado')
        console.log('finalNombre: ', finalNombre)
    }

    function saludar(){
        console.log('Hola amigo')
    }
    function borrar(){
        console.log('Todavía no sé borrar')
    }
  
}

//window.addEventListener('load', app)
document.addEventListener('DOMContentLoaded', app)
