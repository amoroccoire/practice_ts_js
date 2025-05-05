/**
 *  Mostrar la tala de multiplicar de un entero cualquiera para multiplicaciones del 1-12
 */

let num: number = 110;

multiplicar(num);

function multiplicar(numero: number) {
    for (let i = 1; i <=12; i++) {
        console.log(numero,"x",i,"=",numero*i);
    }
}