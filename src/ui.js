export function mostrarResultado(clima){
    // Selecciono los DIVS dias.
    const dia_1 = document.querySelector('#dia-1');
    const dia_2 = document.querySelector('#dia-2');
    const dia_3 = document.querySelector('#dia-3');

    // Creo el HTML
    let html = `
        <h2>${clima.location.localtime}</h2>
        <img src="${clima.current.condition.icon}" alt="">
        <p>${clima.current.temp_c}°c</p>
        <p>${clima.location.name} - ${clima.location.region} - ${clima.location.country}</p>
    `;

    // Inserto html
    dia_1.innerHTML = html;
}