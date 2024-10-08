const campoImg = document.getElementById("imgProducto");
const campoTitulo = document.getElementById("tituloProducto");
const campoDesc = document.getElementById("descripcionProducto");
const campoPrecio = document.getElementById("precioProducto");
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

// Validación en tiempo real para el campo Tí­tulo
campoTitulo.addEventListener('input', function() {
    campoTitulo.classList.toggle('is-invalid', campoTitulo.value.trim() === "");
    campoTitulo.classList.toggle('is-valid', campoTitulo.value.trim() !== "");
});

// Validacion en tiempo real para el campo Descripción
campoDesc.addEventListener('input', function() {
    campoDesc.classList.toggle('is-invalid', campoDesc.value.trim() === "");
    campoDesc.classList.toggle('is-valid', campoDesc.value.trim() !== "");
});


// Configuración de Cloudinary
const myWidget = cloudinary.createUploadWidget({
    cloudName: 'dylf0o4fh', // Reemplaza con tu Cloud Name
    uploadPreset: 'ml_default' // Reemplaza con tu Upload Preset
}, (error, result) => {
    if (!error && result && result.event === "success") {
        campoImg.value = result.info.secure_url; // URL de la imagen subida
        campoImg.classList.remove('is-invalid');
        campoImg.classList.add('is-valid');
    }
});

// Llama al widget de Cloudinary al hacer clic en el botón de seleccionar archivo
document.getElementById("uploadButton").addEventListener('click', function() {
    myWidget.open();
});

// Validación al enviar el formulario
form.addEventListener('submit', function(event) {
    let isValid = true;

    // Verificar todos los campos
    [campoTitulo, campoDesc, campoImg].forEach(field => {
        if (field.value.trim() === "") {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }
    });

    if (!isValid) {
        event.preventDefault(); // Evitar el enví­o si hay campos inválidos
        event.stopPropagation();
        mostrarAlerta("Por favor, completa todos los campos correctamente.", 'error');
    } else {
        event.preventDefault(); // Prevenir envío para mostrar la alerta de éxito

         // Obtener los productos existentes del localStorage
         const existingProducts = JSON.parse(localStorage.getItem('productos')) || [];

         // Verificar si ya existe un producto con el mismo título
         const isDuplicated = existingProducts.some(product => product.tituloProducto === campoTitulo.value.trim());
 
         if (isDuplicated) {
             mostrarAlerta("El producto ya existe. No puedes agregar duplicados.", 'error');
         } else {

        // Crear el modelo de datos en formato JSON
        const productoInfo = {
            imgProducto: campoImg.value, // URL de la imagen en Cloudinary
            tituloProducto: campoTitulo.value,
            descripcionProducto: campoDesc.value,
        };

        // Guardar la información en localStorage
        existingProducts.push(productoInfo);
        localStorage.setItem('productos', JSON.stringify(existingProducts));

        // Guardar la información en localStorage (opcional)
        const existingProducts = JSON.parse(localStorage.getItem('productos')) || [];
        existingProducts.push(productoInfo);
        localStorage.setItem('productos', JSON.stringify(existingProducts));

        // Mostrar alerta de éxito
        mostrarAlerta("El servicio se ha agregado correctamente.", 'success');

        // Opcional: Limpiar el formulario después de agregar
        form.reset();
        [campoImg, campoTitulo, campoDesc, campoPrecio].forEach(field => {
            field.classList.remove('is-valid', 'is-invalid');
        });
    }

    form.classList.add('was-validated');
});


