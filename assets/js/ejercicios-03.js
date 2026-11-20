// FUNCIONES

function saludar(nombre) {
    alert("Hola " + nombre);
}

function sumarDosNumeros(n1, n2) {
    let suma = n1 + n2;
    return suma;
}

function restarDosNumeros(n1, n2) {
    let resta = n1 - n2;
    return resta;
}

function multiplicarDosNumero(x, y) {
    let multiplicación = x * y;

    return multiplicación;
}

function dividirDosNumeros(n1, n2) {
    let división = n1 / n2;

    return división;
}

function probarFunciones() {
    let n1 = parseFloat(prompt("Introduce el primer número:"));
    let n2 = parseFloat(prompt("Introduce el segundo número:"));

    let suma = sumarDosNumeros(n1, n2);
    let resta = restarDosNumeros(n1, n2);
    let multiplicación = multiplicarDosNumero(n1, n2);

    console.log("La suma de " + n1 + " + " + n2 + " es " + suma);
    console.log("La resta de " + n1 + " - " + n2 + " es " + resta);
    console.log("El producto de " + n1 + " * " + n2 + " es " + multiplicación);

    while (n2 === 0) {
        alert("El divisor no puede ser cero");
        n2 = parseInt(prompt("Escribe un divisor diferente de cero"));
    }
    let división = dividirDosNumeros(n1, n2);

    console.log("La división entre " + n1 + " y " + n2 + " es: " + división);
}

// saludar("Isabela");
// saludar("Cristina");
// saludar("Cristian");

// probarFunciones();

// Calculadora mejorada

function usarCalculadora() {
    let operation = parseFloat(prompt("Elige la operación que quieres hacer: \n" + "[1] - Suma \n" + "[2] - Resta \n" + "[3] - Multiplicación \n" + "[4] - División \n"));
    let n1 = parseFloat(prompt("Introduce el primer número:"));
    let n2 = parseFloat(prompt("Introduce el segundo número:"));

    switch (true) {
        case operation === 1:
            let suma = sumarDosNumeros(n1, n2);
            console.log("La suma de " + n1 + " + " + n2 + " es " + suma);
            break;
        case operation === 2:
            let resta = restarDosNumeros(n1, n2);
            console.log("La resta de " + n1 + " - " + n2 + " es " + resta);
            break;
        case operation === 3:
            let multiplicación = multiplicarDosNumero(n1, n2);
            console.log("El producto de " + n1 + " * " + n2 + " es " + multiplicación);
            break;
        case operation === 4:
            while (n2 === 0) {
                alert("El divisor no puede ser cero");
                n2 = parseInt(prompt("Escribe un divisor diferente de cero"));
            }
            let división = dividirDosNumeros(n1, n2);
            console.log("La división entre " + n1 + " y " + n2 + " es: " + división);
            break;
        default:
            console.log("Gracias por usar la calculadora");
    }
}

usarCalculadora();
