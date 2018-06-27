// process.stdin.setEncoding('utf8');
// process.stdout.write('¿Qué sugerencias puedes dar? ');
let num = []
for (let i = 0; i < 2; i++) {
    console.log('Numero ')
    var stdin = process.openStdin();
    process.stdin.once('data', function(res) {
        console.log('Has respondido: ', res )  
        process.stdin.pause();
    });
}