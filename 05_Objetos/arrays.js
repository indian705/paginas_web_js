let oDatos = {}
// oDatos = new Object()

let aDatos = [1,2]
// aDatos = new Array()

/* console.log(aDatos.length)
aDatos[10] = 4
console.log(aDatos)
console.log(aDatos.length)
console.log(typeof aDatos[7])
aDatos[6] = 'Pepe'
aDatos[5] = {} */

console.log(aDatos.concat([3,4]))
console.log(aDatos)

let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
aNombresOriginal = aNombres.join('|').split('|')
aNombres.sort()
console.log(aNombres)
console.log(aNombresOriginal)


aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
console.log(aNombres.slice(1,4))
console.log(aNombres)

let aElegidos = aNombres.splice(1,2)
console.log(aElegidos)
console.log(aNombres)

aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
aElegidos = aNombres.splice(1,2,'Carlos', 'Juan', 'Antonio')
console.log(aElegidos)
console.log(aNombres)

aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
aElegidos = aNombres.splice(1)
console.log(aElegidos)
console.log(aNombres)

aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
aElegidos = aNombres.splice(1)
console.log('Elegidos: ')
console.log(aElegidos)
console.log('Original: ')
console.log(aNombres)

aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
aElegidos = aNombres.splice(2,0,'Antonio')
console.log('Elegidos: ')
console.log(aElegidos)
console.log('Original: ')
console.log(aNombres)


aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
aClon=aNombres.slice(0,aNombres.length)
aClon.push('Juan')
console.log(aNombres)
console.log(aClon)

aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
aNombres.push(['Lorenzo', 'Herminia'])
console.log(aNombres)


let aNotas = [[10,7,8], [5,4,7], [6,3,2]]
console.log(aNotas[1][1])

aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
aNombres.push(...['Lorenzo', 'Herminia'])
console.log(aNombres)

