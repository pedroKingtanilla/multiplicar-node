const opciones = {
    base:{
        require: true,
        alias: 'b'
    },
    limite:{
        default: 10,
        alias: 'l'
    }}


const argv = require('yargs')
    .command('listar', 'imprime la tabla de multiplicar',opciones)
    .command('crear', 'Genera un archivo con la tabla de multiplicar',opciones)
    .help()
    .argv;

module.exports = {argv}