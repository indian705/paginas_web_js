class Apps{
    constructor(){
        this.amigo = 'Pepe'
        this.isSaludar = true
        this.oBtn = document.querySelector('#btnDual')
        this.oOutput = document.querySelector('#saludo')
        this.asignarHandlers()
    }
    asignarHandlers() {
        //console.log(this)
        //this.oBtn.addEventListener('click',this.saludarOld.bind(this))
        this.oBtn.addEventListener('click',this.saludar.bind(this))
    }

    saludar(oE) {
        let msg = `Adiós ${this.amigo}`
        if (this.isSaludar){
            msg = `Hola ${this.amigo}`
        } 
        this.isSaludar = !this.isSaludar
        oE.target.innerHTML = this.isSaludar ? 'Hola' : 'Adiós'
        this.oOutput.innerHTML = msg

    }


    saludarOld(oE) {
        //console.log(oE.target)
        //console.log(this)
        if (this.isSaludar){
            console.log(`Hola ${this.amigo}`)
            //oE.target.innerHTML = 'Adiós'
            //this.isSaludar = false
        } else {
            console.log(`Adiós ${this.amigo}`)
            //oE.target.innerHTML = 'Hola'
            //this.isSaludar = true
        }
        this.isSaludar = !this.isSaludar
        oE.target.innerHTML = this.isSaludar ? 'Hola' : 'Adiós'

    }
}


document.addEventListener('DOMContentLoaded', () => new Apps())



// Seria lo mismo que 
// document.addEventListener('DOMContentLoaded', 
//        function () {new Apps()})


// Seia lo mismo que 
//function main() {
//    new Apps()
//}
// document.addEventListener('DOMContentLoaded', main)
