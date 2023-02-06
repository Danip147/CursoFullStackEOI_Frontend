/* Ejercicio 1
•Crea una función que reciba 3 parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100). Dicha función hará lo siguiente:
•Los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21.
•Convierte el nombre de producto a string (por si acaso) y los otros 2 a número.
•Si el precio o el impuesto no son números válidos muestra un error.
•Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.
•Llama a la función varias veces, omitiendo parámetros, con todos ellos, y pasando algún valor no numérico en el precio o impuesto */

function precioFinal(nombreProducto = "Producto genérico", precio = 100 , impuesto = 21 ){
    
    nombreProducto = nombreProducto.toString();
    precio = Number(precio);
    impuesto = Number(impuesto); 
    

    if(isNaN(precio) || isNaN(impuesto) || (precio < 0) || (impuesto < 0)){
        console.error("Error! al introducir precio o impuesto")
    } else {
        
        let precioFinal = precio + (precio * impuesto / 100);
    
        console.log("Nombre de producto : " + nombreProducto+"\n precio inicial: "+ precio+"€\n precio con impuestos: " +  precioFinal+ "€");
    }

    

}
precioFinal();
precioFinal("Consola",550); 
precioFinal("Nevera", 1500, 60); 
precioFinal("nintendo", "hola", 50);
precioFinal(500, "550", 30); 
precioFinal(500, -30, 30);
precioFinal(500, 500, -30);


