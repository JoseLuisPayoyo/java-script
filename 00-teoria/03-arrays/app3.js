const carrito = [
    {nombre: "Monitor", precio: 299.99},
    {nombre: "Movil", precio: 399.99},
    {nombre: "Teclado", precio: 99.99},
    {nombre: "Raton", precio: 79.99}
]

carrito.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
})

//map va a crear un nuevo arreglo
carrito.map(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
})