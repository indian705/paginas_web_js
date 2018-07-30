function main() {
    document.querySelector('#btnPulsar')
        .addEventListener('click', pulsar)

    document.querySelector('main')
        .addEventListener('escribir', escribir)

    function pulsar(oEv) {
        oEv.target.dispatchEvent(
            new Event('escribir',{
                'bubbles':true,
            }))
    }

    function escribir(oEv) {
        document.querySelector('#output').innerHTML = 
            'He recibido un evento escribir'
    }
}

document.addEventListener('DOMContentLoaded', main)

