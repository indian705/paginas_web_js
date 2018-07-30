function main1(){
    /* document.body.addEventListener('mousemove', (ev) => {
        console.log(ev.clientX, ev.clientY)
    }) */
    let aDivs = document.querySelectorAll('section div')
    aDivs.forEach((div) => {
        div.addEventListener('mouseover',
            () => {div.style.backgroundColor = 'green'})
        div.addEventListener('mouseout',
            () => {div.style.backgroundColor = 'brown'})

    })
}

function main(){
    let aDivs = document.querySelectorAll('section div')
    aDivs.forEach((div) => {
        div.addEventListener('mouseover', hover)        
        div.addEventListener('mouseout', hover)

    })

    document.querySelector('footer a')
        .addEventListener('click', navegar)


    function hover(oE){
        //console.dir(oE)
        //En este caso, al no ser un método hover, this es el objeto que ha disparado el evento
        if(oE.type == 'mouseover'){
            //Primera forma: con this
            this.style.backgroundColor = 'green'
        } else{
            //Segunda forma: con oE.target.  Ésta es la que se usaría si hubiera un método manejador
            //porque habríamos puesto bind.this y this no valdría.
            oE.target.style.backgroundColor = 'brown'
        }
    }

    function navegar (oE) {
        oE.preventDefault()
        console.log('Navegando')
        let res = confirm('¿Estás seguro?')
        if (res) {
            location.assign('https://www.google.com')
        }
    }

}

document.addEventListener('DOMContentLoaded', main)
//window.addEventListener('load', main)