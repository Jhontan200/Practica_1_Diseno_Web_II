function limpiarClase(elemento, claseABorrar) {
    var clases = elemento.className.split(" ");
    var nuevasClases = [];
    var claseActual;

    for (i in clases) {
        claseActual = clases[i];
        if (claseActual.length > 0 && claseActual !== claseABorrar) {
            nuevasClases.push(claseActual);
        }
    }
    elemento.className = nuevasClases.join(" ");
}

function calcularEdad(fechaNacimiento) {
    var fechaNac = new Date(fechaNacimiento);
    var hoy = new Date();

    var edad = hoy.getFullYear() - fechaNac.getFullYear();
    var diferenciaMeses = hoy.getMonth() - fechaNac.getMonth();

    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    return edad;
}

function validarFormulario() {
    var listaCamposTexto = [
        "nombre",
        "apellido-paterno",
        "apellido-materno",
        "direccion",
        "edad",
        "fecha-nacimiento",
        "email",
        "telefono",
        "ciudad"
    ];
    var formularioEsValido = true;
    var elementoMensaje = document.getElementById('mensaje-validacion');
    var mensajeErrorDetallado = "";

    elementoMensaje.textContent = "";
    elementoMensaje.style.visibility = 'hidden';
    elementoMensaje.style.opacity = '0';

    for (var i = 0; i < listaCamposTexto.length; i++) {
        var idCampo = listaCamposTexto[i];
        var elementoCampo = document.getElementById(idCampo);
        if (elementoCampo) {
            limpiarClase(elementoCampo, "campo-invalido");
            limpiarClase(elementoCampo, "campo-valido");
        }
    }

    var elementoGrupoSexo = document.getElementById('grupo-sexo');
    if (elementoGrupoSexo) {
        limpiarClase(elementoGrupoSexo, "grupo-invalido");
        limpiarClase(elementoGrupoSexo, "grupo-valido");
    }

    for (var i = 0; i < listaCamposTexto.length; i++) {
        var idCampo = listaCamposTexto[i];
        var elementoCampo = document.getElementById(idCampo);

        if (elementoCampo.value.trim() === "" || elementoCampo.value === null) {
            elementoCampo.className += " campo-invalido";
            formularioEsValido = false;
            var nombreCampo = idCampo.split("-").join(" ").toUpperCase();
            mensajeErrorDetallado += "<li>El campo " + nombreCampo + " no puede estar vacío.</li>";
        }
    }

    var elementoEdad = document.getElementById('edad');
    var edadValor = parseInt(elementoEdad.value.trim());

    if (elementoEdad.value.trim() !== "") {
        if (isNaN(edadValor) || edadValor < 1 || edadValor > 120) {
            elementoEdad.className += " campo-invalido";
            formularioEsValido = false;
            mensajeErrorDetallado += "<li>El campo EDAD debe ser un número entero entre 1 y 120.</li>";
        }
    }

    var elementoTelefono = document.getElementById('telefono');
    var telefonoValor = elementoTelefono.value.trim();

    if (telefonoValor !== "") {
        if (isNaN(Number(telefonoValor))) {
            elementoTelefono.className += " campo-invalido";
            formularioEsValido = false;
            mensajeErrorDetallado += "<li>El campo TELÉFONO solo debe contener caracteres numéricos.</li>";
        }
    }

    var elementoEmail = document.getElementById('email');
    var emailValor = elementoEmail.value.trim();

    var arrobaPos = emailValor.indexOf('@');
    var gmailPos = emailValor.lastIndexOf('@gmail.com');
    var lengthEmail = emailValor.length;

    if (emailValor !== "") {
        if (arrobaPos === -1 || gmailPos !== (lengthEmail - "@gmail.com".length)) {
            elementoEmail.className += " campo-invalido";
            formularioEsValido = false;
            mensajeErrorDetallado += "<li>El campo EMAIL debe tener el formato usuario@gmail.com.</li>";
        }
    }

    var elementoFechaNacimiento = document.getElementById('fecha-nacimiento');
    var fechaNacimientoValor = elementoFechaNacimiento.value.trim();

    if (fechaNacimientoValor !== "" && elementoEdad.value.trim() !== "") {
        var edadCalculada = calcularEdad(fechaNacimientoValor);

        if (edadValor !== edadCalculada) {
            elementoEdad.className += " campo-invalido";
            elementoFechaNacimiento.className += " campo-invalido";
            formularioEsValido = false;
            mensajeErrorDetallado += "<li>La EDAD (" + edadValor + " años) no es consistente con la FECHA DE NACIMIENTO (" + fechaNacimientoValor + ", edad calculada: " + edadCalculada + " años).</li>";
        }
    }

    var radiosSexo = document.getElementsByName('sexo');
    var radioSeleccionado = false;

    for (var j = 0; j < radiosSexo.length; j++) {
        if (radiosSexo[j].checked) {
            radioSeleccionado = true;
            break;
        }
    }

    if (!radioSeleccionado) {
        elementoGrupoSexo.className += " grupo-invalido";
        formularioEsValido = false;
        mensajeErrorDetallado += "<li>Debe seleccionar una opción en el campo SEXO.</li>";
    }

    if (formularioEsValido) {
        elementoMensaje.innerHTML = "¡Formulario validado con éxito!";
        elementoMensaje.style.backgroundColor = '#e6ffe6';
        elementoMensaje.style.color = '#155724';
    } else {
        elementoMensaje.innerHTML = "<h4>Error: Corrija los siguientes problemas:</h4><ul>" + mensajeErrorDetallado + "</ul>";
        elementoMensaje.style.backgroundColor = '#fce8e6';
        elementoMensaje.style.color = '#721c24';
    }

    elementoMensaje.style.visibility = 'visible';
    elementoMensaje.style.opacity = '1';

    return formularioEsValido;
}


window.onload = function () {
    var botonEnviar = document.getElementById('boton-enviar');
    var elementoFechaNacimiento = document.getElementById('fecha-nacimiento');
    var elementoEdad = document.getElementById('edad');

    if (botonEnviar) {
        botonEnviar.onclick = function (e) {
            validarFormulario();
        };
    }

    if (elementoFechaNacimiento && elementoEdad) {
        elementoFechaNacimiento.onchange = function () {
            var fechaValor = elementoFechaNacimiento.value.trim();
            if (fechaValor !== "") {
                var edadCalculada = calcularEdad(fechaValor);
                elementoEdad.value = edadCalculada;
                limpiarClase(elementoEdad, "campo-invalido");
            } else {
                elementoEdad.value = "";
            }
        };
    }
};