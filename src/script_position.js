import { obtenerClima } from "./api.js";
import { mostrarResultado } from "./ui.js";

// Obtener posicion

export function obtenerPosicion(){
    let lat;
    let long;
    
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            lat = position.coords.latitude;
            long = position.coords.longitude;
            obtenerCiudad(lat,long)
                .then( ciudad => {
                    let lugar = `${ciudad.city} ${ciudad.countryName}`
                    lugar = removeAccents(lugar);
                    obtenerClima(lugar)
                        .then( respuesta =>{
                            mostrarResultado(respuesta);
                        })
                    .catch(error => console.log(error)); // --> Mostrar error en pantalla 
                })
        });
    };
}

async function obtenerCiudad(lat,long){
    const url_obtener_ciudad = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=es`;

    // Fetch a la api
    const urlCiudad = await fetch(url_obtener_ciudad);
    // Convierto
    const ciudad = await urlCiudad.json();
    // Return
    return ciudad;
}

// Funcion para remover acentos y simbolos.
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 