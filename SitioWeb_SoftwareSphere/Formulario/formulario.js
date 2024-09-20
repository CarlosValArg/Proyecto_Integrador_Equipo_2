const btnAgregar = document.getElementById("btnAgregar");
const btnModificar = document.getElementById("btnModificar");
const campoImg = document.getElementById("imgProducto");
const campoTitulo = document.getElementById("tituloProducto");
const campoDesc = document.getElementById("descripcionProducto");
const campoPrecio = document.getElementById("precioProducto");

// función de validación para mostrar mensajes de alerta
(function() {
    'use strict';
  
    window.addEventListener('load', function() {
      var form = document.getElementsByClassName('needs-validation')[0];
  
      // Evento para la validación del formulario al enviar
      form.addEventListener('submit', function(event) {
        var precioField = document.getElementById('precioProducto');
        var precioValue = precioField.value;
  
        var imagenField = document.getElementById('imgProducto');
        var imagenValue = imagenField.value;
  
        // Verificar si el valor del precio es válido
        if (precioValue <= 0) {
          precioField.classList.add('is-invalid');
          event.preventDefault();
          event.stopPropagation();
        } else {
          precioField.classList.remove('is-invalid');
          precioField.classList.add('is-valid');
        }
  
        // Verificar si se ha seleccionado una imagen
        if (imagenValue === "") {
          imagenField.classList.add('is-invalid');
          event.preventDefault();
          event.stopPropagation();
        } else {
          imagenField.classList.remove('is-invalid');
          imagenField.classList.add('is-valid');
        }
  
        // Validar el formulario completo
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
  
        form.classList.add('was-validated');
      }, false);
  
      // Evento de entrada para el campo precio para validar mientras el usuario escribe
      var precioField = document.getElementById('precioProducto');
      precioField.addEventListener('input', function() {
        var precioValue = precioField.value;

        var precioRegex = /^(?!0)\d+(\.\d{1,2})?$/;
  
        if (precioRegex.test(precioValue) && precioValue > 0) {
          precioField.classList.remove('is-invalid');
          precioField.classList.add('is-valid');
        } else {
          precioField.classList.remove('is-valid');
          precioField.classList.add('is-invalid');
        }
      });
  
      // Evento de cambio para el campo de imagen para validar cuando el usuario selecciona una imagen
      var imagenField = document.getElementById('imgProducto');
      imagenField.addEventListener('change', function() {
        var imagenValue = imagenField.value;
  
        if (imagenValue !== "") {
          imagenField.classList.remove('is-invalid');
          imagenField.classList.add('is-valid');
        } else {
          imagenField.classList.remove('is-valid');
          imagenField.classList.add('is-invalid');
        }
      });
  
    }, false);
  })();
  
  btnAgregar.addEventListener("click", function (event){
    event.preventDefault();
    if (!imgProducto.value && !tituloProducto && !descripcionProducto && !precioProducto) {
        return;
    }
    const productoInfo = {
            "imgProducto" : imgProducto.value,
            "tituloProducto" : tituloProducto.value,
            "descripcionProducto" : descripcionProducto.value,
            "precioProducto" : precioProducto.value};
            
    // Obtener los productos existentes del localStorage
    const existingProducts = JSON.parse(localStorage.getItem('productos')) || [];
    existingProducts.push(productoInfo);

    // Guardar la nueva lista de productos en localStorage
    localStorage.setItem('productos', JSON.stringify(existingProducts));

    

    
});

