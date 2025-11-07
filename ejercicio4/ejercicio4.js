
var valores = [true, 5, false, "hola", "adios", 2];


function determinarTextoMayor(arr) {
    
    var textos = arr.filter(function(elemento) {
        return typeof elemento === 'string';
    });
    
    
    var texto1 = textos[0]; 
    var texto2 = textos[1]; 
    
    var resultadoTexto;
    if (texto1.length > texto2.length) {
        resultadoTexto = "\"" + texto1 + "\" es mayor que \"" + texto2 + "\"";
    } else if (texto2.length > texto1.length) {
        resultadoTexto = "\"" + texto2 + "\" es mayor que \"" + texto1 + "\"";
    } else {
        resultadoTexto = "Los textos tienen la misma longitud";
    }

    console.log("1. Texto Mayor:", resultadoTexto);
    document.getElementById('resultado1').textContent = resultadoTexto;
}

function operacionesBooleanas(arr) {
    
    var booleanos = arr.filter(function(elemento) {
        return typeof elemento === 'boolean';
    });

    var bool1 = booleanos[0];
    var bool2 = booleanos[1];

    var resultadoTrue = bool1 || bool2; 
    var expresionTrue = booleanos[0] + " || " + booleanos[1] + " = " + resultadoTrue;
    
    
    var resultadoFalse = bool1 && bool2;
    var expresionFalse = booleanos[0] + " && " + booleanos[1] + " = " + resultadoFalse;

    console.log("2. Resultado TRUE:", expresionTrue);
    console.log("2. Resultado FALSE:", expresionFalse);
    document.getElementById('resultado2-true').textContent = expresionTrue;
    document.getElementById('resultado2-false').textContent = expresionFalse;
}

function operacionesMatematicas(arr) {
    
    var numeros = arr.filter(function(elemento) {
        return typeof elemento === 'number';
    });

    var num1 = numeros[0];
    var num2 = numeros[1]; 

    
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;
    var modulo = num1 % num2;

    console.log("3. Suma:", num1 + " + " + num2 + " = " + suma);
    console.log("3. Resta:", num1 + " - " + num2 + " = " + resta);
    console.log("3. Multiplicación:", num1 + " * " + num2 + " = " + multiplicacion);
    console.log("3. División:", num1 + " / " + num2 + " = " + division);
    console.log("3. Módulo:", num1 + " % " + num2 + " = " + modulo);

    document.getElementById('resultado3-suma').textContent = suma;
    document.getElementById('resultado3-resta').textContent = resta;
    document.getElementById('resultado3-multiplicacion').textContent = multiplicacion;
    document.getElementById('resultado3-division').textContent = division;
    document.getElementById('resultado3-modulo').textContent = modulo;
}

determinarTextoMayor(valores);
operacionesBooleanas(valores);
operacionesMatematicas(valores);