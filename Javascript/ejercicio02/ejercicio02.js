"use strict";

//1. PIDE UN STRING AL USUARIO.
//2. DI CUANTAS VOCALES TIENE ESE STRING
//3. DEVUELVE LA CADENA INVERTIDA

let frase = prompt("Escribe una frase: ").toLocaleLowerCase();
let contadorVocales = 0;

for (let i = 0; i <= frase.length; i++) {
  switch (frase.charAt(i)) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      contadorVocales++;
      break;
  }
}

alert("La cadena de texto tiene: " + contadorVocales + " vocales");

var fraseInvertida = frase.split("").reverse().join("");
alert(fraseInvertida);



/**
 * SOLUCION PROFE
 * 
 * */  

let cadena = prompt("Dame la cadena"); // hola
let contadorVocales1 = 0;
let cadenaReves = "";

for (let i = 0; i < cadena.length; i++) { // i va a contar hasta que llegue a la longitud de la cadena hola = 4
  if (cadena.charAt(i).toLowerCase() == "a" || // charAt coge un solo caracter, la que esté dentrdo del parentesis
    cadena.charAt(i).toLowerCase() == "e" ||
    cadena.charAt(i).toLowerCase() == "i" ||
    cadena.charAt(i).toLowerCase() == "o" ||
    cadena.charAt(i).toLowerCase() == "u"
  )
    contadorVocales1 = contadorVocales1 + 1;

  cadenaReves = cadena.charAt(i) + cadenaReves;
}

alert(
  "Cantidad de vocales es: " +
    contadorVocales +
    "\ncadena al revés: " +
    cadenaReves
);
