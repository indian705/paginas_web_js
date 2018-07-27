class App {
    constructor () {
        this.contador=0
        this.nombre = document.querySelector('#nombre')
        this.btnComprobar = document.querySelector('#boton')
        this.resultado =  document.querySelector('#resultado')

        this.btnComprobar.addEventListener('click', this.comprobar.bind(this))
    }   
       
    comprobar(){
        let aReyes = ['Fernando', 'Isabel', 'Carlos', 'Felipe', 'Luis', 'José', 'Amadeo', 'Alfonso', 'María Cristina', 'Juan Carlos']
        let resul = 0
        aReyes.forEach(
            (rey) => {
                //console.log(rey)
                //console.log(this.nombre.value)
                if (this.nombre.value === rey){
                    this.resultado.textContent= 'Enhorabuena, has acertado'
                    this.contador++
                    resul=1
                } 
            }
        )
        if (!resul) {
            this.resultado.textContent= 'Has fallado, sigue intentándolo'
        }
        
    }
}

document.addEventListener('DOMContentLoaded', 
    () => { new App () })

