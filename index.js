const prompt = require('prompt-sync')()

// Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número: "));
let num3 = parseFloat(prompt("Ingresa el tercer número: "));

// Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
function ordenarNumeros(num1, num2, num3) {
    let mayor, medio, menor;

    if (num1 === num2 && num2 === num3) {
        console.log("Los números son iguales.");
        return [num1, num2, num3];
    }

    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
            medio = num2;
            menor = num3;
        } else {
            medio = num3;
            menor = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if (num1 >= num3) {
            medio = num1;
            menor = num3;
        } else {
            medio = num3;
            menor = num1;
        }
    } else {
        mayor = num3;
        if (num1 >= num2) {
            medio = num1;
            menor = num2;
        } else {
            medio = num2;
            menor = num1;
        }
    }

    return [mayor, medio, menor];
}

// Debe imprimir los números por consola ordenados de mayor a menor, y de menor a mayor.
let numerosOrdenados = ordenarNumeros(num1, num2, num3);

//Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola diciendo que los números son iguales.
console.log("Números ordenados de mayor a menor:", numerosOrdenados.join(", "));
console.log("Números ordenados de menor a mayor:", numerosOrdenados.reverse().join(", "));