const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

    if (boton.id === "c") {
      pantalla.textContent = "0";
      return;
    }

    if (boton.id === "borrar") {
      if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR!") {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if (boton.id === "igual") {
      try {
        const resultado = eval(pantalla.textContent);
        pantalla.textContent = Math.round(resultado * 10000000000) / 10000000000;
      } catch {
        pantalla.textContent = "ERROR!";
      }
      return;
    }

    const textoActual = pantalla.textContent;
    const ultimoCaracter = textoActual[textoActual.length - 1];
    const operadores = ['+', '-', '*', '/'];

    if ((textoActual === "0" || textoActual === "ERROR!") && operadores.includes(botonApretado) && botonApretado !== '-') {
      return;
    }

    if (operadores.includes(botonApretado) && operadores.includes(ultimoCaracter)) {
      return;
    }

    if (botonApretado === '.') {
      if (textoActual === "0" || textoActual === "ERROR!") {
        pantalla.textContent = "0.";
        return;
      }

      if (operadores.includes(ultimoCaracter)) {
        pantalla.textContent += "0.";
        return;
      }

      let numeroActual = '';
      for (let i = textoActual.length - 1; i >= 0; i--) {
        if (operadores.includes(textoActual[i])) {
          break;
        }
        numeroActual = textoActual[i] + numeroActual;
      }

      if (numeroActual.includes('.')) {
        return;
      }
    }

    if (textoActual === "0" || textoActual === "ERROR!") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  })
})