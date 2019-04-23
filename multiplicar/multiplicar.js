const fs = require('fs');
const color = require('colors');

let path =`tablas/`;

let crearArchivo = (base, limite) =>{
    return new Promise((resolve,reject) =>{

        if(!Number(base)){
            reject(`${base}, No es un número\n`);
            return;
        }

        if(!Number(limite)){
            reject(`${limite}, No es un número\n`);
            return;
        }

        var contenido = "";
        for(let i =1; i<=limite; i++){
            contenido+=`${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`${path}tablaBase${base}.txt`, contenido, (err) => {
            if (err){
                reject(err);
                throw err;
            }
            resolve(`El archivo ha sido creado!\n${contenido}`);
        });
    });
}

let listarTabla = (base, limite) =>{
    return new Promise((resolve,reject) =>{

        if(!Number(base)){
            reject(`la base [${base}], No es un número\n`);
            return;
        }

        if(!Number(limite)){
            reject(`el limite [${limite}], No es un número\n`);
            return;
        }

        console.log

        var contenido = "";
        for(let i =1; i<=limite; i++){
            console.log(`${base}*${i}`.yellow,`=`, `${base * i}\n`.blue);
        }
    });
}

module.exports= {
    crearArchivo,
    listarTabla
}