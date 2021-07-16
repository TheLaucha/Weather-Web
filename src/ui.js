export function mostrarResultado(clima){
    const resultado = document.querySelector('#app');

    // Creo el HTML
    let html = `
        <div>
            <h3>${clima.location.name}</h3>
            <h4>${clima.location.localtime}</h4>
        </div>
    `;

    // Inserto html
    const $app = document.querySelector('#app');
    $app.innerHTML = html;
}