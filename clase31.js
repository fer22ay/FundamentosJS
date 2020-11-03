const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

/**
 * $.get(url, { crossDomain: true}, callback).fail(function () {
        console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`);
    });
 */
    $.get(url, { crossDomain: true}, callback).fail(() => {
        console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`);
    });
}

obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, soy yo ${personaje.name}`);
    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, soy yo ${personaje.name}`);
        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, soy yo ${personaje.name}`);
            obtenerPersonaje(4, function (personaje) {
                console.log(`Hola, soy yo ${personaje.name}`); 
            });
        });
    });
});
