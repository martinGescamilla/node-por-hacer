const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descrpcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
};



const argv = require('yargs')
    .command('crear', 'crear un objeto', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra un objeto', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}