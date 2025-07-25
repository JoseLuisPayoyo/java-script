const encabezado = document.querySelector('h1');
console.log(encabezado);
console.log(encabezado.innerText); //si visibility = hidden no lo encuentra
console.log(encabezado.textContent); // si lo encuentra
console.log(encabezado.innerHTML); //se trae en html

document.querySelector('h1').textContent = 'Hola';


//CAMBIAR CSS
encabezado.style.color = 'red';
encabezado.style.fontFamily = 'arial';
encabezado.style.textTransform = 'uppercase';
//esto no es recomendado, es mejor quitar y poner clases

encabezado.classList.add('nueva-clase', 'segunda-clase');
encabezado.classList.remove('segunda-clase');


//TRASVERTING DOM
const navegacion = document.querySelector('.navegacion')
console.log(navegacion);
//console.log(navegacion.childNodes); devuelve tambien los espacios entre elementos
console.log(navegacion.children);