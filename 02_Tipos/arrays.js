let aDatos = ['Pepe','Rosa','María']

console.log(typeof aDatos,aDatos)
aDatos[0] = 'Jose'
console.log(aDatos)
aDatos[aDatos.length]='Juan'
console.log(aDatos)
aDatos.push('Elena')
console.log(aDatos)

let aDatosFull = [
    {nombre: 'Pepe', puesto: 'Profesor'},
    {nombre: 'Rosa', puesto: 'Profesora'},
    {nombre: 'Maria', puesto: 'Directora'}
]
 
console.log(aDatosFull)

aDatosFull.push({nombre: 'Elena', puesto: 'Alumna'})


aDatosFull[0].apellido ='Perez'
aDatosFull[1].apellido = "Lopez"
console.log(aDatosFull)
aDatosFull.push(12)
aDatosFull.push(true)
console.log(aDatosFull)
