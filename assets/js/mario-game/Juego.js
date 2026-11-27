import { CONFIG } from "./config.js";
import { Mario } from "./Mario.js";
import { Moneda } from "./Moneda.js";
import { MonedaMaldita } from "./monedasmalditas.js";

// ===================================
// CLASE JUEGO
// Es el "director": guarda el estado (qué personajes y monedas hay)
// y coordina a Mario y Moneda. Antes eran variables globales sueltas.
// Depende de: CONFIG, Mario, Moneda, MonedaMaldita
// ===================================

export class Juego {
    constructor(escenario) {
        this.escenario = escenario;

        this.marios = []; // todos los personajes
        this.marioActivo = null; // el que recibe las órdenes
        this.contadorMario = 0; // para elegir el siguiente nombre y sprite

        this.monedas = []; // monedas que hay ahora en el escenario
        this.totalMonedas = 0; // monedas recogidas entre todos

        this.terminado = false; // true cuando sale el "Game Over"

        this.marcador = document.querySelector("#contadorMonedas");
    }

    // ===================================
    // ARRANQUE
    // ===================================

    iniciar() {
        this.generarMonedas();
        this.bucle();
    }

    // ===================================
    // PERSONAJES
    // ===================================

    crearMario() {
        if (this.terminado) return;

        // Siguiente personaje de la lista (vuelve al principio al acabar)
        const indice = this.contadorMario % CONFIG.NOMBRES.length;
        const nombre = CONFIG.NOMBRES[indice];
        const sprite = CONFIG.SPRITES[indice];

        const nuevoMario = new Mario(nombre, sprite, this.escenario);

        this.registrar(nuevoMario);
        this.contadorMario++;

        nuevoMario.mostrarMensaje(`${nombre} ha sido creado.`);

        return nuevoMario;
    }

    /**
     * Guarda el personaje en la lista y lo convierte en el activo
     */
    registrar(mario) {
        this.marios.push(mario);
        this.marioActivo = mario;
    }

    cambiarMarioActivo() {
        if (this.terminado || this.marios.length === 0) return;

        const indice = (this.marios.indexOf(this.marioActivo) + 1) % this.marios.length;

        this.marioActivo = this.marios[indice];
        this.marioActivo.mostrarMensaje(`${this.marioActivo.nombre} es ahora el personaje activo.`);
    }

    duplicarActivo() {
        if (!this.marioActivo) return;

        this.registrar(this.marioActivo.duplicar());
    }

    // ===================================
    // MONEDAS
    // ===================================

    generarMonedas(cantidad = CONFIG.CANTIDAD_MONEDAS) {
        for (let i = 0; i < cantidad; i++) {
            // La última siempre es buena si aún no hay ninguna buena en la tanda,
            // así nunca se queda el escenario solo con monedas malditas.
            const hayBuena = this.monedas.some((m) => !m.esMaldita);
            const forzarBuena = i === cantidad - 1 && !hayBuena;
            const esMaldita = !forzarBuena && Math.random() < CONFIG.PROBABILIDAD_MALDITA;

            this.monedas.push(esMaldita ? new MonedaMaldita(this.escenario) : new Moneda(this.escenario));
        }
    }

    recogerMoneda(mario, moneda) {
        if (moneda.esMaldita) {
            this.recogerMonedaMaldita(mario, moneda);
        } else {
            this.recogerMonedaBuena(mario, moneda);
        }
    }

    recogerMonedaBuena(mario, moneda) {
        mario.cogerMoneda(moneda);

        this.monedas = this.monedas.filter((m) => m !== moneda);

        this.totalMonedas++;
        this.marcador.textContent = this.totalMonedas;

        let mensaje = `${mario.nombre} coge una moneda (lleva ${mario.monedas}).`;

        // Si no quedan monedas buenas, se retiran las malditas sobrantes
        // y programamos una tanda nueva
        if (!this.monedas.some((m) => !m.esMaldita)) {
            mensaje += " ¡Era la última! Aparecen monedas nuevas.";

            this.monedas.forEach((m) => m.recoger());
            this.monedas = [];

            setTimeout(() => {
                if (!this.terminado) this.generarMonedas();
            }, 800);
        }

        mario.mostrarMensaje(mensaje);
    }

    recogerMonedaMaldita(mario, moneda) {
        moneda.recoger();

        this.monedas = this.monedas.filter((m) => m !== moneda);

        // perderVida() ya escribe el mensaje de vidas restantes
        mario.perderVida();

        if (mario.vidas === 0) {
            this.gameOver(mario);
        }
    }

    // ===================================
    // GAME OVER
    // ===================================

    gameOver(mario) {
        this.terminado = true;
        this.marioActivo = null; // sin personaje activo, los controles no hacen nada

        const pantalla = document.createElement("div");
        pantalla.className = "game-over";
        pantalla.style.cssText = `
            position: absolute;
            inset: 0;
            z-index: 100;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            text-align: center;
        `;
        pantalla.innerHTML = `
            <h2 style="font-size: 3rem; margin: 0; color: #e53935;">GAME OVER</h2>
            <p style="margin: 0;">${mario.nombre} ha perdido todas sus vidas.</p>
            <p style="margin: 0;">Monedas recogidas: ${this.totalMonedas}</p>
            <button type="button" style="padding: 0.6rem 1.2rem; font-size: 1rem; cursor: pointer;">
                Jugar de nuevo
            </button>
        `;

        pantalla.querySelector("button").addEventListener("click", () => location.reload());

        // El escenario debe tener position: relative para que el aviso lo cubra
        this.escenario.style.position = "relative";
        this.escenario.appendChild(pantalla);

        mario.mostrarMensaje(`GAME OVER: ${mario.nombre} ha perdido todas sus vidas.`);
    }

    // ===================================
    // COLISIONES
    // ===================================

    comprobarColisiones() {
        // [...] copia el array: recogerMoneda() lo modifica mientras lo recorremos
        for (const moneda of [...this.monedas]) {
            if (moneda.recogida) continue;

            const rectMoneda = moneda.elemento.getBoundingClientRect();
            const mario = this.marios.find((m) => m.toca(rectMoneda));

            if (mario) {
                this.recogerMoneda(mario, moneda);
            }
        }
    }

    /**
     * Bucle del juego: se repite en cada fotograma.
     * Hace falta porque Mario se mueve con una transición CSS y salta
     * con una animación: su posición real cambia sin que el código lo note.
     */
    bucle() {
        if (this.terminado) return;

        this.comprobarColisiones();
        requestAnimationFrame(() => this.bucle());
    }
}
