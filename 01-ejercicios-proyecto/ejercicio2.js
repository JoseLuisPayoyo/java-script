const tareas = [];

const tarea = document.querySelector('#tarea')
const agregarTarea = document.querySelector('#agregar')
const listaTareas = document.querySelector('#lista-tareas')

agregarTarea.addEventListener('click', agregarTareaHandler);
function agregarTareaHandler(){
    const texto = tarea.value;

    if (texto === '') return;
    tareas.push(texto)
    listaTareas.innerHTML = '';

    tareas.forEach( t => {
        const li = document.createElement('li');
        li.textContent = t;
        listaTareas.appendChild(li);
    })
    tarea.value = '';
    
}