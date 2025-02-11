import "./style.css";

let puntuacionTotal = 0;
const contenedorPuntuacion = document.querySelector(".puntuacion-total");
const dameCartaBtn = document.querySelector(".dame-carta");

function muestraPuntuacion() {
	if (contenedorPuntuacion) {
		contenedorPuntuacion.innerHTML =
			"Puntos: " + puntuacionTotal.toString();
	}
}

function dameCarta() {
	let carta = Math.floor(Math.random() * 10 + 1);

	if (carta > 7) {
		carta = carta + 2;
	}
}

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

if (dameCartaBtn) {
	dameCartaBtn.addEventListener("click", dameCarta);
}
