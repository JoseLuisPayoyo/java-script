const carrito = [];

const producto = {
    nombre: "Monitor",
    precio: 299.99
}
const producto2 = {
    nombre: "Movil",
    precio: 399.99
}
const producto3 = {
    nombre: "Teclado",
    precio: 99.99
}

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
console.log(resultado);

//Destructurig de arrays
const numeros = [1, 2, 3, 4, 5];
const [primero] = numeros;
console.log(primero);

const[segundo, ...otros] = numeros;
console.log(...otros);