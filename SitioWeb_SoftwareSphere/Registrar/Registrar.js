const txtNombre = document.getElementById("txtNombre");
const txtNumero = document.getElementById("txtNumero");
const txtCorreo = document.getElementById("txtCorreo");
const txtContraseña = document.getElementById("txtContraseña");
const txtConfirmacion = document.getElementById("txtConfirmacion");
const form = document.querySelector('.needs-validation');

// Función para mostrar alertas de SweetAlert2
function mostrarAlerta(mensaje, tipo) {
    Swal.fire({
        title: tipo === 'success' ? '¡Éxito!' : 'Error',
        text: mensaje,
        icon: tipo,
        confirmButtonText: 'Aceptar'
    });
}

// Validación en tiempo real para el Nombre
txtNombre.addEventListener('input', function() {
    const nombreRegex = /^([a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]{2,60}[\,\-\.]{0,1}[\s]{0,1}){1,3}$/;
    const isValid = nombreRegex.test(txtNombre.value);
    txtNombre.classList.toggle('is-invalid', !isValid);
    txtNombre.classList.toggle('is-valid', isValid);
});

// Validación en tiempo real para el Número de Teléfono
txtNumero.addEventListener('input', function() {
    txtNumero.classList.toggle('is-invalid', txtNumero.value.trim() === "");
    txtNumero.classList.toggle('is-valid', txtNumero.value.trim() !== "");
});

// Regex para el Número de Teléfono
txtNumero.addEventListener('input', function() {
    const numeroValue = txtNumero.value;
    const numeroRegex = /^\d{10}$/;

    const isValid = numeroRegex.test(numeroValue) && numeroValue > 0;
    txtNumero.classList.toggle('is-invalid', !isValid);
    txtNumero.classList.toggle('is-valid', isValid);
});

// Validación en tiempo real para el campo Correo Electrónico
txtCorreo.addEventListener('input', function() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(txtCorreo.value);
    txtCorreo.classList.toggle('is-invalid', !isValid);
    txtCorreo.classList.toggle('is-valid', isValid);
});

// Validación en tiempo real para la Contraseña
txtContraseña.addEventListener('input', function() {
    const contraseñaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = contraseñaRegex.test(txtContraseña.value);
    txtContraseña.classList.toggle('is-invalid', !isValid);
    txtContraseña.classList.toggle('is-valid', isValid);
});

// Validación en tiempo real para Confirmar Contraseña
txtConfirmacion.addEventListener('input', function() {
    const isValid = txtContraseña.value === txtConfirmacion.value;
    txtConfirmacion.classList.toggle('is-invalid', !isValid);
    txtConfirmacion.classList.toggle('is-valid', isValid);
});


// Validación al enviar el formulario
form.addEventListener('submit', function(event) {
    let isValid = true;

    // Verificar que todos los campos sean válidos
    [txtNombre, txtNumero, txtCorreo, txtContraseña, txtConfirmacion].forEach(field => {
        if (field.value.trim() === "" || field.classList.contains('is-invalid')) {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            field.classList.add('is-valid');
        }
    });
                   
    if (!isValid) {
        event.preventDefault(); // Evitar el envío si hay campos inválidos
        event.stopPropagation();
        mostrarAlerta('Por favor, completa todos los campos correctamente.', 'error');
    } else {
        event.preventDefault(); // Evitar el envío inmediato del formulario
        // Crear el objeto de usuario en formato JSON
        const userInfo = {
            txtNombre: txtNombre.value,
            txtNumero: txtNumero.value,
            txtCorreo: txtCorreo.value,
            txtContraseña: txtContraseña.value
        };

        // Mostrar alerta y esperar la interacción del usuario
        Swal.fire({
            title: '¡Éxito!',
            text: 'Registro exitoso',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            // Guardar la información en localStorage después de que el usuario presiona "Aceptar"
            localStorage.setItem('user', JSON.stringify(userInfo));

            // Limpiar el formulario después de registrar
            form.reset();
            
            // Eliminar las clases de validación después de resetear el formulario
            [txtNombre, txtNumero, txtCorreo, txtContraseña, txtConfirmacion].forEach(field => {
                field.classList.remove('is-valid', 'is-invalid');
            });
            // También eliminar la clase 'was-validated' del formulario
            form.classList.remove('was-validated');
        });
    }
});