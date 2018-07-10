function iterar () {
    for (let i = 0; i < 3; i++) {
        console.log(`Soy la vuelta ${i+1}`)
    }
}

function iterar_while(){
    let i = 0
    while (i<3) {
        console.log(`Soy la vuelta ${i+1}`)
        i++
    }
}

function iterar_do(){
    let i = 0
    do{
        i++
        console.log(`Soy la vuelta ${i}`)
    } while (i<3)
}

iterar()
iterar_while()
iterar_do()


