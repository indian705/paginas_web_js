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

 