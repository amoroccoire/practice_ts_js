type Producto = {
    id: number;
    nombre: string;
    precio: number;
};

const producto: Producto = {
    id:1,
    nombre:"Laptop",
    precio:2000,
};

console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);