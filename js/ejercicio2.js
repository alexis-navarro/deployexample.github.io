'use strict'
var cantidadInput, monedaOrigenInput, monedaDestinoInput, resultadoTexto, convertirButton;
var tasasDeCambio = {
    CAD: 1.28,
    EUR: 0.85,
    NZD: 1.44,
    USD: 1,
    MXN: 20.00,
    HKD: 7.78,
    AUD: 1.32,
    CNY: 6.45,
    CHF: 0.91,
    TRY: 8.12,
    GBP: 0.75,
    JPY: 110.0,
    SEK: 8.86,
    KRW: 1169
};

document.addEventListener("DOMContentLoaded", function () {
    cantidadInput = document.getElementById("cantidad");
    monedaOrigenInput = document.getElementById("monedaOrigen");
    monedaDestinoInput = document.getElementById("monedaDestino");
    resultadoTexto = document.getElementById("resultadoTexto");
    convertirButton = document.getElementById("convertir");

    // Llena las opciones de los selectores
    for (var moneda in tasasDeCambio) {
        var optionOrigen = document.createElement("option");
        optionOrigen.value = moneda;
        optionOrigen.textContent = moneda;
        monedaOrigenInput.appendChild(optionOrigen);

        var optionDestino = document.createElement("option");
        optionDestino.value = moneda;
        optionDestino.textContent = moneda;
        monedaDestinoInput.appendChild(optionDestino);
    }

    convertirButton.addEventListener("click", function () {
        var cantidad = parseFloat(cantidadInput.value);
        var monedaOrigen = monedaOrigenInput.value;
        var monedaDestino = monedaDestinoInput.value;

        if (monedaOrigen in tasasDeCambio && monedaDestino in tasasDeCambio) {
            var conversionRate = tasasDeCambio[monedaDestino] / tasasDeCambio[monedaOrigen];
            var resultado = cantidad * conversionRate;
            resultadoTexto.textContent = `${cantidad} ${monedaOrigen} es igual a ${resultado.toFixed(2)} ${monedaDestino}`;
        } else {
            resultadoTexto.textContent = 'Error: Las monedas proporcionadas no están en la lista de tasas de cambio.';
        }
    });
});

