class App {
    constructor() {
        this.inClave = document.querySelector('#inClave')
        this.btnBuscar = document.querySelector('#btnBuscar')

        this.btnBuscar.addEventListener('click', () => {
            let clave = this.inClave.value
            const URL = 'https://www.google.es/search?q='
            if (clave) {
                //location.href = URL + clave
                location.assign(URL + clave)
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', 
    () => {new App()})

