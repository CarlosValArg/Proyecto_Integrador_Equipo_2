let contador = parseInt(localStorage.getItem("contador")) == 0;

document.getElementById('btnEnviar').addEventListener('click', function() {
    // Limpiar alertas previas
    const alertas = document.querySelectorAll('.alert');
    alertas.forEach(alert => alert.remove());

    // Limpiar bordes
    const inputs = document.querySelectorAll(".form-control");
    inputs.forEach(input => input.style.border = "");
    // Obtener valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById("correo").value;
    let isValid = true;

    

    // Validar nombre
    if (nombre.length < 3) {
        document.getElementById('nombre').style.border = "solid red medium";
        document.getElementById('nombre').insertAdjacentHTML("afterend", '<div class="alert alert-danger">El nombre debe tener al menos 3 letras.</div>');
        isValid = false;
    }

    // Validar apellido
    if (apellido.length < 3) {
        document.getElementById('apellido').style.border = "solid red medium";
        document.getElementById('apellido').insertAdjacentHTML("afterend", '<div class="alert alert-danger">El apellido debe tener al menos 3 letras.</div>');
        isValid = false;
    }

    // Expresión regular para validar el formato del teléfono
    const telefonoRegex = /^\d{10}$/; // Expresión regular para validar 10 dígitos

    // Verificar si el número de teléfono coincide con la expresión regular
    if (!telefonoRegex.test(telefono)) {
        document.getElementById('telefono').style.border = "solid red medium";
        document.getElementById('telefono').insertAdjacentHTML("afterend", '<div class="alert alert-danger">El número telefónico debe contener 10 dígitos.</div>');
        isValid = false;
    } else {
        document.getElementById('telefono').style.border = ""; // Restablecer borde si es válido
    }

    // Expresión regular para validar el correo
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar correo
    if (!correoRegex.test(correo)) {
        document.getElementById('correo').style.border = "solid red medium";
        document.getElementById('correo').insertAdjacentHTML("afterend", '<div class="alert alert-danger">El correo no es válido.</div>');
        isValid = false;
    } else {
        document.getElementById('correo').style.border = ""; // Restablecer borde si es válido
    }

    // Si todo es válido, puedes realizar la acción deseada
    if (isValid) {
        Swal.fire({
            title: "Enviado!",
            text: "Tu correo fue enviado!",
            icon: "success"
          });
          contador++;
          localStorage.setItem("contador", contador);
          localStorage.setItem('userName', nombre);
          localStorage.setItem('userLastName', apellido);
          localStorage.setItem('userPhone', telefono);
          localStorage.setItem('userEmail', correo);
          
    }
   
});
 //const btnClear = document.getElementById("btnClear");
//guardar datos en el localStorage
// window.addEventListener("load", function() {
//      document.getElementById("nombre").value = localStorage.getItem("nombre"); 
// });
// datos.push(elemento);
// localStorage.setItem("datos", JSON.stringify(datos));


// if (this.localStorage.getItem("datos") != null) {
//     datos = JSON.parse(this.localStorage.getItem("datos"));
//   }


// window.addEventListener("load", function(){
//     if (this.localStorage.getItem("nombre")!=null){
//        nombre = useName (this.localStorage.getItem("nombre"));
//        nombre = useName (this.localStorage.getItem("nombre")); 
//     }
// })