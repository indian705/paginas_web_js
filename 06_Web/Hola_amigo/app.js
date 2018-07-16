function app () {

    domNombre = document.querySelector("#nombre")
    domBtnSaludar = document.querySelector("#btnSaludar")
    domBtnBorrar = document.querySelector("#btnBorrar")

    domNombre.addEventListener('input',leerDatos)
    domBtnSaludar.addEventListener('click', saludar)
    domBtnBorrar.addEventListener('click', borrar)
    
    function leerDatos(){
        console.log(domNombre.value)
    }

    function saludar(){
        console.log('Hola amigo')
    }
    function borrar(){
        console.log('Todavía no sé borrar')
    }
  
}

document.addEventListener('DOMContentLoaded', app)
