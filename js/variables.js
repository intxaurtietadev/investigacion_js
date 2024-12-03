
// Example with let
let age; // Declaration
age = 25; // Instantiation (first assignment)
age = 26; // Re-assignment (changing the value)
console.log( age); // Output: 26


// Example with var
var city = "New York"; 
var city = "Los Angeles"; // Redeclaration allowed
console.log("City:", city); // Output: Los Angeles



//example of var and let inside the block scope
if (true) {
  var x = 10; // Function/global scoped
  let y = 20; // Block scoped
  console.log("Inside block - x:", x); // Output: 10
  console.log("Inside block - y:", y); // Output: 20
}


console.log("Outside block - x:", x); // Output: 10
 //console.log("Outside block - y:", y); // Error: y is not defined



//example with data types
               
           let name="alicia" // de cadena o string
           let tieneGafas=true; // bouleano
           let edad=29;  //integer
           let precio=19.89 //float
           let house=null;
           let euros=undefined;
            alert(name+" "+tieneGafas+" "+edad+" "+precio+" "+house+" "+euros)




//example of const
           
    

           const iva=12;
           
           alert("El IVA es del ..."+iva+" por ciento")