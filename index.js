//RESUELVE LOS EJERCICIOS AQUÍ

//RESUELVE LOS EJERCICIOS AQUÍ

//1 Dado el objeto empleados, extrae la empleada Ana completa.
//1 Dado el objeto empleados, extrae la empleada Ana completa.
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
const [ ,ana, ] = empleados
console.log(ana)
//2 Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com
const [luis, , ] = empleados;
const emailLuis = luis.email;
console.log(emailLuis);//"Luis@gmail.com"
//3 Usa destructuración para cambiar los valores de a y b;
// Inicialmente
//let a = 5;
//let b = 3;
// Al final
//let a = 3;
//let b = 5;
const { a = 5, b = 3 } = { a: 3, b: 5 };
console.log(a); // 3
console.log(b); // 5
//4 Dado el objeto HIGH_TEMPERATURES Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
  const { today: maximaHoy , tomorrow: maximaManana } = HIGH_TEMPERATURES;
//5 Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
//sumEveryOther(6, 8, 2, 3, 1); //20
//sumEveryOther(11, 3, 12); //26
function sumEveryOther(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
      total += rest[i];
    }
    return total;
  }
//6  Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).
addOnlyNums(1, "perro", 2, 4); //7
function addOnlyNums(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        if(typeof rest[i] === "number"){
        total += rest[i];
        }
      }
      return total
}
console.log(addOnlyNums(1, "perro", 2, 4)); //7
//7 Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
function countTheArgs (...rest){
    return rest.length
}
console.log(countTheArgs("gato", "perro")); //2
console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4
//8  Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
function combineTwoArrays (arr1, arr2){
    const total =[ ...arr1, ...arr2,];
        return total
}
console.log(combineTwoArrays([1], [2, 3, 4, 5, 6]) )
//9 Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
function onlyUniques(...argumentos){
    return [...new Set(argumentos)];
};
console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); //["gato", "pollo", "cerdo"]
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]
//10
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]
function combineAllArrays (...argumentos){
    let resultado =[]
    for(let i=0; i<argumentos.length; i++){
     resultado = [...resultado, ...argumentos[i]]
    }
    return resultado
 }
console.log(combineAllArrays([1], [2, 3, 4, 5, 6]) )
//11 Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
function sumAndSquare (...argumentos){
    let resultado =[]
    for(let i=0; i<argumentos.length; i++){
     resultado = [...resultado, argumentos[i]**2]
    }
    return resultado.reduce((a, b)=> a+b)
 }
 console.log(sumAndSquare(1, 1, 2, 2, 3, 6, 7, 8))