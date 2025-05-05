/**
 * Se desea calificar en palabras una nota, segun el siguiente criterio
 * 0 - 4.9, reprobado, repite semestre
 * 5 - 10.4, reprobado, pasa a subsanacion
 * 10.5 - 15.9, aprobado
 * 16 - 20 aprobado con distincion maxima
 */

let nota: number = 5;
const rango1: string = "Reprobado, repite semestre";
const rango2: string = "Reprobado, pasa a subsanacion";
const rango3: string = "Aprobado";
const rango4: String = "Aprobado con distincion maxima";

if (nota <= 4.9) {
    console.log(rango1);
}
else if (nota <= 10.4) {
    console.log(rango2);
}
else if (nota <= 15.9) {
    console.log(rango3);
}
else {
    console.log(rango4);
}
