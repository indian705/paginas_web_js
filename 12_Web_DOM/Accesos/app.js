class App {
    constructor() {
        let nodo1 = document.querySelector('div p')
        console.dir(nodo1)
        let nodo2 = document.querySelector('.importante')
        console.dir(nodo2)
        let nodo3 = document.querySelector('#p1')
        console.dir(nodo3)
        let aNodos = document.querySelectorAll('p')
        console.dir(aNodos)
        /* aNodos.forEach(
            (nodo) => {nodo.innerHTML = 'Ja, ja'}
        ) */
        console.info('getElement....')
        console.dir(document.getElementById('p1'))
        console.dir(document.getElementsByTagName('p'))
        console.dir(document.getElementsByName('nombre'))
        console.dir(document.getElementsByClassName('importante'))

        let nodoMenu = document.querySelector('#main-menu')
        console.dir(nodoMenu)
        console.dir(document.querySelectorAll('li'))
        console.dir(nodoMenu.querySelectorAll('li'))

        console.dir(nodoMenu.childNodes)
        console.dir(nodoMenu.children)
        console.dir(nodoMenu.children[0])
        console.dir(nodoMenu.children[0].children[2])

        document.querySelector('#segundo').style.color = "brown"
        document.querySelector('nav>ul>li:nth-of-type(2)').style.color = "brown"
        nodoMenu.children[0].children[2].style.color = "green"
        console.dir(nodoMenu.parentElement)
        console.dir(nodoMenu.nextElementSibling)
        console.dir(nodoMenu.previousElementSibling)
        
    }
}

document.addEventListener('DOMContentLoaded', 
    () => { new App()})