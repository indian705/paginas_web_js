class App {

    constructor () {
        /* this.btnTop = document.querySelector('#btn-top')
        this.divTop = document.querySelector('#div-top')
        
        this.parrafoHeader = document.querySelector('header p')
        */

       this.aNodosMenu = document.querySelectorAll('.menu-desk a')
       this.aNodosSection = document.querySelectorAll('main section')

        this.header = document.querySelector('header')
        this.bajoHeader = document.querySelector('#bajo-header')
        this.nodoh1 = document.querySelector('h1')

        
        /* this.btnTop.addEventListener('click', this.subir.bind(this))  */

        this.menuHamburguesa = document.querySelector('#menu-hamburguesa')
        this.contenidoHamburguesa = document.querySelector('#contenido-hamburguesa')
        this.itemHamburguesa = document.querySelectorAll('#contenido-hamburguesa a')

        this.aOffset = []
        this.calcularOffsets()
        this.seccionActiva = 0

        document.addEventListener('scroll', this.scrollDetect.bind(this) )

        this.menuHamburguesa.addEventListener('click', this.desplegarMenu.bind(this))
        this.itemHamburguesa.forEach(
            (item)=>{item.addEventListener('click', this.replegarMenu.bind(this))}
        )
        this.aNodosMenu.forEach(
            (nodoMenu) => {
                //console.log(nodoMenu)
                nodoMenu.addEventListener('click', this.navegar.bind(this))}
        ) 
        
    }   

    desplegarMenu(){
        this.contenidoHamburguesa.classList.toggle('hide-menu')

    }

    replegarMenu(){
        this.contenidoHamburguesa.classList.add('hide-menu')
    }
    
    scrollDetect (oE) {
        let position = oE.target.scrollingElement.scrollTop
        let index
        this.aOffset.every(
            (offset, i) => {
                if (position >= offset) {
                    index = i
                    return true
                } else {return false}
               

            }
        )
        //console.log(index)
        if (this.seccionActiva != index) {
            this.aNodosMenu.forEach(
                (nodoMenu) => {nodoMenu.classList.remove('active')}
            )
            this.aNodosMenu[index].classList.add('active')   
            this.seccionActiva = index
        }
        if (position> 30) {
            this.header.classList.add('sticky-header')
            this.header.classList.remove('normal-header')
            this.nodoh1.classList.add('hide')
            //this.parrafoHeader.classList.add('hide')
            this.bajoHeader.classList.add('bajo-header')
            this.bajoHeader.classList.remove('hide')
        } else {
            this.header.classList.remove('sticky-header')
            this.header.classList.add('normal-header')
            this.nodoh1.classList.remove('hide')
            //this.parrafoHeader.classList.remove('hide')
            this.bajoHeader.classList.remove('bajo-header')
            this.bajoHeader.classList.add('hide')
        }
        /* if (oE.target.scrollingElement.scrollTop > 100) {
            this.divTop.classList.remove('hide')
        } else {
            this.divTop.classList.add('hide')
        } */
    }

    navegar(oE) {
        let i = oE.target.dataset.index
        
        oE.preventDefault()
        window.scroll({
            top: this.aOffset[i], 
            left: 0, 
            behavior: 'smooth'
        })
        

    }

    calcularOffsets(){
        this.aNodosSection.forEach(
            (section) => {
                
                this.aOffset.push(section.offsetTop-200)
            }
        )
        this.aOffset[0] = 0
        //console.log(this.aOffset)
    }

    subir(oE) {
        
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        })
    }
}

document.addEventListener('DOMContentLoaded', ()=> {new  App()})

