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

function usarCalculadoraCorregido() {
    let operation = 99;
    let message = "";
    let n1 = 0;
    let n2 = 0;
    let next = 0;

    while (operation < 0 || operation > 4) {
        operation = parseFloat(prompt("Elige la operación que quieres hacer: \n" + "[0] - Salir \n" + "[1] - Suma \n" + "[2] - Resta \n" + "[3] - Multiplicación \n" + "[4] - División \n"));

        if (operation < 0 || operation > 4) {
            alert("Escribe alguno de los números indicados");
        }
    }

    if (operation > 0) {
        n1 = parseFloat(prompt("Introduce el primer número:"));
        n2 = parseFloat(prompt("Introduce el segundo número:"));
    }

    switch (operation) {
        case 1:
            suma = sumarDosNumeros(n1, n2);
            message = "La suma de " + n1 + " + " + n2 + " es " + suma;
            break;
        case 2:
            resta = restarDosNumeros(n1, n2);
            message = "La resta de " + n1 + " - " + n2 + " es " + resta;
            break;
        case 3:
            multiplicación = multiplicarDosNumero(n1, n2);
            message = "El producto de " + n1 + " * " + n2 + " es " + multiplicación;
            break;
        case 4:
            while (n2 === 0) {
                alert("El divisor no puede ser cero");
                n2 = parseInt(prompt("Escribe un divisor diferente de cero"));
            }
            división = dividirDosNumeros(n1, n2);
            message = "La división entre " + n1 + " y " + n2 + " es: " + división;
            break;
        default:
            message = "Gracias por usar la calculadora. Hasta pronto";
    }

    alert(message);
    console.log("Continuar antes de pedir = " + next);

    next = parseInt(prompt("¿Quieres realizar otra operación? [Pulse 1 para continuar]"));
    console.log("continuar después de pedir = " + next);

    if (next === 1) {
        usarCalculadoraCorregido();
        console.log("continuar en el if = " + next);
    }

    console.log("continuar después del if =" + next);
}

// saludar("Isabela");
// saludar("Cristina");
// saludar("Cristian");

// probarFunciones();
// usarCalculadora();
usarCalculadoraCorregido();
