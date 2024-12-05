//REST

function duplicar(...numeros) {
    numeros.forEach(numero => console.log(numero * 2));
  }
  
  duplicar(1, 2, 3, 4); 
  
// ARGUMENTS

function duplicarAr() {
  Array.from(arguments).forEach(numero => console.log(numero * 2));
}

duplicarAr(1, 2, 3, 4);

//ARGUMENTS SIN ARRAY NI FLECHA
function duplicarArr() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i] * 2);
  }
}

duplicarArr(1, 2, 3, 4);