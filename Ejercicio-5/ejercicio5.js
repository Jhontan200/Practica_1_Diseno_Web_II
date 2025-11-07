// Almacenamiento solamente de los enlaces de los parrafos
let enlacesValidos = [];
var elementoResultado = document.getElementById('resultado'); 

document.addEventListener('DOMContentLoaded', () => {
    var todosLosEnlaces = document.getElementsByTagName('a');
    
    enlacesValidos = Array.from(todosLosEnlaces).filter(enlace => {
        return !enlace.classList.contains('volver-btn');
    });

    if (elementoResultado) {
        elementoResultado.innerHTML = 'Presiona una opción para ver el resultado.';
    }
});

function mostrarResultado(mensaje) {
    if (elementoResultado) {
        elementoResultado.innerHTML = mensaje;
    } else {
        console.error('El elemento de resultado con ID "resultado" no fue encontrado.');
    }
}
function contarTodosLosEnlaces() {
    var numeroDeEnlaces = enlacesValidos.length;
    mostrarResultado(`El número total de enlaces en la página es: <b>${numeroDeEnlaces}</b>`);
}
function mostrarPenultimoEnlace() {
    var numeroDeEnlaces = enlacesValidos.length;
    
    if (numeroDeEnlaces >= 2) {
        var penultimoEnlace = enlacesValidos[numeroDeEnlaces - 2];
        var direccionPenultimo = penultimoEnlace.href; 
        
        mostrarResultado(`La dirección del penúltimo enlace, en la página, es: <b>${direccionPenultimo}</b>`);
    } else {
        mostrarResultado('No hay suficientes enlaces válidos (se requieren al menos 2) para obtener el penúltimo.');
    }
}
function contarEnlacesTercerParrafo() {
    var todosLosParrafos = document.getElementsByTagName('p');
    
    if (todosLosParrafos.length >= 3) {
        var tercerParrafo = todosLosParrafos[2]; 
        var enlacesTercerParrafo = tercerParrafo.getElementsByTagName("a"); 
        var cantEnlacesTercerParrafo = enlacesTercerParrafo.length;
        
        mostrarResultado(`El número de enlaces en el tercer párrafo es: <b>${cantEnlacesTercerParrafo}</b>`);
    } else {
        mostrarResultado('No se encontró un tercer párrafo en la página para realizar el conteo.');
    }
}


