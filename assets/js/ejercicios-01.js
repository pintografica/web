


function sumaDosNumeros() {

	let n1 = parseFloat(prompt("Introduce el primer número:"))
	
	let n2 = parseFloat(prompt("Introduce el segundo número:"))
	
	let suma = n1 + n2;
    alert("La multiplicación de " + n1 + " + " + n2 + " es " + suma);

}


function restaDosNumeros() {

	let n1 = parseFloat(prompt("Introduce el primer número:"))
	
	let n2 = parseFloat(prompt("Introduce el segundo número:"))
	
	let resta = n1 - n2;
    alert("La multiplicación de " + n1 + " - " + n2 + " es " + resta);

}



function multiplicarDosNumero() {
    let n1 = parseInt(prompt("Escribe el primer número"));

    let n2 = parseInt(prompt("Escribe el segundo número"));

    let multiplicación = n1 * n2;
    alert("La multiplicación de " + n1 + " * " + n2 + " es " + multiplicación);
}


function divisionDosNumeros() {

    // Pedimos el primer número al usuario
    let n1 =  parseInt(prompt("Escribe el dividendo"));

    // Pedimos el segundo número
    let n2 = parseInt(prompt("Escribe el divisor"));

    // Condicionamos para que no acepte el 0 como divisor
    while (n2 === 0) {
    alert("El divisor no puede ser cero");
    n2 = parseInt(prompt("Escribe un divisor diferente de cero"))
}

// Hacemos la operación
let resultado = n1 / n2;
alert("La división entre " + n1 + " y " + n2 + " es: " + resultado); 

}

// Llamamos a la función
// sumaDosNumeros();
// restaDosNumeros();
// multiplicarDosNumero();
// divisionDosNumeros();


function seleccionarOperacion() {

    let operacion = parseInt(prompt("Selecione la operación que desea ejecutar [01: suma | 02: resta | 03: multiplicación| 04: división]"));
    
    if (operacion === 1){
        alert("Has seleccionado SUMA");
        sumaDosNumeros();
    }
    else if (operacion === 2){
        alert("Has seleccionado RESTA");
        restaDosNumeros();
    }
    else if (operacion === 3){
        alert("Has seleccionado MULTIPLICACIÓN");
        multiplicarDosNumero();
    }
    else if (operacion === 4){
        alert("Has seleccionado DIVISIÓN");
        divisionDosNumeros();
    }
    else {
        alert("Por favor, seleccione una operación válida [1, 2, 3, 4]");
        seleccionarOperacion();
    }

}



seleccionarOperacion();