function alternarVisibilidad() { 
    var enlace = this; 
    var targetId = enlace.getAttribute('data-target-id');
    var Contenido = document.getElementById(targetId);
    
    if (!Contenido) return;

    Contenido.classList.toggle('oculto'); 
    if (Contenido.classList.contains('oculto')) {
        enlace.innerHTML = 'Mostrar Contenido';
    } else {
        enlace.innerHTML = 'Ocultar Contenido';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    var todosLosEnlaces = document.querySelectorAll('.enlace-toggle');
    
    todosLosEnlaces.forEach(enlace => {
        enlace.addEventListener('click', alternarVisibilidad);
    });
});