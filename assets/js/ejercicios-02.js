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

/*
While:
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

/*
Do...while:
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

// Condicional if...else

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

function comprobarLaNotaDeBart() {
    let nota = parseFloat(prompt("¿Qué nota tiene Bart?"));

    if (nota <= 4) {
        console.log("Suspenso");
    } else if (nota <= 6) {
        console.log("Aprobado");
    } else if (nota <= 8) {
        console.log("Notable");
    } else if (nota <= 9) {
        console.log("Sobresaliente");
    } else if (nota <= 10) {
        console.log("Matrícula de honor");
    }
}

// escribirCastigoUno();
// escribirCastigo2();
// escribirCastigoTres();
// mostrarTablaDeMultiplicarDeUnNumero();
// mostrarNumerosParesHastaValorDeUsuario();
// mostrarAprobado();
// saberSiBartPuedeEntrarAlColegio();
comprobarLaNotaDeBart();
