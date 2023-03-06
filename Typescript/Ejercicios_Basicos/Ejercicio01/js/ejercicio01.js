"use strict";
/* Ejercicio1 */
let nombre;
nombre = "Pablo";
let edad;
edad = 30;
const PERSONAJE = {
    nombre: nombre,
    edad: edad
};
/* Ejercicio2 */
class Rombo {
    constructor(diagonalVertical, diagonalHorizontal) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
    calcularArea() {
        return this.diagonalVertical * this.diagonalHorizontal;
    }
}
const miRombo = new Rombo(10, 15); // creo un objeto
console.log(miRombo.calcularArea());


/*   Ejercicio03 */
let suma = (a, b) => {
    return a + b;
};
let spiderman = {
    nombre: "Peter Parker",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};
console.log(spiderman.nombre);
console.log(spiderman.poderes);
