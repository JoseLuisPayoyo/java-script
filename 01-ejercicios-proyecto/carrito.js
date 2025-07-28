let productos = [];

const listaProductos = document.querySelector('#productos')

listaProductos.addEventListener('click', manejarClickProducto);

carrito.addEventListener('click', eliminarProducto);



// FUNCIONES
function manejarClickProducto(e) {
    if (!(e.target.classList.contains("agregar"))) return;

    const producto = e.target.parentElement;
    const nombre = producto.querySelector('h3')
    const precio = producto.querySelector('p')
    const id = e.target.getAttribute('data-id')

    const existe = productos.find(p => p.id === id);
    if(!existe){
        productos.push({
            id: parseInt(id),
            nombre: nombre.textContent,
            precio: precio.textContent
        })

        mostrarCarrito();
    }
}

function mostrarCarrito(){
    const carrito = document.querySelector('#carrito');
    carrito.innerHTML = '';

    productos.forEach(p => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <th>${p.nombre}</th>
            <th>${p.precio}</th>
            <th><button class="eliminar" data-id="${p.id}">X</button></th>
        `;
        carrito.appendChild(tr);
    })
}

function eliminarProducto(e){
    if(e.target.classList.contains('eliminar')) {
        const id = parseInt(e.target.getAttribute('data-id'));

        productos = productos.filter( p => p.id !== id);

        mostrarCarrito();
    }
}