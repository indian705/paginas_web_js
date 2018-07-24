let oPersona = {
    nombre: 'Pepe',
    edad: 23,
    profesion: 'Informático',
    empresa: 'IBM'
}

console.log(oPersona)
delete(oPersona.empresa)
console.log(oPersona)

oPersona = null
if(oPersona === null) {
    console.log('oPersona ha sido eliminada')
}
