
// Selecciona el elemento que contiene el accesskey
const elemento = document.querySelector('[accesskey="s"]');

// Agrega un evento keydown al documento
document.addEventListener('keydown', function (event) {
    // Verifica si se presionó la tecla S
    if (event.key === 's' || event.key === 'S') {
        // Muestra el accesskey
        elemento.setAttribute('aria-label', 'Ctrl + S');
        elemento.focus();
    }
});


// Efecto Maquina-Escribir
function maquina(contenedor, texto, intervalo) {
    const cnt = document.getElementById(contenedor);
    if (!cnt) {
        console.error(`No se encontró el elemento con id "${contenedor}"`);
        return;
    }

    const longitud = texto.length;
    let i = 0;
    const timer = setInterval(() => {
        cnt.textContent = texto.substring(0, i + 1) + "_";
        if (i >= longitud) {
            clearInterval(timer);
            cnt.textContent = texto;
            return true;
        } else {
            i++;
        }
    }, intervalo);
}

const texto = " Hola soy henry ...estoy en OracleONE , mostrando Tareas  ";
maquina("maquinas", texto, 100);






//Efecto MaquinaEscribir SEGUNDO
let efectoMaquina = document.getElementById('SegEfecMaqui');

let writing = str => {
    let arrFromStr = str.split('');
    let w = 0;
    let printStr = setInterval(function () {
        efectoMaquina.innerHTML += arrFromStr[w];
        w++;
        if (w === arrFromStr.length) {
            clearInterval(printStr);
            efectoMaquina.classList.add('writing');
        }
    }, 80);
};

writing('Segundo Efecto Escribir 1 soy henry ...estoy en OracleONE , mostrando Tareas');
