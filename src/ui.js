export function mostrarResultado(clima){
    // Selecciono los DIVS dias.
    const dia_1 = document.querySelector('#dia-1');
    const dia_2 = document.querySelector('#dia-2');
    const dia_3 = document.querySelector('#dia-3');

    // Creo el HTML Dia 1
    let html_dia_1 = `
        <h2>${clima.location.localtime}</h2>
        <img src="${clima.current.condition.icon}" alt="">
        <p>${clima.current.temp_c}°c</p>
        <p>${clima.location.name} - ${clima.location.region} - ${clima.location.country}</p>
    `;

    // Creo el HTML Dia 2
    let html_dia_2 = `
        <h2>${clima.forecast.forecastday[1].date}</h2>
        <img src="${clima.forecast.forecastday[1].day.condition.icon}" alt="">
        <p>${clima.forecast.forecastday[1].day.mintemp_c}°c</p>
        <p>${clima.forecast.forecastday[1].day.maxtemp_c}°c</p>
        <p>${clima.location.name} - ${clima.location.region} - ${clima.location.country}</p>
    `;

    // Creo el HTML Dia 3
    let html_dia_3 = `
        <h2>${clima.forecast.forecastday[2].date}</h2>
        <img src="${clima.forecast.forecastday[2].day.condition.icon}" alt="">
        <p>${clima.forecast.forecastday[2].day.mintemp_c}°c</p>
        <p>${clima.forecast.forecastday[2].day.maxtemp_c}°c</p>
        <p>${clima.location.name} - ${clima.location.region} - ${clima.location.country}</p>
    `;

    // Inserto html
    dia_1.innerHTML = html_dia_1;
    dia_2.innerHTML = html_dia_2;
    dia_3.innerHTML = html_dia_3;
}