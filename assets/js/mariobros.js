"use strict";

/* Intentamos asignar las imágenes con backgroundImage pero no funcionaba.
let figuras = document.querySelectorAll("#galeria-mario figure");

console.log("---------------------");
console.log("array de figures de la galeria Mario");
console.log(figuras);
console.log("---------------------");

let imagesMarioBros = ["../assets/img/mariobros/mario.webp", "../assets/img/mariobros/bowser.webp", "../assets/img/mariobros/king-boo.webp", "../assets/img/mariobros/lakitu.webp", "../assets/img/mariobros/luigi.webp", "../assets/img/mariobros/setaAzul.webp", "../assets/img/mariobros/wario.webp", "../assets/img/mariobros/yoshi.webp"];

*/

// figuras.forEach(function (figura, indice) {
//     figura.style.backgroundImage = `url("${imagesMarioBros[indice]}")`;
// });

// Ejercicio 1B

let ulGaleriaMario = document.querySelector("#galeria-mario ul.galeria");

ulGaleriaMario.classList.add("personajes");

// Ejercicio 1c: Background-color y  figcaptions

let personajesGaleriaMario = ["Mario", "Luigi", "Yoshi", "Bowser", "Wario", "King-Boo"];

let bgColorsGaleriaMario = ["steelblue", "orange", "gold", "orchid", "green", "hotpink"];

let figuras = document.querySelectorAll("#galeria-mario figure");
let captions = document.querySelectorAll("#galeria-mario figcaption");

console.log(captions);

figuras.forEach(function (figura, indice) {
    figura.style.backgroundColor = bgColorsGaleriaMario[indice];
});

captions.forEach(function (caption, indice) {
    caption.textContent = personajesGaleriaMario[indice];
});
