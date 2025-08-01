document.addEventListener('DOMContentLoaded', function() {
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario')
    const btnSumbit = document.querySelector('#formulario button[type="submit"]')
    const spinner = document.querySelector('#spinner')

    // asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    formulario.addEventListener('submit', enviarEmail)

    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex')
        spinner.classList.remove('hidden')

        setTimeout(() => {
            spinner.classList.remove('flex')
            spinner.classList.add('hidden')
            
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Enviado Correctamente'
            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000)
        }, 1000);
    }

    function validar (e) {
        if (e.target.value.trim() === ''){
            mostrarAlerta(`El ${e.target.id} es obligatorio`, e.target.parentElement);
            comprobarEmail();
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        // asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        // comprobar el objeto de email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        // comprueba si ya existe una alerta
        limpiarAlerta(referencia);

        // generar alerta en html
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'alerta')

        // inyectar error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.alerta');
        if (alerta){
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if (Object.values(email).includes('')){
            btnSumbit.classList.add('opacity-50')
            btnSumbit.disabled = true;
            return;
        } else{
            btnSumbit.classList.remove('opacity-50')
            btnSumbit.disabled = false;
        }
    }
});