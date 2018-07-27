class App{
    constructor (){
        this.titulo = document.querySelector('h1')
        //this.titulo.style= 'color: brown; background-color: bisque'
        this.titulo.style.color = 'brown'
        this.titulo.style.backgroundColor = 'bisque'
    }
}

document.addEventListener('DOMContentLoaded', () => {new App()})