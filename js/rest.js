//REST

function duplicar(...numeros) {
    numeros.forEach(numero => console.log(numero * 2));
  }
  
  duplicar(1, 2, 3, 4); 
  
// ARGUMENTS

function duplicarAR() {
  Array.from(arguments).forEach(numero => console.log(numero * 2));
}

duplicarAR(1, 2, 3, 4);