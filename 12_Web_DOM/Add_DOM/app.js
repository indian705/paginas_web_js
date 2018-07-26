import {addBoton} from './helpers.js'

class App {
    constructor () {
        setTimeout(this.addInfoEnMedio.bind(this),2000)
    }

    addInfo () {
        let nodoElement = document.createElement('p')
        let nodoTexto = document.createTextNode('Este sitio utiliza cookies')
        nodoElement.appendChild(nodoTexto)
        document.body.appendChild(nodoElement)
    }

    addInfoModerno() {
        document.body.innerHTML += `
        <div class="aviso">
            <p>Este sitio utiliza cookies</p>
            <button type="button" id="btnAceptar">Aceptar</button>
        </div>`
        addBoton('#btnAceptar','.aviso')
    }

    addInfoEnMedio() {
        document.querySelector('#desaparecere').innerHTML = `
        <div class="aviso">
            <p>Este sitio utiliza cookies</p>
            <button type="button" id="btnAceptar">Aceptar</button>
        </div>`
        addBoton('#btnAceptar','.aviso')
    }

}

document.addEventListener('DOMContentLoaded', 
    () => { new App () })