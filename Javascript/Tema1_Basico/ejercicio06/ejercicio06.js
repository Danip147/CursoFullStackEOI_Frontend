/**
 * Ejercicio 6 46
•
Solicita 2 números al usuario e indica lo siguiente:
1.
Qué número es mayor que el otro o si son iguales.
2.
Solicita una operación, pudiendose ser (Sumar, Restar, Multiplicar o Dividir) en caso que elija otra debes sacar un alert de error.
3.
Realiza la operación indicada con todo lo solicitado e imprime con console.log el resultado.
 */

let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));

if (num1 > num2) {
  alert("El numero 1 es mayor");
} else if (num < num2) {
  alert("El numero 2 es mayor");
} else {
  alert("Los numeros son iguales");
}

let operacion = parseInt(prompt("Seleccione la operación a realizar\n 1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir"));

switch (operacion) {
  case 1:
    let suma = num1 + num2;
    console.log(suma);
    break;
  case 2:
    let resta = num1 - num2;
    console.log(resta);
    break;
  case 3:
    let multi = num1 * num2;
    console.log(multi);
    break;
  case 4:
    let dividir = num1 / num2;
    console.log(dividir);
    break;
  default:
    alert("Error")
    break;
}
