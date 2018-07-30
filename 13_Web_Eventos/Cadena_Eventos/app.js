function main() {
    document.querySelector('button')
        .addEventListener('click', responder)

    document.querySelector('form')
        .addEventListener('click', responder)
    
    document.querySelector('div')
        .addEventListener('click', responder)    

    document.querySelector('section')
        .addEventListener('click', responder)
    
    document.querySelector('main')
        .addEventListener('click', responder)
    
    document.querySelector('body')
        .addEventListener('click', responder)


    function responder (ev) {
        console.dir(ev);
        console.log ('Has pulsado en el', ev.target.type )
    }
}

document.addEventListener('DOMContentLoaded',main)

