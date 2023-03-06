/* Ejercicio1 */
let nombre: string;
nombre = "Pablo";

let edad: number;
edad = 30;

const PERSONAJE = {
nombre: nombre,
edad: edad
};

/* Ejercicio2 */

class Rombo {
    private diagonalVertical: number;
    private diagonalHorizontal: number;
  
    constructor(diagonalVertical: number, diagonalHorizontal: number) {
      this.diagonalVertical = diagonalVertical;
      this.diagonalHorizontal = diagonalHorizontal;
    }
  
    calcularArea(): number {                                                // el number en esta línea es el valor de retorno
      return this.diagonalVertical * this.diagonalHorizontal;
    }
  }
 
  const miRombo: Rombo = new Rombo(10, 15);         // creo un objeto
  console.log(miRombo.calcularArea());


/*   Ejercicio03 */

let suma = (a:number, b: number): number => {
    return a + b;
}

let suma2 = (a:number, b: number): number => (a + b);   // otra forma más optimizada
  
/* Ejercicio04   */

interface heroes {
    nombre:string;
    poderes:string[];
}

const spiderman: heroes = {
  nombre: "Peter Parker",
  poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
}




  
  
  
  