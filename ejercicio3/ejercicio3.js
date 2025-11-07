var numero1 = 5;
var numero2 = 8;

function mostrarResultado(mensaje) {
    var resultadosDiv = document.getElementById('resultados');
    var p = document.createElement('p');
    p.className = 'resultado-item';
    p.textContent = mensaje;
    resultadosDiv.appendChild(p);
}

if(numero1 <= numero2) { 
    mostrarResultado("1. numero1 (" + numero1 + ") no es mayor que numero2 (" + numero2 + ")");
}

if(numero2 > 0) {
    mostrarResultado("2. numero2 (" + numero2 + ") es positivo");
}

if(numero1 < 0 || numero1 != 0) { 
    mostrarResultado("3. numero1 (" + numero1 + ") es negativo o distinto de cero");
}

if((numero1 + 1) < numero2) {
    mostrarResultado("4. Incrementar en 1 unidad el valor de numero1 (" + (numero1) + ") no lo hace mayor o igual que numero2 (" + numero2 + ")");
}



let numA = -1;
let numB = 8;
console.log("\n--- Prueba con tus valores: numA = " + numA + ", numB = " + numB + " ---");

if(numA <= numB) { 
    console.log("1. " + numA + " no es mayor que " + numB);
}

if(numB > 0) {
    console.log("2. " + numB + " es positivo");
}

if(numA < 0 || numA != 0) { 
    console.log("3. " + numA + " es negativo o distinto de cero");
}

if((numA + 1) < numB) {
    console.log("4. Incrementar en 1 el valor de " + numA + " no lo hace mayor o igual que " + numB);
}