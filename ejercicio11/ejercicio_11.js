function informarZonaRaton(raton) {
    var anchoVentana = window.innerWidth;
    var altoVentana = window.innerHeight;
    var coordenadaX = raton.clientX;
    var coordenadaY = raton.clientY;
    var puntoMedioX = anchoVentana / 2;
    var puntoMedioY = altoVentana / 2;
    var zonaHorizontal = "";
    var zonaVertical = "";

    if (coordenadaX < puntoMedioX) {
        zonaHorizontal = "Izquierda";
    } else {
        zonaHorizontal = "Derecha";
    }

    if (coordenadaY < puntoMedioY) {
        zonaVertical = "Arriba";
    } else {
        zonaVertical = "Abajo";
    }

    var cuadranteFinal = zonaHorizontal + " " + zonaVertical;

    var elementoResultado = document.getElementById('resultado-zona');
    elementoResultado.textContent = "Ha pulsado en la zona: " + cuadranteFinal + " (X: " + coordenadaX + ", Y: " + coordenadaY + ")";
    elementoResultado.style.backgroundColor = (zonaHorizontal === "Izquierda") ? '#e6f7ff' : '#fff0e6';
    elementoResultado.style.color = (zonaVertical === "Arriba") ? '#62007aff' : '#ff4500';
}

window.onload = function () {
    document.body.onmousedown = informarZonaRaton;
};