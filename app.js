const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
const color = require('colors')

switch(argv._[0]){
  case 'listar':
    console.log('listar'.rainbow)
    listarTabla(argv.base, argv.limite)
  break;

  case 'crear':
      let contenido = crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(archivo))
      .catch(err => console.log(err))
  break;
}

