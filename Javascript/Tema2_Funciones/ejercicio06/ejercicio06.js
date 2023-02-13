let numbers = [1, 2, 3, 4,9];
console.log("Array original: " + numbers.join(" ==> "));

numbers.push(5, 6); // añadir al final
numbers.unshift(-1, 0); // añadir al principio
console.log("Array después de concatenar 2 elementos más al final y 2 al principio: " + numbers.join(" ==> "));

numbers.splice(2, 3); // elimina las posiciones
console.log("Array después de eliminar las posiciones de la 3 a la 5: " + numbers.join(" ==> "));

numbers.splice(numbers.length - 1, 0, 5.5, 6.5);
console.log("Array después de insertar 2 elementos más entre el penúltimo y el último: " + numbers.join(" ==> "));

numbers.reverse(); // invierte el array
console.log("Array después de invertir el array: " + numbers.join(" ==> "));

numbers.sort(); // ordena el array
console.log("Array ordenado: " + numbers.join(" ==> "));