function verificarParImpar(numero) {
    console.log("Verificando el número:", numero); // Declaración de registro
  
    if (numero % 2 === 0) {
      return "El número es par"; // Devuelve si el número es par
    } else {
      return "El número es impar"; // Devuelve si el número es impar
    }
  }
  
  // Usando la función
  let resultado = verificarParImpar(10);