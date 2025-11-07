function mostrarContenido() {
    var contenidoOculto = document.getElementById('contenido-oculto');
    var enlaceMostrar = document.getElementById('mostrar-enlace');
    
    contenidoOculto.classList.remove('oculto');
    
    enlaceMostrar.style.display = 'none'; 
}

document.addEventListener('DOMContentLoaded', () => {
    var enlace = document.getElementById('mostrar-enlace');
    
    if (enlace) {
        enlace.addEventListener('click', mostrarContenido);
    }
});