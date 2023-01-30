'use strict'; // para que te obligue a declarar las variables

console.log("Hola mundo");
/* console.error("Algo ha fallado"); */
alert("Hola Mundo!");

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) 
        document.write("<p>Parrafo par</p>"); /*imprime en el html*/
  
  
    else document.write("<p>Parrafo impar</p>");
}


let numero = prompt("Dame un número");
alert("El numero que has escrito es: " + numero);

const pi =3.1416;
var x;
let y; //undefined

y = 5; //number
y = "hola"; // String
y = true; // boolean

