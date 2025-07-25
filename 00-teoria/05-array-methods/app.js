const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio', 'Julio']
const meses2 = ['Agosto', 'Septiembre']

const carrito = [
    { nombre: "Monitor", precio: 500},
    { nombre: "Raton", precio: 300},
    { nombre: "Teclado", precio: 200},
    { nombre: "Altavoz", precio: 100},
    { nombre: "Torre", precio: 400}
]


//comprobar si existe un valor (.includes y .some)
meses.forEach( mes => {
    if (mes === 'Enero'){
        console.log('Existe Enero')
    }
})

console.log(meses.includes('Enero')) //solo arreglos normales, no de objetos

const existe = carrito.some( producto => producto.nombre === 'Monitor')
console.log(existe) //some vale para arrays de objetos y para arrays simples



//buscar el indice de un elemento (findIndex)
const indice = meses.findIndex(mes => mes == 'Abril')
console.log(`Abril esta en el indice ${indice}`)

//encontrar un indice en un arreglo de objetos
const indice2 = carrito.findIndex(producto => producto.precio === 100)
console.log(indice2)


// sumar todos los precios (.reduce)
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0)
console.log(resultado)


//craer arreglo basado en el parametro (.filter)
let result;
result = carrito.filter( producto => producto.precio > 200);
console.log(result);


//crea un arreglo basado en la condicion que estamos revisando (.find)
const resultado2 = carrito.find( producto => producto.precio === 100)
console.log(resultado2);


//todos los elementos del arreglo deben cunmplir la misma condicion (.every)
const resultado3 = carrito.every(producto => producto.precio < 1000)
console.log(resultado3);


//unor dos arrays (.concat)
const unidos = meses.concat(meses2);
console.log(unidos);