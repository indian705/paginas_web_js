function principal  () {
    let x = 25
    let verDatos = function () {
        console.log('Mostrando: ',x)
    }

    function pintarDatos() {
        console.log('Pintando: ',x)
    }

    pintarDatos()
    verDatos()
}

principal()
