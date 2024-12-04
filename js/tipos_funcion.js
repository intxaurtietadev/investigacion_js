//Declaracion
function cuadrado(x){
    return x * x;
}
console.log(cuadrado (2));

//Expresion
const cuadradoEx = function(x){
    return x * x;
}
console.log(cuadradoEx (4));

//Flecha
const cuadradoArr = (x) => {
    return x *x;
}
console.log(cuadradoArr (6));

//Flecha abreviada
const cuadradoArrow = x => x *x;
console.log(cuadradoArrow (8));