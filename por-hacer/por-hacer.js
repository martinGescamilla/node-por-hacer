const fs = require('fs');


let listadosPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadosPorHacer);
    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err)
            throw new Error('no se pdo guardar', err);

    });
}

const cargarDB = () => {
    try {
        listadosPorHacer = require('../db/data.json');
    } catch (error) {
        listadosPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadosPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}
const getListado = () => {
    cargarDB();
    return listadosPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadosPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadosPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (descripcion) => {
    cargarDB();
    let index = listadosPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadosPorHacer = listadosPorHacer.filter(e => e !== listadosPorHacer[index]);
        guardarDB();
        return true;
    } else {
        console.log('no se encontro ' + descripcion);
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}