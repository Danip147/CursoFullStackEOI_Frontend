function pedirNumeros(texto, texto2) {
  let numero;

  do {
    numero = prompt(texto);
    if (numero < 0 || numero > 10) {
      alert("Error, el numero debe estar entre 1 y 10");
    }
    if (numero == "") alert("Error!, el númerono puede ser vacío");
    if (isNaN(numero)) alert(texto2);
  } while (isNaN(numero) || numero == "" || numero < 1 || numero > 10);
  return +numero;
  
}

function pedirModoVisualizacion() {
  let modo;
  do {
    modo = prompt(
      "Introduce el modo de visualización (LISTA, PARRAFO,TABLA o DESPLEGABLE):"
    ).toUpperCase();
    if (modo !== "LISTA" && modo !== "PARRAFO" && modo !== "TABLA" && modo !== "DESPLEGABLE") {
      alert("No has introducido un modo");
    }
  } while (modo !== "LISTA" && modo !== "PARRAFO" && modo !== "TABLA" && modo !== "DESPLEGABLE");

  return modo;
}

function imprime(num1, num2, mode) {
  let result = "";
  let start = Math.min(num1, num2); // 2
  let end = Math.max(num1, num2); // 4

  for (let i = 1; i <= end; i++) {
    switch (mode) {
      case "LISTA":
        result += "<li>" + start + " x " + i + " = " + start * i + "</li>";
        break;
      case "PARRAFO":
        result += "<p>" + start + " x " + i + " = " + start * i + "</p>";
        break;
      case "TABLA":
        result += "<tr><td>" + start + "</td><td> x </td><td>" + i + "</td><td> = </td><td>" +  i * start + "</td></tr>";
        break;
       case "DESPLEGABLE":
          result += "<option>" + start + " x " + i + " = " + start * i + "</option>";
          break; 
        
      default:
      return "Error: modo de visualización no válido.";
    }
  }

  if  (mode === "TABLA") {
    result = "<table>" + result + "</table>";
  }  else if  (mode === "LISTA") {
    result = "<ul>" + result + "</ul>";
  }   else if (mode === "DESPLEGABLE")
     result = "<select>" + result + "</select>"  
  return result;
}


// interaccion usuario
let n1 = pedirNumeros("Dame múmero", "error");
let n2 = pedirNumeros("Dame otro número", "error");
let mode = pedirModoVisualizacion();
let resultadoFinal = imprime(n1, n2, mode);
document.write(resultadoFinal);
