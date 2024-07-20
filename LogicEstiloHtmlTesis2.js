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
