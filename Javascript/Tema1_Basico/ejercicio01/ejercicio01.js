// 1 PEDIR 2 NUMEROS AL USUARIO
// DECIDIR CUAL ES MAYOR DE LOS 2
// HACES TANTOS PARRAFOS COMO EL MAYOR DE LOS 2 Y EL TEXTO DE LOS PARRAFOS SE LOS PIDES AL USUARIO.

/* let numero1 = parseInt(prompt("Introduce un número"));
let numero2 = parseInt(prompt("Introduce un número"));

    if(numero1 > numero2){
        alert("El número 1 es mayor");
        for(let i = 0; i < numero1; i++){
            let texto = prompt("introduce parrafo:");
            document.write( "<p>"+texto+"</p>");

        }
    } else{
        alert("El número 2 es mayor");
        for(let i = 0; i < numero2; i++){
            let texto = prompt("introduce parrafo:");
            document.write( "<p>"+texto+"</p>");

        }
    } */

// SOLUCION PROFE: 

let n1 = parseInt(prompt("Dame un número"));
//let n2 = Number(prompt("Dame otro número"));
let n2 = +prompt("Dame otro número"); /*el + pegado al prompt para pasar a numero*/ 

let mayor;

    if(n1 > n2){
        alert(n1 + " es mayor que " + n2);
        mayor = n1;
    }else if (n1 < n2){
        alert(n2 + " es mayor que " + n1);
        mayor = n2;
    }else {
        alert(n1 + " es igual que " + n2)
        mayor=n1;
    }

    let parrafo;
    for(let i = 0; i < mayor; i++){
        parrafo = prompt("Dame el texto del parrafo " +(i+1));
        document.write( "<p>"+parrafo+"</p>");
    }

    


