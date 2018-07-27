class App {
    constructor () {
        this.parrafoBoton = document.querySelector('#borrador')
        this.clonBoton = this.parrafoBoton.cloneNode()
        this.clonBoton.innerHTML = 'JA, JA'
        document.body.appendChild(this.clonBoton)
        this.parrafoBorrar = document.querySelector('#siguiente')

        this.parrafoBoton.addEventListener('click', ()=> {
            if (this.parrafoBorrar){
                this.parrafoBorrar.parentNode.removeChild(this.parrafoBorrar)
                this.parrafoBoton.classList.remove('boton')
                this.parrafoBorrar = null
            }
            
        })
    }    
}

document.addEventListener('DOMContentLoaded', 
    () => { new App () })

