class App {
    constructor () {
        this.aBtnMas = document.querySelectorAll('.mas')
        //this.textoMas = document.querySelector('.hide')

        this.aBtnMas.forEach(
            (btn) => {btn.addEventListener('click', this.mostrar.bind(this))}
        )
    }
    mostrar(oE){
        let nodoBtn = oE.target
        let nodoTxt = nodoBtn.previousElementSibling
        nodoTxt.classList.toggle('hide')
        if (nodoTxt.classList.contains('hide')){
            nodoBtn.textContent = "Ver más"
        } else{
            nodoBtn.textContent = "Ver menos"
        }
    }
}

document.addEventListener('DOMContentLoaded',
    () => {new App()})

