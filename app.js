/* EJEMPLO #1*/
// // requireds
// const fs = require('fs');

// let base = 3;
// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += (`${base} * ${i} = ${base * i} \n`);
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;

//     console.log(`El archivo tabla-${base}.txt ha sido creado!`);
// });


/* EJEMPLO #2*/
// const { crearArchivo } = require('./multiplicar/multiplicar');

// let base = '5';
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(e => console.log(e));


/* EJEMPLO #3*/
// const { crearArchivo } = require('./multiplicar/multiplicar');

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));

/* EJEMPLO #4*/
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

// const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// let comando = argv._[0];

// switch (comando) {
//     case 'listar':
//         listarTabla(argv.base, argv.limite);
//         break;

//     case 'crear':
//         crearArchivo(argv.base, argv.limite)
//             .then(archivo => console.log(`Archivo creado: ${archivo}`))
//             .catch(e => console.log(e));
//         break;

//     default:
//         console.log('Comando no reconocido');
// }


// Ejemplo #4
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}