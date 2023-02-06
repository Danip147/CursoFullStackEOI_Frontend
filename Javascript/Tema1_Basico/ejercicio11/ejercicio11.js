/* 
Solicita 2 números al usuario y debes devolver lo siguiente:
Cantidad de pares
Cantidad de Impares
Cantidad de positivos
Cantidad de negativos
Muestra todos los números que hay entre uno y otro, contando ambos.
Devuelve la suma de todos
Devuelve el factorial del mayor de los números */

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;
let suma = 0;
let cadena = "";
let factorial = 1;

let num1;
let num2;

// comporbar que un usuario nos mete un número
do {
  num1 = prompt("Ingresa un numero número:");
  if(num1 == ""){
    alert ("Error!, no puede estar vacio")
  }
  if (isNaN(num1)) {
    alert("Error!, te he dicho que me des un numero");
  }
} while (isNaN(num1) || num1 == "");

do {
  num2 = prompt("Dame otro numero");
  if(num2 == ""){
    alert ("Error!, no puede estar vacio")
  }
  if (isNaN(num2)) {
    alert("Error!, te he dicho que me des otro numero");
  }
} while (isNaN(num2) || num2 == "");


 let peque, grande;

if (num1 > num2) {
  peque = num2;
  grande = num1;
} else {
  peque = num1;
  grande = num2;
} 

/* if(num1 > num2){
    [num1, num2] = [num2=num1];
} */

// mostrar numero, par o impar, postivo suma
for (let i = peque; i <= grande; i++) {
    /* cadena = cadena+ " " +i; */
  if (i % 2 === 0) {
    pares++;
  } else {
    impares++;
  }

  if (i >= 0) {
    positivos++;
  } else if (i < 0) {
    negativos++;
  }

  suma += i;
  console.log(i);
}


console.log("cadena es: " + cadena);
console.log("Cantidad de pares: " + pares);
console.log("Cantidad de impares: " + impares);
console.log("Cantidad de positivos: " + positivos);
console.log("Cantidad de negativos: " + negativos);
console.log("Suma total: " + suma);

let mayor = Math.max(num1, num2);
for (let i = 1; i <= mayor; i++) {
  factorial *= i;
} 

console.log("Factorial del mayor: " + factorial);
