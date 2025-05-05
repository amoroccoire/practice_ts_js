/*Programa que muestra el producto de la suma por la diferencia de 2 numeros*/

let num1: number = 5;
let num2: number = 6;

let res: number = (num1 + num2) * (num1 - num2);
let res2: number = Math.pow(num1, 2) - Math.pow(num2, 2);
console.log("Resultado manual:", res);
console.log("Resultado formula:", res2);