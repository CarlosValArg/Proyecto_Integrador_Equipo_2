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
            text: 'Serás sredirigido a la página de inicio...',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
    //mostrarAlerta("Bienvenido/a. Redirigiendo a la página de inicio...", 'success')
    .then((result) => {
        if (result.isConfirmed) {
// Redirigir a la página de inicio después de que el usuario haga clic en "OK" 
    window.location.href= '../Inicio/index.html'; 
}
    });
}else{
    mostrarAlerta('Nombre de usuario o contraseña inválidos.', 'error');
    //mensajeError.style.display='block';
}}else{
    //mensajeError.textContent='No se encontró el usuario. Por favor, regístrate primero';
    //mensajeError.style.display='block';
    mostrarAlerta('No se encontró el usuario. Por favor, regístrate primero.', 'warning');

}
});

// function mostrarAlerta(mensaje) {
//     const alerta = document.createElement('div');
//     alerta.className = 'alert alert-danger alert-dismissible fade show';
//     alerta.role = 'alert';
//     alerta.innerHTML = `${mensaje} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
//     document.body.insertBefore(alerta, form);
// }

// // Validación en tiempo real para el campo Correo Electrónico
// txtCorreo.addEventListener('input', function() {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const isValid = emailRegex.test(txtCorreo.value);
//     txtCorreo.classList.toggle('is-invalid', !isValid);
//     txtCorreo.classList.toggle('is-valid', isValid);
// });

// // Validación en tiempo real para la Contraseña
// txtContraseña.addEventListener('input', function() {
//     const contraseñaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     const isValid = contraseñaRegex.test(txtContraseña.value);
//     txtContraseña.classList.toggle('is-invalid', !isValid);
//     txtContraseña.classList.toggle('is-valid', isValid);
// });

// // Validación al enviar el formulario
// // form.addEventListener('submit', function(event) {
// //     let isValid = true;

//     // Verificar que todos los campos sean válidos
//     [txtCorreo, txtContraseña].forEach(field => {
//         if (field.value.trim() === "" || field.classList.contains('is-invalid')) {
//             field.classList.add('is-invalid');
//             isValid = false;
//         } else {
//             field.classList.add('is-valid');
//         }
//     });
                   
//     if (!isValid) {
//         event.preventDefault(); // Evitar el envío si hay campos inválidos
//         event.stopPropagation();
//         mostrarAlerta("Por favor, completa todos los campos correctamente.");
//     } else {
//         // Crear el objeto de usuario en formato JSON
//         const userInfo = {
//             txtCorreo: txtCorreo.value,
//             txtContraseña: txtContraseña.value
//         };

//         // Guardar la información en localStorage
//         localStorage.setItem('user', JSON.stringify(userInfo));

//         // Opcional: Limpiar el formulario después de registrar
//         form.reset();
//         [txtCorreo, txtContraseña, txtConfirmacion].forEach(field => {
//             field.classList.remove('is-valid', 'is-invalid');
//         });

//         alert('Registro exitoso!');
//     }

//     form.classList.add('was-validated');
