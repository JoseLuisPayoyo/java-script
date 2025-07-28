let tareas = []; 

const tarea = document.querySelector('#tarea');
const agregarTarea = document.querySelector('#agregar');
const listaTareas = document.querySelector('#lista-tareas');

agregarTarea.addEventListener('click', agregarTareaHandler);

listaTareas.addEventListener('click', eliminarTarea);


function agregarTareaHandler() {
  const texto = tarea.value.trim(); 

  if (texto === '') return;

  
  tareas.push({
    id: Date.now(),
    texto: texto
  });

  mostrarTareas(); 
  tarea.value = ''; 
}


function mostrarTareas() {
  listaTareas.innerHTML = ''; 

  tareas.forEach(t => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${t.texto} <button class="eliminar" data-id="${t.id}">X</button>
    `;
    listaTareas.appendChild(li);
  });
}


function eliminarTarea(e) {
  if (e.target.classList.contains('eliminar')) {
    const id = parseInt(e.target.getAttribute('data-id'));

    tareas = tareas.filter(t => t.id !== id);

    mostrarTareas(); 
  }
}
