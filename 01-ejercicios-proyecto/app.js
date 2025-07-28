let contador = document.querySelector('#contador')
const incrementar = document.querySelector('#incrementar')
const decrementar = document.querySelector('#decrementar')
const resetear = document.querySelector('#reset')
const mensaje = document.querySelector('#mensaje')
let total = 0;


incrementar.addEventListener('click', incrementarUno);
function incrementarUno() {
    total++;
    contador.textContent = total;

    //mostrar mensaje
    comprobarMensaje(); 
}

decrementar.addEventListener('click', decrementarUno);
function decrementarUno() {
    if (total > 0){
        total--;
        contador.textContent = total;
        
        //mostrar mensaje
        comprobarMensaje(); 
    } 
}

resetear.addEventListener('click', resetearContador);
function resetearContador() {
    total = 0;
    contador.textContent = total;
}

function comprobarMensaje(){
    mensaje.textContent = total === 10 ? 'Has llegado a 10' : ''; 
}

