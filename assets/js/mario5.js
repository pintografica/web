"use strict";

// ---- Elementos HTML ----

const outputSalida = document.querySelector("#resultado-clases");

let botonesControlesId = ["#btn-seleccionar-marioGaleria", "#btn-estrella-luigi", "#btn-girar-yoshi", "#btn-enemigo-bowser", "#btn-gigante-wario", "#btn-transparente-kingboo", "#btn-pixelado-seta", "#btn-espejo-lakitu", "btn-quitar-enemigo", "btn-comprobar-estrella"];

let personajesGaleria = document.querySelectorAll["#personajes-css ul.lista-personajes li figure"];

let botonesControles = document.querySelectorAll("#personajes-css ul.lista-controles li button");

let classesToggle = ["seleccionado", "estrella", "girando", "enemigo", "gigante", "transparente", "pixelado", "espejo"];

// Primer ejercicio:
// const botonMario = document.querySelector("#btn-seleccionar-mario");
// const marioGaleria = document.querySelector("#mario-galeria");

// // Segundo ejercicio:
// const botonLuigi = document.querySelector("#btn-estrella-luigi");
// const luigiGaleria = document.querySelector("#luigi-galeria");

// // Tercer ejercicio:
// const botonYoshi = document.querySelector("#btn-girar-yoshi");
// const yoshiGaleria = document.querySelector("#yoshi-galeria");

// // Cuarto ejercicio:
// const botonBowser = document.querySelector("#btn-enemigo-bowser");
// const bowserGaleria = document.querySelector("#bowser-galeria");

// // Quinto ejercicio:
// const botonWario = document.querySelector("#btn-gigante-wario");
// const warioGaleria = document.querySelector("#wario-galeria");

// // Sexto ejercicio:
// const botonKingBoo = document.querySelector("#btn-transparente-kingboo");
// const kingbooGaleria = document.querySelector("#kingboo-galeria");

// // Séptimo ejercicio:
// const botonSetaAzul = document.querySelector("#btn-pixelado-seta");
// const setaGaleria = document.querySelector("#seta-galeria");

// // Séptimo ejercicio:
// const botonLakitu = document.querySelector("#btn-espejo-lakitu");
// const lakituGaleria = document.querySelector("#lakitu-galeria");

// FUNCIÓN PARA AHORRAR CÓDIGO

/**
 *  Función seleccionarPersonaje()
 *
 *  Agrega la clase al elemento html y muestra un
 *  texto en el elemento outputSalida
 *
 *  Recibe un elemento Html, el nombre de una clase y un texto
 *
 *  @param {HTMLElement} personaje - nombre de un querySelector
 *  @param {string} class - Nombre de una clase CSS
 *  @param {string} slogan - Texto para mostrar en un <output>
 *  @param {HTMLElement} output - Elemento <output>
 *      para mostrar el slogan
 *
 *  @returns {void}
 */

function seleccionarPersonajes(personaje, clase, slogan, output = outputSalida) {
    const nombre = personaje.textContent;
    //Con esto no se para el efecto. personaje.classList.add(clase);
    let message = "";
    // personaje.classList.add(clase);
    personaje.classList.toggle(clase);

    if (personaje.classList.contains(clase)) {
        message = `${nombre} ${slogan}`;
    } else {
        message = `${nombre} ya no ${slogan}`;
    }

    output.textContent = message;
}
//prettier-ignore
// personajesGaleria.forEach(function (figura, indice) {
//     botonesControles[indice].addEventListener(
//         "click",
//         () => seleccionarPersonajes(
//             figura,
//             classesToggle[indice],
//             "se ha agregado la clase"
//         ));
// });

personajesGaleria.forEach(function (figura, indice) {
    botonesControles[indice].addEventListener(
        "click",
        () => seleccionarPersonajes(
            figura, classesToggle[indice],
            "mfjk,kjkmh"
        )
    )
})

// botonMario.addEventListener("click", () => seleccionarPersonajes(marioGaleria, "seleccionado", "ha sido seleccionado"));

// botonLuigi.addEventListener("click", () => seleccionarPersonajes(luigiGaleria, "estrella", "ahora tiene estrellitas"));

// botonYoshi.addEventListener("click", () => seleccionarPersonajes(yoshiGaleria, "girando", " no para de girar"));

// botonBowser.addEventListener("click", () => seleccionarPersonajes(bowserGaleria, "enemigo", " es un peligroso enemigo"));

// botonWario.addEventListener("click", () => seleccionarPersonajes(warioGaleria, "gigante", " es gigante"));

// botonKingBoo.addEventListener("click", () => seleccionarPersonajes(kingbooGaleria, "transparente", " desapareció"));

// botonSetaAzul.addEventListener("click", () => seleccionarPersonajes(setaGaleria, "pixelado", "está pixelada"));

// botonLakitu.addEventListener("click", () => seleccionarPersonajes(lakituGaleria, "espejo", "se dio la vuelta"));

// Otra manera de resolver el ejercicio, pero no ahorramos código.
/* Funciones JS
function seleccionarMario() {
    marioGaleria.classList.add("seleccionado");

    outputSalida.textContent = "Mario ha sido seleccionado";
}

function ponerEstrellasLuigi() {
    luigiGaleria.classList.add("estrella");

    outputSalida.textContent = "¡Ahora Luigi tiene estrellitas!";
}

function seleccionarBowser() {
    bowserGaleria.classList.add("enemigo");

    outputSalida.textContent = "¡Bowser es un enemigo!";
}

function girarYoshi() {
    YoshiGaleria.classList.add("girando");

    outputSalida.textContent = "¡Ahora Yoshi gira!";

}

// Eventos

botonMario.addEventListener("click", seleccionarMario);
botonLuigi.addEventListener("click", ponerEstrellasLuigi);
botonYoshi.addEventListener("click", girarYoshi);
botonBowser.addEventListener("click", seleccionarBowser);
*/
