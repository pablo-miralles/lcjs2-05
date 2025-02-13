import "./style.css";

/*
Primero declaro las variables globales:
	1. Variable para puntuación total
	2. Constantes para elementos UI: img, botones y div donde se imprimirá el mensaje
	3. Constantes para las url de imagen en un objeto.
*/

let puntuacionTotal = 0;
/* const elementoImagen = document.querySelector(".cards__item-img");
 */
// const contenedorMensajePuntuacion = document.querySelector(".puntuacion-total");
const botonDameCarta = document.querySelector(".dame-carta");
const botonMePlanto = document.querySelector(".me-planto");
// const botonReset = document.querySelector(".reset");
/* 
const linksDeCartas = {
	back: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
	front1: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
	front2: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
	front3: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
	front4: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
	front5: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
	front6: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
	front7: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
	front10:
		"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
	front11:
		"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
	front12:
		"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
};
*/

/*
Ahora creo una función que inicia la partida, dándole los ajustes initicales.
También tiene que ejecutarse una vez, cuando toda la UI haya cargado. Necesito:
- [HECHO] Que resetee la puntuación a 0
- Que imprima los puntos actuales en el contenedorMensajePuntuacion
- Que el elementoImagen pase a tener la imagen del back
- Que los botones se habiliten, si estaban deshabilitados
*/

const empezarPartida = (): void => {
	puntuacionTotal = 0;
};

document.addEventListener("DOMContentLoaded", empezarPartida);

/*
Ahora vamos a por los botones. Empezamos con "botonDameCarta". Este tiene que hacer lo siguiente:
- Se tiene que seleccionar una carta de forma aleatoria. Según las reglas, del 1-7 o del 10-12.
- Guardaremos esa carta obtenida en una variable.
- Calcularemos cuánto vale esa carta obtenida.
- Sumaremos ese valor a la puntuacionTotal.
- Actualizamos el mensaje de contenedorMensajePuntuacion
- Checkearemos si puede seguir jugando
*/

const obtenerCartaAleatoria = (): number => {
	let randomNum = Math.floor(Math.random() * 10);
	let cartas = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

	return cartas[randomNum];
};

const obtenerValorCarta = (carta: number): number => {
	if (carta > 7) {
		return 0.5;
	}

	return carta;
};

const actualizarPuntuacionTotal = (valorCarta: number): void => {
	puntuacionTotal += valorCarta;
};

/* const actualizarMensajePuntuacion = (puntuacionTotal: number): string => {
	let mensajeInicial = obtenerMensajePuntuacion();
	let mensajeFinal = "";

	if (puntuacionTotal === 0) {
		mensajeFinal = "";
	} else if (puntuacionTotal > 7.5) {
		mensajeFinal = "¡Has perdido! Te has pasado de 7.5 puntos.";
	} else if (puntuacionTotal === 7.5) {
		mensajeFinal = "¡Lo has clavado! ¡Enhorabuena!";
	} else if (puntuacionTotal >= 6 && puntuacionTotal < 7.5) {
		mensajeFinal = "Casi casi...";
	} else if (puntuacionTotal > 4 && puntuacionTotal < 6) {
		mensajeFinal = "Te ha entrado el canguelo eh?";
	} else if (puntuacionTotal <= 4 && puntuacionTotal > 0) {
		mensajeFinal = "Has sido muy conservador";
	}
	return mensajeInicial + ". " + "Puntos: " + mensajeFinal;
}; */

const habilitarBotones = (esVerdadero: boolean): void => {
	if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
		if (esVerdadero) {
			botonDameCarta.removeAttribute("disabled");
			botonDameCarta.setAttribute("style", "cursor:pointer");
		} else {
			botonDameCarta.setAttribute("disabled", "");
			botonDameCarta.setAttribute("style", "cursor:not-allowed");
		}
	}
	if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
		if (esVerdadero) {
			botonMePlanto.removeAttribute("disabled");
			botonMePlanto.setAttribute("style", "cursor:pointer");
		} else {
			botonMePlanto.setAttribute("disabled", "");
			botonMePlanto.setAttribute("style", "cursor:not-allowed");
		}
	}
};

const checkearSiPuedeSeguirJugando = (puntuacionTotal: number): void => {
	if (puntuacionTotal >= 7.5) {
		habilitarBotones(false);
	} else {
		habilitarBotones(true);
	}
};

const ejecutarAccionesBotonDameCarta = () => {
	let cartaAletoria = obtenerCartaAleatoria();
	let valorCarta = obtenerValorCarta(cartaAletoria);
	actualizarPuntuacionTotal(valorCarta);
	checkearSiPuedeSeguirJugando(puntuacionTotal);
	console.log(puntuacionTotal);
};

if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
	botonDameCarta.addEventListener("click", ejecutarAccionesBotonDameCarta);
}
