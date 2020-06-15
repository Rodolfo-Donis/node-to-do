const descripcion = {

    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};

const completado = {
    default: true,
    alias: 'ç',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crear un elemento ToDo', { descripcion })
    .command('actualizar', 'actualiza el estado completado e una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra un elemento de la lista', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}