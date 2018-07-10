/**Números primos del 1 al 100
 * 
 * 
 * 
 */

function calc_Numeros_Primos(){
    for (let i = 1; i < 100; i++) {
        let resul=`El número ${i} es primo`
        let tipo='primo'
        
        for (let j = 2; j < i; j++) {
            if (i%j==0){
                j=i
                tipo='no primo'
                
            }
        }
        if (tipo='primo'){
            /* return resul */
            console.log(resul)
        }


    }
}

calc_Numeros_Primos()
 