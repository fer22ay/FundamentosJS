/**
 * Promesas en paralelo 
 */

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const opts = { crossDomain: true}

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

        $.get(url, opts, function (data) {
            resolve(data)
        }).fail(() => reject(id))
    })
}

/**
 * Funcion para obtener el error al no ser resuelta la solicitud
 * @param {*} id Identificar del personaje
 */
function onError(id) {
    console.log(`Sucedio un error al obtener un personaje ${id}`)
}

/**
 * Array de ids de los personajes
 */
var ids = [1, 2, 3, 4, 5, 6, 7];

//var promesas = ids.map(function (id) {
//    return obtenerPersonaje(id);
//})

/**
 * Recorremos el array de los ids de los personajes, con la funcion map()
 */
var promesas = ids.map((id) => obtenerPersonaje(id));

/**
 * Utilizamos el metodo all() que proporciona Promise, que recibe como 
 * parametro un array (arreglo) de los ids
 */
Promise.all(promesas).then(personajes => console.log(personajes)).catch(onError);
