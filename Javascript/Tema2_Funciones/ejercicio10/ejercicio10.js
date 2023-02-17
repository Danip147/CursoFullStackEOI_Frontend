/*
0) RECORRE UN ARRAY DE LOS DÍAS DE LA SEMANA DE 4 FORMAS DISTINTAS
1) DEVUELVE OTRO ARRAY DONDE CADA DIA DE LA SEMANA SE LE CONCATENE EL NÚMERO DE LA SEMANA DE 1 A 7
2) IMPRIME OTRO ARRAY CON LOS ELEMENTOS QUE ACABEN EN CONSONANTE
3) INDICA SI ALGÚN DÍA TIENE 2 VOCALES A O E EN EL NOMBRE
4) ORDENA EL ARRAY DE DIAS DESCENDENTEMENTE.
 */

let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sábado","Domingo",];

// for normal
for (let i = 0; i < diasSemana.length; i++) {
  console.log(diasSemana[i]);
}
// forEach
diasSemana.forEach(function (dia, index) {
  console.log(index + ": " + dia);
});
// for in
for (let i in diasSemana) {
  console.log(i + ": " + diasSemana[i]);
}
// for of
for (let dia of diasSemana) {
  console.log(dia);
}

// 1) Devuelve otro array con el número de la semana concatenado al nombre del día
let diasSemanaNum = diasSemana.map(function (dia, index) {
  return index + 1 + "-" + dia;
});

let impresion = diasSemanaNum.join();

console.log(diasSemanaNum);

/*  diasSemana.map((dia, index)) => index + 1 + "-" + dia; */



// 2) Imprime otro array con los elementos que acaben en consonencia
    /* let arrayFilter = diasSemana.filter(function(elemento){
      if(elemento.charAt(elemento.length-1) == A || 
        elemento.charAt(elemento.length-1) == E || 
        elemento.charAt(elemento.length-1) == I || 
        elemento.charAt(elemento.length-1) == O || 
        elemento.charAt(elemento.length-1) == U )
        return false;
      else
        return true;
    })
  
  console.log(arrayFilter.join());  */ 


// 3) Indica si algún día tiene 2 vocales a, o, e en el nombre
let dosVocales = diasSemana.some(function (dia) {
  let numVocales = 0;
  let vocales = "aeo";

  for (let i = 0; i < dia.length; i++) {
    if (vocales.includes(dia[i].toLowerCase())) {
      numVocales++;
    }
  }

  return numVocales >= 2;
});

console.log("¿Algún día tiene 2 vocales a, o, e en el nombre?: " + dosVocales);



// 4) Ordena el array de días descendentemente
/* let diasSemanaDesc = diasSemana.reverse();
console.log(diasSemanaDesc); */

console.log(diasSemana.sort().reverse().join());

 diasSemana.sort(function(x1,x2){
  if(x1 > x2)
      return -1;
  else if (x1 < x2)
    return 1
    else 
      return 0;
});

console.log(diasSemana.join()); 

/* diasSemana.sort(x1,x2) => {
  if(x1 > x2)
      return -1;
  else if (x1 < x2)
    return 1;
    else 
      return 0;
}; */

