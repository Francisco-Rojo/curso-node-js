const fs = require('fs');
const colors = require('colors');



//Creacion de  promesa
const crearArchivo = (base, salidatabla = false, h = 10) => {
    let salida = '';
    let consola= ''; 

    const promesa = new Promise( (resolve, reject ) => {        

        for (let index = 1; index <= h; index++) {
            consola += `${index} ${colors.red('x')} ${base} ${colors.magenta('=')}  ${index * base}\n`;
            salida += `${index} x ${base} = ${index * base}\n`;

        }

        if(salida){
            //resolve( salida + `tabla del ${base} creada`);
            
            if(salidatabla){
                //resolve( salida + `tabla del ${base} creada`);
                console.log(colors.blue('====================') );
                console.log(colors.green('tabla del ') + colors.yellow(`${base}`));
                console.log(colors.blue('====================') );
                console.log(salida);
            }

            resolve(`tabla del ${base} creada`);
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
           
        }else{
            reject('Error no existe una tabla');
        }

    });

    
    return promesa;
}

//creacion de promesa asyncrona
/*const crearArchivo = async(base) => {
    try{
        let salida = ''; 
        for (let index = 1; index <= 10; index++) {
            salida += `${index} x ${base} = ${index * base}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    }catch(err){
        throw err;
    }
}*/



module.exports = {
    crearArchivo: crearArchivo
}