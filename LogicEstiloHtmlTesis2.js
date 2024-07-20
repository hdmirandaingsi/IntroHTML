/*LOGICA DE DROP AND DRAG */
function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}

/* Errores HTTP */

function showHttpStatusMessages() {
	document.getElementById("http-status-messages").style.display = "block";
}


/* estado de CODIGOS */

const code = 404;
const url = `https://httpbin.org/status/${code}`;

fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
    })
    .then(data => {
        console.log(`Respuesta: ${JSON.stringify(data)}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });

/* Calculadora SIMPLE */
 function calcular() {
  const numero1 = parseInt(document.getElementById('numero1').value);
  const numero2 = parseInt(document.getElementById('numero2').value);
  const operacion = document.getElementById('operacion').value;

  let resultado;

  switch (operacion) {
    case 'suma':
      resultado = numero1 + numero2;
      break;
    case 'resta':
      resultado = numero1 - numero2;
      break;
    case 'multiplicacion':
      resultado = numero1 * numero2;
      break;
    case 'division':
      if (numero2 === 0) {
        resultado = 'No se puede dividir por cero';
      } else {
        resultado = numero1 / numero2;
      }
      break;
  }

  document.getElementById('resultadoOperacion').textContent = resultado.toString();
  console.log(resultado);
}
