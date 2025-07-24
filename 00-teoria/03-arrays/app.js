const numeros = [1, 2, 3, 4, 5];
console.table(numeros)

//acceder a un elemento
console.log(numeros[2]);

//recorrer a un array
for(let i = 0; i <= numeros.length; i++){
    console.log(numeros[i]);
}
numeros.forEach(numero => {
    console.log(numero);
});

//añadir elementos
numeros.push(6);
console.log(numeros);


const carrito = [];
//definir un produccto
const producto = {
    nombre: "Monitor",
    precio: 299.99
}
const producto2 = {
    nombre: "Movil",
    precio: 399.99
}
carrito.push(producto); //añade al final
carrito.unshift(producto2); //añade al inicio
console.log(carrito);