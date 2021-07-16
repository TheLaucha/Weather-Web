import { obtenerClima, hola } from "./api.js";
import { mostrarResultado } from "./ui.js"

console.log(
    obtenerClima('Buenos Aires')
        .then( respuesta => {
            console.log(respuesta);
            mostrarResultado(respuesta);
        })
);