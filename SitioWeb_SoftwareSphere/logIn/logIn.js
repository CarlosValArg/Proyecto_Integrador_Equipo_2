document.getElementById('loginForm').addEventListener('submit',function(event) {
    event.preventDefault();
const txtCorreo = document.getElementById("txtCorreo");
const txtContraseña = document.getElementById("txtContraseña");
//const mensajeError = document.getElementById("mensajeError");
let valid=true;

// Función para mostrar alertas de SweetAlert2
function mostrarAlerta(mensaje, tipo) {
    Swal.fire({
        title: tipo === 'success' ? '¡Éxito!' : 'Error',
        text: mensaje,
        icon: tipo,
        confirmButtonText: 'Aceptar'
    });
}

// Función para alertas de campos vacios
if(txtCorreo.value.trim() === ''){
    txtCorreo.classList.add('is-invalid');
    valid=false;
}else{
txtCorreo.classList.remove('is-invalid');
}

if(txtContraseña.value.trim() === ''){
    txtContraseña.classList.add('is-invalid');
    valid=false;
}else{
txtContraseña.classList.remove('is-invalid');
}

if (!valid) return;

//Verificar ususario en localStorage
const usuarioRegistrado = JSON.parse(localStorage.getItem('user')) || null;
if(usuarioRegistrado){
    if(usuarioRegistrado.txtCorreo === txtCorreo.value && 
    usuarioRegistrado.txtContraseña === txtContraseña.value){
        Swal.fire({
            title: '¡Inicio de sesión exitoso!',
            text: 'Serás redirigido a la página de inicio',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
    //mostrarAlerta("Bienvenido/a. Redirigiendo a la página de inicio...", 'success')
    .then((result) => {
        if (result.isConfirmed) {
        // Almacenar estado de sesión en localStorage
        localStorage.setItem('sesionIniciada', true);
        // Redirigir a la página de inicio después de que el usuario haga clic en "OK" 
        window.location.href= '../index.html'; 
        }
    });
}else{
    mostrarAlerta('Nombre de usuario o contraseña inválidos.', 'error');
}}else{
    //mensajeError.textContent='No se encontró el usuario. Por favor, regístrate primero';
    mostrarAlerta('No se encontró el usuario. Por favor, regístrate primero.', 'warning');

}
});