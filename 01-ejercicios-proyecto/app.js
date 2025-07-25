let contador = document.querySelector('#contador')
const incrementar = document.querySelector('#incrementar')
const decrementar = document.querySelector('#decrementar')

let total = 0;
incrementar.addEventListener('click', incrementarUno);
function incrementarUno() {
    total++;
    contador.textContent = total;
}

decrementar.addEventListener('click', decrementarUno);
function decrementarUno() {
    if (total > 0){
        total--;
        contador.textContent = total;
    } 
}

