/* Crea una función que reciba tres strings y devuelva un string que contenga el 
primer string con todas las apariciones del segundo string sustituidas por el tercer string. */


  function replaceString(string1, target, replacement) {
    let cambio = new RegExp(target, "gi");
    let contador = string1.match(cambio).length; 
    let StringCambiado = string1.replace(cambio, replacement);

    console.log(StringCambiado);
    console.log(contador); 
  }


  function replaceString2(string1, cadenaACambiar, cambio) {
    let contador = 0;
    let index = string1.indexOf(cadenaACambiar);

    while (index !== -1) {
        index = string1.indexOf(cadenaACambiar, index + 1);
        ++contador;   
    } 

    let StringCambiado = string1.split(cadenaACambiar).join (cambio);

    console.log(StringCambiado);
    console.log(contador) 
  }


 
  

 replaceString("Pablo el loco lobo", "lo", "co");
 replaceString2("inclusivo selectivo", "vo", "ve");
