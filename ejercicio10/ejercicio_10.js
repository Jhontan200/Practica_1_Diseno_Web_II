function limpiarInput() {
    var elementoTexto = document.getElementById('texto-entrada');
    elementoTexto.value = '';
    elementoTexto.focus();
}

function procesarCadena() {
    
    var elementoTexto = document.getElementById('texto-entrada');
    var textoOriginal = elementoTexto.value.trim(); 

    if (textoOriginal === "") {
        alert("Por favor, introduzca una cadena de texto para procesar.");
        return; 
    }

    var arregloPalabras = textoOriginal.split(' ').filter(function(palabra) {
        return palabra.length > 0;
    });

    if (arregloPalabras.length === 0) {
        alert("La cadena no contiene palabras válidas.");
        return;
    }

    var numeroPalabras = arregloPalabras.length;
    var primeraPalabra = arregloPalabras[0];
    var ultimaPalabra = arregloPalabras[numeroPalabras - 1];

    var arregloInverso = arregloPalabras.slice().reverse();
    var palabrasInverso = arregloInverso.join(', ');

    var arregloAZ = arregloPalabras.slice().sort(function(a, b) {
        var palabraA = a.toLowerCase(); 
        var palabraB = b.toLowerCase();
        
        if (palabraA < palabraB) {
            return -1;
        }
        if (palabraA > palabraB) {
            return 1;
        }
        return 0;
    });
    var palabrasAZ = arregloAZ.join(', ');

    var arregloZA = arregloAZ.slice().reverse();
    var palabrasZA = arregloZA.join(', ');


    var ventanaNueva = window.open("", "_blank", "width=800,height=500,scrollbars=yes");

    if (ventanaNueva) {
        var documentoNuevo = ventanaNueva.document;
        
        documentoNuevo.open();
        documentoNuevo.write('');
        documentoNuevo.close();

        documentoNuevo.title = "Resultados del Análisis";
        
        var crearInfoBox = function(etiqueta, valor, contenedor) {
            var div = documentoNuevo.createElement('div');
            var strong = documentoNuevo.createElement('strong');
            var texto = documentoNuevo.createTextNode(valor);
            
            div.className = 'info-box';
            strong.textContent = etiqueta + ':';
            
            div.appendChild(strong);
            div.appendChild(texto);
            contenedor.appendChild(div);
            return div;
        };

        var estilo = documentoNuevo.createElement('style');
        estilo.innerHTML = 'body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; background-color: #dbffb2;} h1 { color: #0a5e1e; padding-bottom: 10px; text-align: center;} .info-box { background-color: #ffffff; padding: 12px; margin-bottom: 10px; border-radius: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); } strong { font-weight: bold; display: inline-block; width: 170px; }';
        documentoNuevo.head.appendChild(estilo);

        var cuerpo = documentoNuevo.body;
        
        var tituloH1 = documentoNuevo.createElement('h1');
        tituloH1.textContent = 'Análisis de la Cadena de Texto';
        cuerpo.appendChild(tituloH1);
        
        crearInfoBox('Cadena Original', textoOriginal, cuerpo);
        crearInfoBox('Arreglo Generado', '[' + arregloPalabras.join(', ') + ']', cuerpo);
        
        var tituloH2 = documentoNuevo.createElement('h2');
        tituloH2.textContent = 'Información Solicitada:';
        cuerpo.appendChild(tituloH2);

        crearInfoBox('Número de Palabras', numeroPalabras, cuerpo);
        crearInfoBox('Primera Palabra', primeraPalabra, cuerpo);
        crearInfoBox('Última Palabra', ultimaPalabra, cuerpo);
        crearInfoBox('Palabras Inversas', palabrasInverso, cuerpo);
        crearInfoBox('Palabras (A-Z)', palabrasAZ, cuerpo);
        crearInfoBox('Palabras (Z-A)', palabrasZA, cuerpo);

    } else {
        alert("El navegador ha bloqueado la ventana emergente. Por favor, revisa la configuración.");
    }
}

window.onload = function() {
    var botonProcesar = document.getElementById('procesar-boton');
    var botonLimpiar = document.getElementById('limpiar-boton');
    
    botonProcesar.onclick = function() {
        procesarCadena();
    };
    botonLimpiar.onclick = function() {
        limpiarInput();
    };
};