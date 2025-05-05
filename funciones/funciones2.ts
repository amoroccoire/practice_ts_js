/**
 * Mostrar los numero impares de entre m y n
 */

let m: number = 3;
let n: number = 36;

if (m >= n) {
    console.log("El primero numero debe ser menor al segundo");
}
else {
    detectarImpares(m, n);
}


function detectarImpares(m: number, n: number) {
    for (let i = m; i <= n; i++) {
        if (esImpar(i)) {
            console.log(i);
        }
    }
}

function esImpar(num: number): boolean {
    return (num % 2 == 1);
}