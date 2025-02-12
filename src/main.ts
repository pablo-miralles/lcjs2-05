import "./style.css";

let puntuacionTotal = 0;
const contenedorPuntuacion = document.querySelector(".puntuacion-total");
const dameCartaBtn = document.querySelector(".dame-carta");

const muestraPuntuacion = () => {
	if (contenedorPuntuacion) {
		contenedorPuntuacion.innerHTML =
			"Puntos: " + puntuacionTotal.toString();
	}
};

const dameCarta = () => {
	let randomNum = Math.floor(Math.random() * 10);
	let cartaList = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

	return cartaList[randomNum];
};

const muestraCarta = (carta: number): void => {
	switch (carta) {
		case 1:
			"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
			break;
		case 2:
			"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
			break;
		case 3:
			"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
			break;
		case 4:
			"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
			break;
		case 5:
			"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
			break;
		case 6:
			"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
			break;
		case 7:
			"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
			break;
		case 10:
			"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
			break;
		case 11:
			"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
			break;
		case 12:
			"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
			break;
	}
};

const pideCarta = () => {
	let cartaSeleccionada = dameCarta();
	console.log(muestraCarta(cartaSeleccionada));
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

if (dameCartaBtn) {
	dameCartaBtn.addEventListener("click", pideCarta);
}
