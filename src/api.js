// Obtener Clima

export async function obtenerClima(lugar){
    const url_api_key = `http://api.weatherapi.com/v1/forecast.json?key=8ef911d2653c46b7af8111736211607&aqi=no&alerts=no&days=3&q=${lugar}`;

    // Fetch a la api
    const urlObtenerClima = await fetch(url_api_key);
    // Convertir obtener clima
    const clima = await urlObtenerClima.json();
    // Retorno el clima
    return clima;
}
