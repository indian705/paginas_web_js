class App {
    
    constructor () {
        this.aBtnMas = document.querySelectorAll('.mas')
        //this.textoMas = document.querySelector('.hide')

        this.aBtnMas.forEach(
            (btn,key) => {
                this.pos = key                
                btn.addEventListener('click', this.mostrar.bind(this))
                
            }
        )
    }
    mostrar(oE){
        let nodoBtn = oE.target
        console.log(this.pos)
        console.dir(oE)
        console.dir(nodoBtn)
        console.dir(this.aBtnMas)
        let nodoTxt = nodoBtn.previousElementSibling
        nodoTxt.classList.toggle('hide')
        if (nodoTxt.classList.contains('hide')){
            nodoBtn.textContent = "Ver más"
        } else{
            nodoBtn.textContent = "Ver menos"
            this.aBtnMas.forEach(
                (btn,k) => {
                console.log(`nodoBtn ${this.pos}`)
                console.log(`btn ${k}`)
                if (this.pos!=k && !nodoTxt.classList.contains('hide')){nodoTxt.classList.add('hide')}
                }
            )
        }
    }
}

document.addEventListener('DOMContentLoaded',
    () => {new App()})

