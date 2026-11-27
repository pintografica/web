"use strict";

const outputSalida = document.querySelector("#resultado-clases");
/*
let botonesControlesId = ["#btn-seleccionar-marioGaleria", "#btn-estrella-luigi", "#btn-girar-yoshi", "#btn-enemigo-bowser", "#btn-gigante-wario", "#btn-transparente-kingboo", "#btn-pixelado-seta", "#btn-espejo-lakitu", "btn-quitar-enemigo", "btn-comprobar-estrella"];
*/

let pepe = document.querySelectorAll("#personajes-css ul.lista-personajes li figure");

console.log(pepe);

let botonesControles = document.querySelectorAll("#personajes-css ul.lista-controles li button");

let classesToggle = ["seleccionado", "estrella", "girando", "enemigo", "gigante", "transparente", "pixelado", "espejo"];

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
        message = `${nombre} ${slogan} ${clase}`;
    } else {
        message = `${nombre} ya no ${slogan} ${clase}`;
    }

    output.textContent = message;
}

pepe.forEach(function (figura, indice) {
    botonesControles[indice].addEventListener("click", () => seleccionarPersonajes(figura, classesToggle[indice], "agrega la clase"));
});
