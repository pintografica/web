// ===============================================================
// 1a: SELECCIONAR VARIAS FIGURAS, COLOREARLAS Y ROTULARLASa
// Conceptos: querySelectorAll, array, forEach, style, textContent
// ===============================================================

// 1. Seleccionamos TODAS las figuras de la galería (devuelve una lista)
const figuras = document.querySelectorAll("#galeria-mario figure");
console.log(figuras.length); // debe salir 6

// 2. Un array con 6 colores (uno por figura)
let colores = ["pink", "tomato", "green", "magenta", "gold", "orchid", "green", "blue", "yellow"];

console.log(colores);

// 4. Recorremos las figuras: "indice" vale 0, 1, 2...
figuras.forEach((figura, indice) => {
    figura.style.backgroundColor = colores[indice];

    // Insertar al Mario en todos los figures
    // figura.classList.add("foto-mario");

    // querySelector también se puede usar sobre UN elemento:
    // busca solo dentro de esa figura
    figura.querySelector("figcaption").textContent = colores[indice];
    // Cambiar el estilo de color de todos los figcaption
    figura.querySelector("figcaption").style.color = "darkblue";
});

//  5. Haz que #info diga cuántas figuras hay en la galería.
let output = document.querySelector("#info");

output.textContent = figuras.length;
// Podemos concatenar de la misma manera que hicimos con las operaciones básicas
output.textContent += " Mario Bros se está sacando el certificado profesional de plomero";

// 6. Añadir una clase CSS con classlist

// Ponemos a Mario en la primera figura de la galeria. El dibujo no está en JS: está en la clase .foto-mario del CSS.
// figura.classList.add("foto-mario"); Está como comentario porque hay la agregamos en el bucle arriba.

// 7. Muestra el contenido del elemento que tienen el id = mario

let mario = document.querySelector("#mario");
console.log("------------------------------");
console.log(mario);
console.log("------------------------------");

// 8. Agregar otro item a lista galeria-mario. Tendrá también un figure y un figcaption.

// Capturar la lista entera
let listaGaleria = document.querySelector("#galeria-mario ul.galeria");

// Hemos creado un item nuevo
let li = document.createElement("li");

// Lo hemos metido en la lista
listaGaleria.appendChild(li);

// Hemos creado un nuevo figure
let figure = document.createElement("figure");

// Lo hemos metido dentro de la lista
li.appendChild(figure);

// Creamos el nuevo figure
let figcaption = document.createElement("figcaption");

// Hemos metido el figcaption dentro del figure
figure.appendChild(figcaption);

figuras = document.querySelectorAll("#galeria-mario figure");

console.log("======================================================");
console.log(figuras.length); // deben salir 7

console.log("======================================================");

figuras[figuras.length - 1].classList.add("galeria-before");
// figuras[figuras.length - 1].textContent = colores[figuras.length - 1];
figuras[figuras.length - 1].querySelector("figcaption").textContent = colores[figuras.length - 1];

figuras[figuras.length - 1].style.backgroundColor = colores[figuras.length - 1];
