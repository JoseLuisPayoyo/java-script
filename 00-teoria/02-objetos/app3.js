// Object literal
const producto = {
    nombre: "Monitor",
    precio: 29.99,
}

//Object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto("Monitor", 399.99);
console.log(producto2);

const producto3 = new Producto("Raton", 99.99);
console.log(producto3);


//METODOS PARA OBJETOS
console.log(Object.keys(producto))
console.log(Object.values(producto))
console.log(Object.entries(producto))