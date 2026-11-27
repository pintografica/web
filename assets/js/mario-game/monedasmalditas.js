import { Moneda } from "./Moneda.js";

// ===================================
// CLASE MONEDA MALDITA
// Es una Moneda más (se coloca sola, se recoge igual), pero
// al cogerla Mario pierde una vida en lugar de ganar una moneda.
// Depende de: Moneda (Moneda.js)
// ===================================

export class MonedaMaldita extends Moneda {
    constructor(escenario) {
        super(escenario);

        this.esMaldita = true;

        // Aspecto distinto para que se pueda reconocer (violeta y oscura)
        this.elemento.classList.add("maldita");
        this.elemento.style.filter = "hue-rotate(250deg) saturate(2) brightness(0.65) drop-shadow(0 0 6px #7b1fa2)";
    }
}
