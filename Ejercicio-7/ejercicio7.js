function anadirElementoALista() {
    var inputItem = document.getElementById('nuevo-item');
    var lista = document.getElementById('lista-dinamica');
    
    var textoItem = inputItem.value.trim(); 
    if (textoItem === "") {
        alert("Por favor, escribe un artículo en el campo de texto.");
        inputItem.focus();
        return; 
    }
    
    var nuevoElementoLista = document.createElement('li');
    var textoNodo = document.createTextNode(textoItem);
    
    nuevoElementoLista.appendChild(textoNodo);
    lista.appendChild(nuevoElementoLista);
    
    inputItem.value = "";
    inputItem.focus();
}

document.addEventListener('DOMContentLoaded', () => {
    var inputItem = document.getElementById('nuevo-item');
    
    if (inputItem) {
        inputItem.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                anadirElementoALista();
                event.preventDefault();
            }
        });
    }
});