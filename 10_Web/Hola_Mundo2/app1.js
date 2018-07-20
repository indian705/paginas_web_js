
function app() {
    let amigo = "Pepe"
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
    document.querySelector('#btnDespedir')
    .addEventListener('click',despedir)
    
  function saludar() {
        console.log(`Hola ${amigo}`)
    }
  function despedir() {
    console.log(`Adiós ${amigo}`)
    }
}

(function () {
    document.addEventListener('DOMContentLoaded', app)
})()

//  En la práctica es lo mismo que 
// document.addEventListener('DOMContentLoaded', app)