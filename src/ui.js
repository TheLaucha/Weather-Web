export function mostrarResultado(clima){
    // Selecciono los ELEMENTOS de cada dia.
    // DIA 1
    const $h2_1 = document.querySelector('#date_1');
    const $icon_1 = document.querySelector('#icon_1');
    const $grados_1 = document.querySelector('#grados_1');
    const $region_1 = document.querySelector('#region_1');
    // DIA 2
    const $h2_2 = document.querySelector('#date_2');
    const $icon_2 = document.querySelector('#icon_2');
    const $grados_2_min = document.querySelector('#grados_2_min');
    const $grados_2_max = document.querySelector('#grados_2_max');
    const $region_2 = document.querySelector('#region_2');
    // DIA 3
    const $h2_3 = document.querySelector('#date_3');
    const $icon_3 = document.querySelector('#icon_3');
    const $grados_3_max = document.querySelector('#grados_3_min');
    const $grados_3_min = document.querySelector('#grados_3_max');
    const $region_3 = document.querySelector('#region_3');

    // Creo el HTML Dia 1
    $h2_1.textContent = clima.location.localtime;
    $icon_1.src = clima.current.condition.icon;
    $grados_1.textContent = clima.current.temp_c; 
    $region_1.textContent = `${clima.location.name} - ${clima.location.region} - ${clima.location.country}`

    // Creo el HTML Dia 2
    $h2_2.textContent = clima.forecast.forecastday[1].date;
    $icon_2.src = clima.forecast.forecastday[1].day.condition.icon;
    $grados_2_min.textContent = clima.forecast.forecastday[1].day.mintemp_c;
    $grados_2_max.textContent = clima.forecast.forecastday[1].day.maxtemp_c;
    $region_2.textContent = `${clima.location.name} - ${clima.location.region} - ${clima.location.country}`;

    // Creo el HTML Dia 3
    $h2_3.textContent = clima.forecast.forecastday[2].date;
    $icon_3.src = clima.forecast.forecastday[2].day.condition.icon;
    $grados_3_min.textContent = clima.forecast.forecastday[2].day.mintemp_c;
    $grados_3_max.textContent = clima.forecast.forecastday[2].day.maxtemp_c;
    $region_3.textContent = `${clima.location.name} - ${clima.location.region} - ${clima.location.country}`;
}

// Mostrar mensaje de error
const divMensaje = document.querySelector('.mensaje');

export function mostrarMensaje(clase,mensaje){
    if(document.querySelector('.mensajeError')){
        document.querySelector('.mensajeError').remove();
    }

    // Creo parrafo de mensaje
    const div = document.createElement('div');
    div.classList.add('mensajeError');
    div.innerHTML = mensaje;

    // Lo agrego al DOM con setTimeOut
    divMensaje.appendChild(div);
    divMensaje.classList.add(clase);

    // Lo elimino en unos segundos
    setTimeout( () =>{
        div.remove();
        divMensaje.classList.remove(clase);
    },2000);
}