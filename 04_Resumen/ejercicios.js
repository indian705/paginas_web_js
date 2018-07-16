/**Números primos del 1 al 100
 * 
 * 
 * 
 */

function calcNumerosPrimos(){
    for (let i = 1; i < 100; i++) {
        let resul=`El número ${i} es primo`
        let tipo='primo'
        
        for (let j = 2; j < i; j++) {
            if (i%j==0){
                j=i
                tipo='no primo'
                
            }
        }
        if (tipo=='primo'){
            /* return resul */
            console.log(resul)
        }
    }
}

function calcSerieFibonacci(lim){
    let aSerie=[0,1]
    let i=1
    while (aSerie[i]<lim) {
        i++
        aSerie[i] = aSerie[i-1]+aSerie[i-2]        
    }         
    console.log(aSerie)
}

//calcNumerosPrimos()
calcSerieFibonacci(20)

function buscarNombres(nombre){
    let aLista=['Fernando','Isabel','Juana','Carlos','Felipe','Luis','Jose','Amadeo','Alfonso','Juan Carlos']
    let mensaje = `El nombre ${nombre} no está en la lista`
    for (const i in aLista) {
        if (nombre.toLowerCase()==aLista[i].toLowerCase()) {
            mensaje = `El nombre ${nombre} está en la lista`
            break
        }
    }
    return mensaje
} 

console.log(buscarNombres('Gema'))

function quitarTildes(string){
    let aDatos=string.split('')
    for (const key in aDatos) {
        switch (aDatos[key].toLowerCase()) {
            case 'á':
                aDatos[key] = 'a'
                break;
            case 'é':
                aDatos[key] = 'e'
                break;
            case 'í':
                aDatos[key] = 'i'
                break;
            case 'ó':
                aDatos[key] = 'o'
                break;
            case 'ú':
                aDatos[key] = 'u'
                break;
            default:
                
                break;                           
        }
    }
    return aDatos.join('')  

}

let texto='cantar'
console.log(quitarTildes(texto))
texto='canción'
console.log(quitarTildes(texto))