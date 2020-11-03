/**
 * PROMESAS
 * Pensamos las promesas como valores que aun no conocemos
 * - pending -> Inicia en estado
 * - fulfilled -> resolve -> .then(val => ...)
 * - reject -> rejected -> .catch(err => ...)
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

function onError(id) {
    console.log(`Sucedio un error al obtener un personaje ${id}`)
}

obtenerPersonaje(1)
    .then(function (personaje){
        console.log(`El personaje 1 es ${personaje.name}`);
    }).catch(onError);