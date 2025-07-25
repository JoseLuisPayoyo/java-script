// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listarCursos = document.querySelector('#lista-cursos')
let articulosCarrito = []

cargarEventListeners();
function cargarEventListeners() {
    //cuando agregas un curso presionando agregar al carrito
    listarCursos.addEventListener('click', agregarCurso);

    //eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //resetar el arreglo
        limpiarHTML(); //eliminamos todo el html
    })
}


// Funciones
function agregarCurso(e) {
    e.preventDefault();

    if ( e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//eliminar curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')

        //eliminar del arreglo
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)

        carritoHTML(); //iterar sobre el carrito y mostrar su html
    }
}

// lee el contenido del html al que le dimos click y extrae la info del curso
function leerDatosCurso(curso){
    //console.log(curso);

    // crear objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    //Agregar elementos al articulo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso]

    console.log(articulosCarrito);
    carritoHTML();
}

//Muestra el carrigo en el html
function carritoHTML() {
    //Limpiar el html
    limpiarHTML();

    //recorre el carrito y genera el html
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, id} = curso
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img width="100" src="${imagen}"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>1</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

//eliminar los cursos del tbody
function limpiarHTML() {
    //forma lenta
    //contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}