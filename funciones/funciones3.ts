/**
 * filter, replace, find, repeat, reduce, sort
 */

const numeros = [5, 12, 8, 20, 1];
const filtrados = numeros.filter(n => n > 10);
console.log(filtrados); //[12, 20]

const oracion = "cielo es azul";
const nuevo = oracion.replace("azul", "gris");
console.log(nuevo); //cielo es gris

//primer par
const nums = [1, 3, 7, 8, 11, 12];
const primerPar = nums.find(n => n % 2 === 0);
console.log(primerPar); // 8

const palabra = "Typescript ";
console.log(palabra.repeat(3)); //Hola Hola Hola 

const products = [
    { name: "libro", price: 25 },
    { name: "cuaderno", price: 10 },
    { name: "lapiz", price: 2 },
  ];
  
//total con reduce
const total = products.reduce((sum, product) => sum + product.price, 0);
console.log(`Total: $${total}`);
  
//ordenar por precio
const sorted = products.sort((producto1, producto2) => producto1.price - producto2.price);
console.log("Ordenado por precio:", sorted);