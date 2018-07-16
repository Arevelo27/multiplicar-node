// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido [${base}] no es un numero`)
            return;
        }

        console.log('======================================'.green);
        console.log(`   =========Tabala de ${base}============`.red);
        console.log('======================================'.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    });
}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido [${base}] no es un numero`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
};

// Ejemplo anterior
// crearArchivo = (base) => {
//     return new Promise((resolve, reject) => {

//         if (!Number(base)) {
//             reject(`El valor introducido [${base}] no es un numero`)
//             return;
//         }

//         let data = '';

//         for (let i = 1; i <= 10; i++) {
//             data += (`${base} * ${i} = ${base * i} \n`);
//         }

//         fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//             if (err) reject(err)
//             else
//                 resolve(`tabla-${base}.txt`);
//         });

//     });
// };

module.exports = {
    crearArchivo,
    listarTabla
}