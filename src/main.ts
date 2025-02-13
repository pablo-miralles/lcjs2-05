import "./style.css";

let puntuacionTotal = 0;
const contenedorPuntuacion = document.querySelector(".puntuacion-total");
const dameCartaBtn = document.querySelector(".dame-carta");
const mePlantoBtn = document.querySelector(".me-planto");
const resetBtn = document.querySelector(".reset");
const img = document.querySelector(".cards__item-img");

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
	let imageSrc: string;

	switch (carta) {
		case 1:
			imageSrc =
				"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
			break;
		case 2:
			imageSrc =
				"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
			break;
		case 3:
			imageSrc =
				"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
			break;
		case 4:
			imageSrc =
				"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
			break;
		case 5:
			imageSrc =
				"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
			break;
		case 6:
			imageSrc =
				"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
			break;
		case 7:
			imageSrc =
				"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
			break;
		case 10:
			imageSrc =
				"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
			break;
		case 11:
			imageSrc =
				"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
			break;
		case 12:
			imageSrc =
				"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
			break;
		default:
			imageSrc =
				"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
			break;
	}

	if (img && img instanceof HTMLImageElement) {
		img.src = imageSrc;
	}
};

const sumaPuntuacion = (carta: number): void => {
	switch (carta) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
			puntuacionTotal += carta;
			break;
		case 10:
		case 11:
		case 12:
			puntuacionTotal += 0.5;
			break;
		default:
			puntuacionTotal = 0;
			break;
	}
	console.log(puntuacionTotal);
};

const gestionarGameover = () => {
	if (puntuacionTotal > 7.5) {
		if (contenedorPuntuacion) {
			contenedorPuntuacion.innerHTML +=
				" ¡Has perdido! Te has pasado de 7.5 puntos.";
		}
		deshabilitarBotones();
	}
};

const deshabilitarBotones = () => {
	if (dameCartaBtn) {
		dameCartaBtn.setAttribute("disabled", "");
		dameCartaBtn.setAttribute("style", "cursor: not-allowed");
	}
	if (mePlantoBtn) {
		mePlantoBtn.setAttribute("disabled", "");
		mePlantoBtn.setAttribute("style", "cursor: not-allowed");
	}
};

const habilitarBotones = () => {
	if (dameCartaBtn) {
		dameCartaBtn.removeAttribute("disabled");
		dameCartaBtn.removeAttribute("style");
	}
	if (mePlantoBtn) {
		mePlantoBtn.removeAttribute("disabled");
		mePlantoBtn.removeAttribute("style");
	}
};

const pideCarta = () => {
	let cartaSeleccionada = dameCarta();
	muestraCarta(cartaSeleccionada);
	sumaPuntuacion(cartaSeleccionada);
	muestraPuntuacion();
	gestionarGameover();
};

const mePlanto = () => {
	deshabilitarBotones();

	if (contenedorPuntuacion) {
		if (puntuacionTotal === 7.5) {
			contenedorPuntuacion.innerHTML += " ¡Lo has clavado! ¡Enhorabuena!";
		} else if (puntuacionTotal >= 6 && puntuacionTotal <= 7) {
			contenedorPuntuacion.innerHTML += " Casi casi...";
		} else if (puntuacionTotal > 4 && puntuacionTotal < 6) {
			contenedorPuntuacion.innerHTML += " Te ha entrado el canguelo eh?";
		} else if (puntuacionTotal <= 4) {
			contenedorPuntuacion.innerHTML += " Has sido muy conservador";
		}
	}
};

const gestionarReset = () => {
	puntuacionTotal = 0;
	muestraPuntuacion();
	habilitarBotones();
	if (img && img instanceof HTMLImageElement) {
		img.src =
			"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
	}
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

if (dameCartaBtn) {
	dameCartaBtn.addEventListener("click", pideCarta);
}

if (mePlantoBtn) {
	mePlantoBtn.addEventListener("click", mePlanto);
}

if (resetBtn) {
	resetBtn.addEventListener("click", gestionarReset);
}
