import { obtenerClima } from "./api.js";
import { mostrarResultado } from "./ui.js";
import { obtenerPosicion } from "./script_position.js";

//OBTENER POSICION

window.addEventListener('load', obtenerPosicion);

// PROGRAMA

const btnBuscar = document.querySelector('#buscar');

btnBuscar.addEventListener('click', (e) =>{
    e.preventDefault();

    // Obtiene el valor del input
    const city = document.querySelector('#city').value; // --> Hacer que se auto mande cada vez que se escribe una letra

    // Evalue si el valor es correcto
    if (city === ''){
        console.log('Mostrar Error')
    } else{
        obtenerClima(city)
            .then( respuesta =>{
                console.log(respuesta);
                mostrarResultado(respuesta);
            })
            .catch(error => console.log(error)); // --> Mostrar error en pantalla
    }

});

/* 
console.log(
    obtenerClima('Buenos Aires')
        .then( respuesta => {
            console.log(respuesta);
            mostrarResultado(respuesta);
        })
);
*/