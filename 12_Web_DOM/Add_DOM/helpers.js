 /**
 * Define el comportamiento de un boto
 * 
 * @param {string} boton 
 * @param {string} container 
 */
export function addBoton(boton, container) {
    let btnAceptar = document.querySelector(boton)
    btnAceptar.addEventListener('click', () => {
        btnAceptar.disabled = true
        setTimeout( () =>{
            let nodo = document.querySelector(container)
            nodo.parentNode.removeChild(nodo) 
        }, 2000)
    })
}