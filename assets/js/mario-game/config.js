// ===================================
// CONFIGURACIÓN
// Todos los "números mágicos" y listas de datos en un único sitio.
// Si hay que cambiar algo del juego, se cambia aquí.
// ===================================

export const CONFIG = {
    // Carpeta de las imágenes (relativa al HTML)
    RUTA_IMG: "../assets/img/mariobros/",

    // prettier-ignore
    SPRITES: [
        "mario.webp",
        "luigi.webp",
        "yoshi.webp",
        "bowser.webp",
        "king-boo.webp",
        "lakitu.webp",
        "setaAzul.webp",
        "wario.webp"
    ],

    NOMBRES: ["Mario", "Luigi", "Yoshi", "Bowser", "King-Boo", "Lakitu", "Seta Azul", "Wario"],

    // Monedas que aparecen en cada tanda
    CANTIDAD_MONEDAS: 8,

    // Probabilidad (0 a 1) de que una moneda de la tanda sea maldita
    PROBABILIDAD_MALDITA: 0.3,

    // Duración (ms) de la transición al avanzar o retroceder
    VELOCIDAD: 800,
};
