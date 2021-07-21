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
                mostrarResultado(respuesta);
            })
            .catch(error => console.log(error)); // --> Mostrar error en pantalla
    }
});

// Cambiar tipo de grados al hacer click
const section_grados = document.querySelectorAll('.section-grados');
const tipo = document.querySelector('.tipo');
const grados = document.querySelectorAll('.grados');

section_grados.forEach( el =>{
    el.addEventListener('click', () =>{
        if (tipo.textContent === '°C'){

            grados.forEach( grado =>{
                let fahrenheit = formulaF(grado.textContent);
                grado.textContent = fahrenheit;
                document.querySelectorAll('.tipo').forEach(tipo =>{
                    tipo.textContent = '°F';
                })
            })

        } else{
            grados.forEach(grado =>{
                let celcius = formulaC(grado.textContent);
                grado.textContent = celcius;
                document.querySelectorAll('.tipo').forEach(tipo =>{
                    tipo.textContent = '°C';
                })
            })
        }
    })
})

function formulaF(grado){
    let fahrenheit = (grado * 9/5) + 32;
    return fahrenheit;
}

function formulaC(grado){
    let celcius = ((grado - 32) * 5/9).toFixed(1);
    return celcius;
}