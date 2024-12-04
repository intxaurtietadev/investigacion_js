function suma(a, b) {
    return a + b;
}


const resultado = suma(3, 1);
console.log('El resultado de suma es:', resultado);

function sumaPre(a, b = 1) {
    return a + b;
}

const resultadoPre = suma(2);

console.log('El resultado de sumaPre es el mismo:', resultadoPre);



document.write('<p class="red-text"> Argumentos🔸 y Parametros🔻</p>');

document.write('<p class ="blue-text">Los diferencias❓❓❓</p>');