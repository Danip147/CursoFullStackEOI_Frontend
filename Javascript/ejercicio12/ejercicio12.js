/* 
Solicita 2 números al usuario y debes devolver lo siguiente:

Cantidad de pares
Cantidad de Impares
Cantidad de positivos
Cantidad de negativos
Muestra todos los números que hay entre uno y otro, contando ambos.
Devuelve la suma de todos
Devuelve el factorial del mayor de los números */

let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;
let suma = 0;

if (num1 > num2) {
  [num1, num2] = [num2, num1];
}

for (let i = num1; i <= num2; i++) {
  if (i % 2 === 0) {
    pares++;
  } else {
    impares++;
  }

  if (i > 0) {
    positivos++;
  } else if (i < 0) {
    negativos++;
  }

  suma += i;
  console.log(i);
}

console.log("Cantidad de pares: " + pares);
console.log("Cantidad de impares: " + impares);
console.log("Cantidad de positivos: " + positivos);
console.log("Cantidad de negativos: " + negativos);
console.log("Suma total: " + suma);

let mayor = Math.max(num1, num2);
let factorial = 1;
for (let i = 1; i <= mayor; i++) {
  factorial *= i;
}

console.log("Factorial del mayor: " + factorial);



