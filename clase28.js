const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const onPeopleResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name}`);
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, { crossDomain: true}, onPeopleResponse);
}

obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(1);
