/**
 * Implementacion basica del patron de diseño observer
 */

interface Observer {
    update(data: string): void;
}

class Observado implements Observer {
    constructor(private name: string) {

    }

    update(data: string): void {
        console.log(`${this.name} recibio la actualizacion: ${data}`);
    }
}

class Observador {
    private observados: Observado[] = [];

    addObservado(observado: Observado): void {
        this.observados.push(observado);
    }

    notify(data: string): void {
        this.observados.forEach(ob => ob.update(data));
    }
}

const maestro: Observador = new Observador();
const sub1: Observado = new Observado("suscripcion1");
const sub2: Observado = new Observado("suscripcion2");
const sub3: Observado = new Observado("suscripcion3");

maestro.addObservado(sub1);
maestro.addObservado(sub2);
maestro.addObservado(sub3);

maestro.notify("Nuevo video!!!!!");