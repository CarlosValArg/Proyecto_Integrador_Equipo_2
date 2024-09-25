document.getElementById("createNewBtn").addEventListener("click", function() {
    const infoContainer = document.getElementById("infoContainer");
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    
    registerForm.style.display = "block";
    infoContainer.classList.add("slide-out");

});

// Regex patterns
const namePattern = /^(?=.*\s)(?=.{2,}).*$/; // Mínimo 2 nombres y 2 letras
const phonePattern = /^\d{10}$/; // 10 dígitos
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato de email
const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; // Al menos 1 mayúscula, 1 número, 1 carácter especial, mínimo 8 caracteres

const registrationForm = document.getElementById("registrationForm");
const fullNameInput = document.getElementById("fullName");
const phoneInput = document.getElementById("phoneNumber");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Función para mostrar alertas de Bootstrap
function mostrarAlerta(mensaje) {
    const alerta = document.createElement('div');
    alerta.className = 'alert alert-danger alert-dismissible fade show';
    alerta.role = 'alert';
    alerta.innerHTML = `${mensaje} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    document.body.insertBefore(alerta, registrationForm);
}

// Validación al enviar el formulario
registrationForm.addEventListener('submit', function(event) {
    let isValid = true;

    // Verificar todos los campos
    [fullNameInput, phoneInput, emailInput, passwordInput].forEach(field => {
        if (field.value.trim() === "" || 
            (field === phoneInput && !phonePattern.test(phoneInput.value)) || 
            (field === emailInput && !emailPattern.test(emailInput.value)) || 
            (field === passwordInput && !passwordPattern.test(passwordInput.value))) {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }
    });

    if (!isValid) {
        event.preventDefault(); // Evitar el envío si hay campos inválidos
        event.stopPropagation();
        mostrarAlerta("Por favor, completa todos los campos correctamente.");
    } else {
        // Aquí puedes manejar el registro del usuario
        registrationForm.reset();
        [fullNameInput, phoneInput, emailInput, passwordInput].forEach(field => {
            field.classList.remove('is-valid', 'is-invalid');
        });
    }

    registrationForm.classList.add('was-validated');
});

// Validación en tiempo real para los campos
fullNameInput.addEventListener('input', function() {
    fullNameInput.classList.toggle('is-invalid', !namePattern.test(fullNameInput.value));
    fullNameInput.classList.toggle('is-valid', namePattern.test(fullNameInput.value));
});

phoneInput.addEventListener('input', function() {
    phoneInput.classList.toggle('is-invalid', !phonePattern.test(phoneInput.value));
    phoneInput.classList.toggle('is-valid', phonePattern.test(phoneInput.value));
});

emailInput.addEventListener('input', function() {
    emailInput.classList.toggle('is-invalid', !emailPattern.test(emailInput.value));
    emailInput.classList.toggle('is-valid', emailPattern.test(emailInput.value));
});

passwordInput.addEventListener('input', function() {
    passwordInput.classList.toggle('is-invalid', !passwordPattern.test(passwordInput.value));
    passwordInput.classList.toggle('is-valid', passwordPattern.test(passwordInput.value));
});
