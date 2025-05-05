/*
Determinar si un estudiate aprueba o no, sabiendo que aprueba si su promedio calculado en base a 3 calificaciones es mayor o igual a 13; sino reprueba
*/

let nota1: number = 9;
let nota2: number = 10.5;
let nota3: number = 18;

let promedio: number = (nota1 + nota2 + nota3) / 3;
//promedio = Math.round(promedio);

let aprueba: boolean = promedio >= 13;

if (aprueba) {
    console.log("El estudiante aprueba con", promedio);
}
else {
    console.log("El estudiante desaprueba con", promedio);
}