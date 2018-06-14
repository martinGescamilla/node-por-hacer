const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log(listado);
        for (let index = 0; index < listado.length; index++) {
            const element = listado[index];
            console.log('=======Por Hacer======');
            console.log(element.descripcion);
            console.log('Estado:', element.completado);
            console.log('======================');
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Se actualizado ' + actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log('Se ha borrado ' + borrado);
        break;
    default:
        console.log('comando no reconozido');
        break;
}