function mostrarPosicionRaton(evento) {
    var cajaInfo = document.getElementById('caja-informacion');
    var tituloEvento = document.getElementById('titulo-evento');
    var lineaInfo1 = document.getElementById('linea-informacion-1');
    var lineaInfo2 = document.getElementById('linea-informacion-2');

    cajaInfo.classList.remove('fondo-raton', 'fondo-teclado');
    tituloEvento.textContent = 'Ratón';

    lineaInfo1.innerHTML = 'Navegador [<span id="navegador-x">' + evento.clientX + '</span>, <span id="navegador-y">' + evento.clientY + '</span>]';
    lineaInfo2.innerHTML = 'Página [<span id="pagina-x">' + evento.pageX + '</span>, <span id="pagina-y">' + evento.pageY + '</span>]';
}

function manejarPulsacionTeclado(evento) {
    var cajaInfo = document.getElementById('caja-informacion');
    var tituloEvento = document.getElementById('titulo-evento');
    var lineaInfo1 = document.getElementById('linea-informacion-1');
    var lineaInfo2 = document.getElementById('linea-informacion-2');

    cajaInfo.classList.remove('fondo-raton');
    cajaInfo.classList.add('fondo-teclado');
    tituloEvento.textContent = 'Teclado';
    lineaInfo1.textContent = 'Carácter [' + evento.key + ']';
    var codigo = evento.which || evento.keyCode || evento.code;
    lineaInfo2.textContent = 'Código [' + codigo + ']';
}

function manejarPulsacionRaton(evento) {
    var cajaInfo = document.getElementById('caja-informacion');
    var tituloEvento = document.getElementById('titulo-evento');
    var lineaInfo1 = document.getElementById('linea-informacion-1');
    var lineaInfo2 = document.getElementById('linea-informacion-2');

    cajaInfo.classList.remove('fondo-teclado');
    cajaInfo.classList.add('fondo-raton');

    tituloEvento.textContent = 'Ratón';
    lineaInfo1.innerHTML = 'Navegador [<span id="navegador-x">' + evento.clientX + '</span>, <span id="navegador-y">' + evento.clientY + '</span>]';
    lineaInfo2.innerHTML = 'Página [<span id="pagina-x">' + evento.pageX + '</span>, <span id="pagina-y">' + evento.pageY + '</span>]';
}

window.onload = function () {
    document.body.onmousemove = mostrarPosicionRaton;
    document.body.onkeydown = manejarPulsacionTeclado;
    document.body.onmousedown = manejarPulsacionRaton;
};