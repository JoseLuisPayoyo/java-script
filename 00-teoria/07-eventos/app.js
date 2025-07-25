document.addEventListener('DOMContentLoaded') //se ejecuta cuando se descarga el html

//eventos con el mouse
document.addEventListener('click', () => {
    console.log("Click en el document")
})
doument.addEventListener('mouseout')
document.addEventListener('mousedown')

//eventos de formularios
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //previene la accion que realiza ese elemento por defecto
})