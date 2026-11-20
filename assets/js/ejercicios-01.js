// EJERCICIOS JAVASCRIPT CON OPERACIONES MATEMÁTICAS

function sumarDosNumeros() {
    let n1 = parseFloat(prompt("Introduce el primer número:"));

    let n2 = parseFloat(prompt("Introduce el segundo número:"));

    let suma = n1 + n2;
    alert("La suma de " + n1 + " + " + n2 + " es " + suma);
}

function restarDosNumeros() {
    let n1 = parseFloat(prompt("Introduce el primer número:"));

    let n2 = parseFloat(prompt("Introduce el segundo número:"));

    let resta = n1 - n2;
    alert("La resta de " + n1 + " - " + n2 + " es " + resta);
}

function multiplicarDosNumero() {
    let n1 = parseInt(prompt("Escribe el primer número"));

    let n2 = parseInt(prompt("Escribe el segundo número"));

    let multiplicación = n1 * n2;
    alert("La multiplicación de " + n1 + " * " + n2 + " es " + multiplicación);
}

function dividirDosNumeros() {
    // Pedimos el primer número al usuario
    let n1 = parseInt(prompt("Escribe el dividendo"));

    // Pedimos el segundo número
    let n2 = parseInt(prompt("Escribe el divisor"));

    // Condicionamos para que no acepte el 0 como divisor
    while (n2 === 0) {
        alert("El divisor no puede ser cero");
        n2 = parseInt(prompt("Escribe un divisor diferente de cero"));
    }

    // Hacemos la operación
    let resultado = n1 / n2;
    alert("La división entre " + n1 + " y " + n2 + " es: " + resultado);
}

function seleccionarOperacion() {
    let operacion = parseInt(prompt("Selecione la operación que desea ejecutar [01: suma | 02: resta | 03: multiplicación| 04: división]"));

    if (operacion === 1) {
        alert("Has seleccionado SUMA");
        sumaDosNumeros();
    } else if (operacion === 2) {
        alert("Has seleccionado RESTA");
        restaDosNumeros();
    } else if (operacion === 3) {
        alert("Has seleccionado MULTIPLICACIÓN");
        multiplicarDosNumero();
    } else if (operacion === 4) {
        alert("Has seleccionado DIVISIÓN");
        divisionDosNumeros();
    } else {
        alert("Por favor, seleccione una operación válida [1, 2, 3, 4]");
        seleccionarOperacion();
    }
}

// EJERCICIO CALCULAR EL CUADRADO Y EL CUBO DE UN NÚMERO

function calcularCuadradoYCuboDeUnNumero() {
    let n1 = parseFloat(prompt("Introduce un número:"));
    let cuadrado,
        cubo = 0;
    let message = "";

    cuadrado = n1 ** 2;
    cubo = n1 ** 3;

    message = "El cuadrado de " + n1 + " es " + cuadrado;
    message += "\n";
    message += "El cubo de " + n1 + " es " + cubo;

    alert(message);
}

// EJERCICIO CALCULAR LA POTENCIA DE UN NÚMERO

function calcularLaPotenciaDeUnNumero() {
    let base = perseFloat;
}

// EJERCICIO CALCULAR LA MEDIA ARITMÉTICA DE TRES NÚMEROS

function calcularMediaAritmeticaDe3Numeros() {
    let n1 = parseFloat(prompt("Introduce el número 1"));
    let n2 = parseFloat(prompt("Introduce el número 2"));
    let n3 = parseFloat(prompt("Introduce el número 3"));
    let resultado = 0;
    let message = "";

    resultado = (n1 + n2 + n3) / 3;

    message = "La media aritmética de " + n1 + ", " + n2 + " y " + n3 + " es:" + resultado;
}

// EJERCICIO CALCULAR LA MEDIA ARITMÉTICA AVANZADA

function calcularMediaAritmeticaAvanzada() {
    let divisor = parseInt(prompt("Introduce el divisor de la media aritmética"));
    let num = 0;
    suma = 0;
    resultado = 0;

    let message = "La media aritmética de ";
    let contador = 1;

    while (contador <= divisor) {
        num = parseFloat(prompt("Introduzca el número " + contador + " de la serie para hallar la media aritmética"));

        if (contador < divisor) {
            message += num + " y ";
        } else {
            message += num;
        }

        suma += num;

        contador++;
    }

    resultado = parseFloat(suma / divisor);

    message += " es " + resultado;

    alert(message);
}

// Calcular área de un rectángulo

function calcularAreaDeUnRectangulo() {}

// El operador MOD: Es par o impar

function mostrarParOImpar() {
    let numero = parseInt(prompt("Introduce un número entero"));
    let message = "";

    if (numero % 2 === 0) {
        message = "El número " + numero + " es par";
    } else {
        message = "El número " + numero + " es impar";
    }

    alert(message);
}

function calcularSumaDeGauss() {
    let n = parseInt(prompt("Introduce la cantidad de días de desafío"));
    let resultado1 = 0;
    let resultado2 = 0;

    let message = "";
    let message2 = "";

    resultado1 = (n * (n + 1)) / 2;

    message = "La suma de Gauss mediante fórmula del número " + n + " es " + resultado1;

    alert(message);

    for (let i = 0; i <= n; i++) {
        resultado2 += i;
    }

    message2 = "La suma de Gauss mediante FOR del número " + n + " es " + resultado2;

    alert(message2);
}

function adivinarQueNumeroEstoyPensando() {
    const MI_NUMERO = 7;
    const LIMITE = 10;
    let tuNumero = 0;
    let message = "";

    while (MI_NUMERO !== tuNumero) {
        tuNumero = parseInt(prompt("Intenta adivinar el número que estoy pensando. Introduce un número entre 0 y 10"));

        if (MI_NUMERO > tuNumero) {
            message = "Mi número es mayor que " + tuNumero;
        } else if (MI_NUMERO < tuNumero) {
            message = "Mi número es menor que " + tuNumero;
        } else {
            message = "Enhorabuena, has dicho " + tuNumero + " y yo había pensado " + MI_NUMERO;
        }

        alert(message);
    }
}

// Llamamos a la función
// sumaDosNumeros();
// restaDosNumeros();
// multiplicarDosNumero();
// divisionDosNumeros();
// seleccionarOperacion();
// calcularCuadradoYCuboDeUnNumero();
// calcularMediaAritmeticaAvanzada();
// mostrarParOImpar();
// calcularSumaDeGauss();
// adivinarQueNumeroEstoyPensando();
