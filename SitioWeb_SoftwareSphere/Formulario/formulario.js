document.addEventListener('DOMContentLoaded', function() {
  const campoImg = document.getElementById("imgProducto");
  const campoTitulo = document.getElementById("tituloProducto");
  const campoDesc = document.getElementById("descripcionProducto");
  const campoPrecio = document.getElementById("precioProducto");
  const form = document.querySelector('.needs-validation');

  // ValidaciÃ³n en tiempo real para el campo TÃ­tulo
  campoTitulo.addEventListener('input', function() {
      if (campoTitulo.value.trim() !== "") {
          campoTitulo.classList.remove('is-invalid');
          campoTitulo.classList.add('is-valid');
      } else {
          campoTitulo.classList.remove('is-valid');
          campoTitulo.classList.add('is-invalid');
      }
  });

  // ValidaciÃ³n en tiempo real para el campo DescripciÃ³n
  campoDesc.addEventListener('input', function() {
      if (campoDesc.value.trim() !== "") {
          campoDesc.classList.remove('is-invalid');
          campoDesc.classList.add('is-valid');
      } else {
          campoDesc.classList.remove('is-valid');
          campoDesc.classList.add('is-invalid');
      }
  });

  // ValidaciÃ³n en tiempo real para el campo Precio
  campoPrecio.addEventListener('input', function() {
      const precioValue = campoPrecio.value;
      const precioRegex = /^(?!0)\d+(\.\d{1,2})?$/;

      if (precioRegex.test(precioValue) && precioValue > 0) {
          campoPrecio.classList.remove('is-invalid');
          campoPrecio.classList.add('is-valid');
      } else {
          campoPrecio.classList.remove('is-valid');
          campoPrecio.classList.add('is-invalid');
      }
  });

  // ConfiguraciÃ³n de Cloudinary
  const myWidget = cloudinary.createUploadWidget({
      cloudName: 'dylf0o4fh', // Reemplaza con tu Cloud Name
      uploadPreset: 'ml_default' // Reemplaza con tu Upload Preset
  }, (error, result) => {
      if (!error && result && result.event === "success") {
          // Guardar la URL de la imagen en el campo de entrada
          campoImg.value = result.info.secure_url; // URL de la imagen subida
          campoImg.classList.remove('is-invalid');
          campoImg.classList.add('is-valid');
      }
  });

  // Llama al widget de Cloudinary al hacer clic en el botÃ³n de seleccionar archivo
  campoImg.addEventListener('click', function() {
      myWidget.open();
  });

  // ValidaciÃ³n al enviar el formulario
  form.addEventListener('submit', function(event) {
      let isValid = true;

      // Verificar todos los campos
      [campoTitulo, campoDesc, campoPrecio, campoImg].forEach(field => {
          if (field.value.trim() === "" || (field === campoPrecio && campoPrecio.value <= 0)) {
              field.classList.add('is-invalid');
              isValid = false;
          } else {
              field.classList.remove('is-invalid');
              field.classList.add('is-valid');
          }
      });

      if (!isValid) {
          event.preventDefault(); // Evitar el envÃ­o si hay campos invÃ¡lidos
          event.stopPropagation();
      } else {
          // Guardar informaciÃ³n en localStorage
          const productoInfo = {
              imgProducto: campoImg.value, // URL de la imagen en Cloudinary
              tituloProducto: campoTitulo.value,
              descripcionProducto: campoDesc.value,
              precioProducto: campoPrecio.value
          };

          // Obtener los productos existentes del localStorage
          const existingProducts = JSON.parse(localStorage.getItem('productos')) || [];
          existingProducts.push(productoInfo);

          // Guardar la nueva lista de productos en localStorage
          localStorage.setItem('productos', JSON.stringify(existingProducts));

          // Opcional: Limpiar el formulario despuÃ©s de agregar
          form.reset();
          [campoImg, campoTitulo, campoDesc, campoPrecio].forEach(field => {
              field.classList.remove('is-valid', 'is-invalid');
          });
      }

      form.classList.add('was-validated');
  });


  
});


