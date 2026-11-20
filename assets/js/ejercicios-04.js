// EJERCICIOS ARRAYS

// Enunciado. Crea un array con tres colores: "rojo", "verde" y "azul". Obtén el primero, el último y el número total de elementos. Después cambia "verde" por "amarillo".

function crearArrayColores() {
    let colores = [];

    colores = ["rojo", "verde", "manzana"];

    alert(colores[0]);

    colores[colores.length - 1];

    colores[1] = "amarillo";
}

function hacerListaCompra() {
    let lista = [];

    lista = ["Leche", "Pan", "Huevos"];

    console.log("La lista de la compra es " + lista);

    return lista;
}

function accederAUnElemento() {
    let comidas = ["Pizza", "Hamburguesa", "Paella"];

    console.log("Quiero comer " + comidas[1]);
}

// Cuántas mascotas tengo?

function contarMascotas() {
    let mascotas = ["Sakura", "Rona", "Rosita", "Ralph", "Linda", "Zutha"];

    console.log("Tengo " + mascotas.length + " mascotas");
}

// Añadir un producto

function agregarProductoALaListaCompra() {
    let lista = hacerListaCompra();

    console.log(lista);

    lista.push("Manzanas");
    console.log(lista);
}

// Eliminar una tarea

function eliminarUltimaTarea() {
    let tareas = ["Estudiar", "Comprar pan", "Hacer testamento"];

    console.log("Antes de pop()");
    console.log(tareas);

    tareas.pop();

    console.log("Después de pop()");
    console.log(tareas);

    console.log("pinto");
}

// Mostrar todas las series

function mostarTodasLasSeries() {
    let series = ["Dark", "Breaking Bad", "Roma", "Los Sopranos", "Juego de Tronos"];
    let message = "Mis series favoritas son: ";

    for (let i = 0; i < series.length; i++) {
        if (i === series.length - 2) {
            message += series[i] + " y ";
        } else if (i === series.length - 1) {
            message += series[i];
        } else {
            message += series[i] + ", ";
        }
    }

    console.log(message);
}

// Buscar un nombre: Comprueba si "María" está en la lista.

function buscarUnNombre() {
    let amigos = ["Carlos", "Lucía", "María"];
    let nombreABuscar = "María";

    console.log("¿Está " + nombreABuscar + " en la lista?");
    console.log(amigos.includes("María"));
}

// Crea un array con las comidas de lunes a viernes.

function crearMenuDeLaSemana() {
    let menus = ["Hamburguesa", "Pizza", "Raxo", "Pizza", "Patatas"];
    let menuDiaX = menus[2];

    console.log("Los miércoles hay " + menuDiaX);
}

// Sumar gastos

function sumarGastos() {
    let gastos = [25, 40, 15, 20];
    let total = 0;

    for (let i = 0; i < gastos.length; i++) {
        total += gastos[i];
        console.log("Parcial gastos:");
        console.log(total);
    }

    console.log("Total gastos:");
    console.log(total);
}

// crearArrayColores();
// hacerListaCompra();
// accederAUnElemento();
// contarMascotas()
// agregarProductoALaListaCompra();
// eliminarUltimaTarea()
// mostarTodasLasSeries();
// buscarUnNombre();
// crearMenuDeLaSemana()
sumarGastos();
