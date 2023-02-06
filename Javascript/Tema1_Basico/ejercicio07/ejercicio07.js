/**
 * Ejercicio 7 49
•
Crea un script que al cargar la página le pida al usuario un valor en euros y muestre por pantalla el valor convertido a dolares.
•
Busca en Internet la correspondencia entre el euro y el dólar.
•
Para pedir el valor utiliza la función prompt vista anteriormente.
•
Para escribir en pantalla utiliza la función document.write.
•
Debes verificar si el importe introducido es un número antes de hacer la conversión, si no lo es, se mostrará por pantalla el texto importe incorrecto.
 */


let cantidadEuros = +prompt("Introduce una cantidad de euros: ");

if(isNaN(cantidadEuros)){
    
    alert("Error al introducir el importe")

}else{
    let cantidadDolares = cantidadEuros * 1.08;
    document.write(cantidadEuros + " € equivale a : " + cantidadDolares+ " $ " );
}


