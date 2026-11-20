// EJERCICIO: Bucle for

/* 
Cómo funciona For:
Crea un programa en JavaScript que:
Pida al usuario el número de líneas que debe escribir Bart.
Utilice un bucle for para repetir la misma frase ese número de veces.
Muestre cada frase en una línea diferente.
*/

function escribirCastigoUno() {
    let vueltas = parseInt(prompt("¿Cuántas veces se debe escribir la frase de castigo?"));

    let frase = prompt("Escribe frase de castigo en la pizarra");

    let message = "";

    for (let i = 1; i <= vueltas; i++) {
        // Guardarmos el texto a mostrar por Consola en una variable String
        message = i + ". ";
        message += frase;

        console.log(message);
    }
}

// EJERCICIO: Bucle while

/*
Cómo funciona:
Primero inicializamos el contador.
Comprobamos la condición antes de ejecutar.
Mostramos la frase.
Incrementamos el contador.
*/

function escribirCastigo2() {
    let vueltas = parseInt(prompt("¿Cuántas veces se debe escribir la frase de castigo?"));

    let frase = prompt("Escribe frase de castigo en la pizarra");

    let message = "";

    let i = 1;

    while (i <= vueltas) {
        message = i + ".- ";
        message += frase;

        console.log(message);

        // i = i + 1;
        // i += 1;
        // Para salir del bucle debemos poner:
        i++;
    }
}

// EJERCICIO: Do...while:

/*
El bucle se repite mientras se cumpla una condición.
Cómo funciona:
Primero inicializamos el contador.
Comprobamos la condición antes de ejecutar.
Mostramos la frase.
Incrementamos el contador.
*/

function escribirCastigoTres() {
    let vueltas = parseInt(prompt("¿Cuántas veces se debe escribir la frase de castigo?"));

    let frase = prompt("Escribe frase de castigo en la pizarra");

    let message = "";

    let i = 1;

    do {
        message = i + ": ";
        message += frase;
        console.log(message);
        i++;
    } while (i <= vueltas);
}

function mostrarTablaDeMultiplicarDeUnNumero() {
    let numero = parseInt(prompt("Escribe el número del que quieres ver la tabla de multiplicar"));
    let message = "";

    console.log("Tabla del " + numero);
    console.log("-------------");

    for (let i = 1; i <= 10; i++) {
        message = numero + " x " + i + " = " + numero * i;
        console.log(message);

        // console.log(`7 x ${i} = ${numero * i}`);
    }
}

function mostrarNumerosParesHastaValorDeUsuario() {
    let numero = parseInt(prompt("¿Hasta qué número quieres ver los pares?"));
    let message = "";

    console.log("Números pares del cero al " + numero);
    console.log("------------------------");

    for (let i = 0; i <= numero; i += 2) {
        message += i + ", ";
    }
    console.log(message);
}

// EJERCICIO: Condicional if

/* Enunciado: 

Bart tiene una nota de examen. Si obtiene un 5 o más, ha aprobado.

Solicita una nota y muestra el mensaje «¡Bart ha aprobado!» si es igual o superior a 5. 
*/

function mostrarAprobado() {
    let corte = parseFloat(prompt("Escriba la nota de corte para aprobar"));
    let nota = parseFloat(prompt("¿Qué nota tiene Bart?"));

    if (nota >= corte) {
        console.log("¡Has aprobado!");
    } else {
        console.log("Has reprobado");
    }
}

// EJERCICIO: Condicional if...else

/*Ahora queremos saber si Bart puede entrar en el colegio.

Solicita su edad. Si tiene 12 años o más, puede entrar; en caso contrario, debe esperar. */

function saberSiBartPuedeEntrarAlColegio() {
    let edad = parseInt(prompt("Escriba su edad"));

    if (edad >= 12) {
        console.log("Puedes entrar al colegio");
    } else {
        console.log("Tienes menos de 12 años, debes esperar");
    }
}

// EJERCICIO: Condicional  if...else if...else

function comprobarLaNotaDeBart() {
    let nota = parseFloat(prompt("¿Qué nota tiene Bart?"));

    if (nota >= 0 && nota < 5) {
        console.log("Suspenso");
    } else if (nota >= 5 && nota < 7) {
        console.log("Aprobado");
    } else if (nota >= 7 && nota < 9) {
        console.log("Notable");
    } else if (nota >= 9 && nota < 10) {
        console.log("Sobresaliente");
    } else if (nota === 10) {
        console.log("Matrícula de honor");
    } else {
        console.log("Nota inválida. Introduce un número entre 1 y 10");
        comprobarLaNotaDeBart();
    }
}

// EJERCICIO: Switch

function comprobarLaNotaDeBartConSwitch() {
    let nota = parseFloat(prompt("¿Qué nota tiene el estudiante?"));
    let calificacion = "";

    switch (true) {
        case nota >= 0 && nota < 5:
            calificacion = "Suspenso";
            console.log("Suspenso");
            break;
        case nota >= 5 && nota < 7:
            calificacion = "Aprobado";
            console.log("Aprobado");
            break;
        case nota >= 7 && nota < 9:
            calificacion = "Notable";
            console.log("Notable");
            break;
        case nota >= 9 && nota < 10:
            calificacion = "Sobresaliente";
            console.log("Sobresaliente");
            break;
        case nota === 10:
            calificacion = "Matrícula de honor";
            console.log("Matrícula de honor");
            break;
        case nota < 0 || nota > 10:
            console.log("Introduce una nota válida entre 0 y 10");
            break;
    }
}

function escogerCastigoDeBart() {
    let numero = 0;
    let castigo = "";
    let error = "";

    contador = 0;
    while (numero < 1 || numero > 4) {
        if (contador > 0) {
            alert("Por favor, recuerde escribir un número del 1 al 4.");
        }
        numero = parseInt(prompt("Escriba un número para escoger su castigo, siendo: \n" + "[1] - Limpiar pizarra \n" + "[2] - Recoger patio \n" + "[3] - Ordenar biblioteca \n" + "[4] - Escribir 100 frases"));
        contador++;
    }

    switch (numero) {
        case 1:
            castigo = "Limpiar la pizarra";
            // console.log("El castigo que corresponde es limpiar la pizarra");
            break;
        case 2:
            castigo = "Recoger el patio";
            // console.log("El castigo que corresponde es recoger el patio");
            break;
        case 3:
            castigo = "Ordenar la biblioteca";
            // console.log("El castigo que corresponde es ordenar la biblioteca");
            break;
        case 4:
            castigo = "Escribir cien frases";
            // console.log("El castigo que corresponde es escribir cien frases");
            break;
        default:
            error = "No deberías haber llegado aquí";
    }

    console.log("El castigo que corresponde es " + castigo);
}

// escribirCastigoUno();
// escribirCastigo2();
// escribirCastigoTres();
// mostrarTablaDeMultiplicarDeUnNumero();
// mostrarNumerosParesHastaValorDeUsuario();
// mostrarAprobado();
// saberSiBartPuedeEntrarAlColegio();
// comprobarLaNotaDeBart();
// comprobarLaNotaDeBartConSwitch();
escogerCastigoDeBart();
