
document.getElementById('iniciarSecuencia').addEventListener('click', () => {
  let input = prompt("Ingresa un número entero positivo para la conjetura de Collatz:");

  let numeroActual = parseInt(input);
  const resultadoDiv = document.getElementById('resultado');

  if (isNaN(numeroActual) || numeroActual <= 0) {
    resultadoDiv.innerHTML = "<span class='text-red-600 font-bold'>Error: Por favor, ingresa un número entero positivo válido.</span>";
    return;
  }

  let secuencia = `Número Inicial: ${numeroActual}\nSecuencia:\n`;
  let pasos = 0;

  while (numeroActual !== 1) {
    pasos++;

    if (numeroActual % 2 === 0) {
      numeroActual = numeroActual / 2;

    } else {
      numeroActual = (numeroActual * 3) + 1;
    }

    secuencia += numeroActual + (numeroActual === 1 ? '' : ' → ');

    if (pasos > 500) {
      secuencia += "\n(Secuencia truncada por seguridad)";
      break;
    }
  }

  resultadoDiv.textContent = secuencia;
});
