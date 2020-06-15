const fs = require('fs');


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('database/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
    })
}

const cargarDB = () => {

        try {
            listadoPorHacer = require('../database/data.json');
            console.log(listadoPorHacer);
        } catch (error) {
            listadoPorHacer = [];
        }


    }
    //arreglo
let listadoPorHacer = [];

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    //search in array by description
    let index = listadoPorHacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(item => {
        return item.descripcion !== descripcion;
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}
module.exports = {

    crear,
    getListado,
    actualizar,
    borrar
}