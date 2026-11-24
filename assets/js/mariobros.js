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

// Ejercicio 2. 1

// 1.- elemento html output#info
const info = document.querySelector("#info");

// 2.- Aquí se guardan todos los lis de la paleta con el texto con el nombre del color
const itemsPaletaColores = document.querySelectorAll("#paleta-colores li");

// 3.- aún no hay ningún color elegido
let colorSeleccionado = null;

// 4.- Pintar cada casilla de la paleta con el color que indica su texto
itemsPaletaColores.forEach(function (li) {
    li.style.backgroundColor = li.textContent;
});

// Ejercicio 2. 2: Guardar ese color y aplicarlo al figure que se le haga clic

function seleccionarColor() {
    colorSeleccionado = this.textContent;
    info.textContent = `Color seleccionado: ${colorSeleccionado}`;
}

function pintarFigura() {
    if (colorSeleccionado === null) {
        info.textContent = "Primero elige un color de la paleta";
        return;
    }

    this.style.backgroundColor = colorSeleccionado;
    info.textContent = `${this.textContent} ahora es ${colorSeleccionado}`;
}

// Conectar cada función con sus elementos:

itemsPaletaColores.forEach(function (li) {
    li.onclick = seleccionarColor;
});

figuras.forEach(function (figura) {
    figura.onclick = pintarFigura;
});

// Ejercicio extra: Agregar un nuevo figure

// No declaramos de nuevo la lista
let li = document.createElement("li");
let figure = document.createElement("figure");
let figcaption = document.createElement("figcaption");

ulGaleriaMario.appendChild(li);
li.appendChild(figure);
figure.appendChild(figcaption);

figuras = document.querySelectorAll("#galeria-mario figure");

// Agregamos la clase galeria-before
figure.classList.add("galeria-before");

// Agregamos el nombre del personaje
personajesGaleriaMario.push("Lakitu");
bgColorsGaleriaMario.push("Salmon");

figcaption.textContent = personajesGaleriaMario[personajesGaleriaMario.length - 1];
figure.style.backgroundColor = bgColorsGaleriaMario[figuras.length - 1];

// Otra manera:
// figuras = document.querySelectorAll("#galeria-mario figure");
// captions = document.querySelectorAll("#galeria-mario figcaption");
// figuras.forEach(function (figura, indice) {
//     figura.style.backgroundColor = bgColorsGaleriaMario[indice];
// });
// captions.forEach(function (caption, indice) {
//     caption.textContent = personajesGaleriaMario[indice];
// });

// Una manera de hacerlo:
// figuras[figuras.length - 1].querySelector("figcaption").textContent = personajesGaleriaMario[figuras.length - 1];
// figuras[figuras.length - 1].style.backgroundColor = bgColorsGaleriaMario[figuras.length - 1];
