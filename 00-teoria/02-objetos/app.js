"use strict";
// un objeto agrupa todo en una sola variable 

// object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 29.99,
    disponible: true
};

console.log(producto);
console.log(producto.nombre)

//agregar o eliminar propiedad
producto.imagen = 'imagen.jpg'
delete producto.imagen

//asignar los valores de un objeto a una variable
//const nombre = producto.nombre
const { nombre, precio } = producto
console.log(nombre)

//crear objetos dentro de objetos
const bebida = {
    nombre: 'coca-cola',
    ingresientes: {
        salador: 'Sal',
        endulzante: 'Azucar'
    }
}
console.log(bebida.ingresientes.salador)

//extraer ingedientes
const {ingresientes: {endulzante}} = bebida;
console.log(endulzante);

// Metodos para los objetos
const producto2 = {
    nombre: "Raton",
    precio: 19.99,
    disponible: true
}
Object.freeze(producto2); //ni modificar ni eliminar ni añadir
//producto2.nombre = "Juan";
console.log(Object.isFrozen(producto2)) 

Object.seal(producto2); //se puede modificar, pero no eliminar ni añadir
console.log(Object.isSealed(producto2))

//copiar dos objetos
console.log(producto)
console.log(producto2)
//Spread o Rest Operator
const resultado = {...producto, ...producto2}
console.log(resultado)
