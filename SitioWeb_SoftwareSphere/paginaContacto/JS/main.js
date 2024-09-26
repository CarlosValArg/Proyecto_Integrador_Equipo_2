const txtNombre = document.getElementById("txtNombre");
const txtApellido=document.getElementById("txtApellido");
const btnEnviar = document.getElementById("btnEnviar");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto=document.getElementById("alertValidacionesTexto")
const txtTelefono=document.getElementById("txtTelefono");
const txtCorreo=document.getElementById("txtCorreo");
const txtMensaje=document.getElementById("txtMensaje");

let valid = true; // Variable para controlar la validez del formulario

function validarTelefono(){
if (txtTelefono.value.length==0){
    return false;
}//length==0
if (txtTelefono.value.length !== 10) {
    return false; // No tiene 10 dígitos
}
if(isNaN(txtTelefono.value)){
    return false;
}//inNan
if(Number(txtTelefono.value)<=0){
    return false;
}//<=0

return true;
}//functionvalidarTelefono

function validarCorreo() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})$/;
    return emailPattern.test(txtCorreo.value) && !/\.{2,}/.test(txtCorreo.value.split('@')[1]);
}//validarCorreo




btnEnviar.addEventListener("click", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    txtNombre.style.border ="";
    txtApellido.style.border ="";
    txtTelefono.style.border="";
    txtCorreo.style.border = "";
    txtMensaje.style.border = "";
     alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    
    
    // Validación del nombre
    if (txtNombre.value.length < 3) {
        txtNombre.style.border = "solid red medium"
        alertValidacionesTexto.innerHTML= ("El nombre debe contener al menos 3 letras<br>")
        alertValidaciones.style.display = "block"
        valid=false;      
    }//if length <3 //validar el nombre 

    if (txtApellido.value.length < 3) {
        txtApellido.style.border = "solid red medium"
        alertValidacionesTexto.innerHTML+= ("El apellido debe contener al menos 3 letras<br>")
        alertValidaciones.style.display = "block"
        valid=false;  
    }//if apellido

    if(!validarTelefono()){
        txtTelefono.style.border="solid red medium";
        alertValidacionesTexto.innerHTML+="El número telefónico ingresado no es correcto<br>"
        alertValidaciones.style.display="block";
        valid=false;
    }//validarTelefono

    if (!validarCorreo()) {
        txtCorreo.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "El correo electrónico ingresado no es válido<br>";
        alertValidaciones.style.display = "block";
        valid = false;
    }//validarCorreo
    
    if (txtMensaje.value.length < 20) {
        txtMensaje.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML += "El mensaje debe contener al menos 20 caracteres<br>";
        alertValidaciones.style.display = "block";
        valid = false;
    }//Validación mensaje

    // Swal.fire({
    //     title: "Enviado!",
    //     text: "Tu correo fue enviado!",
    //     icon: "success"
    // });

// contador++;
// localStorage.setItem("contador",contador);    
// localStorage.setItem("nombre", txtNombre.value);
// localStorage.setItem("apellido", txtApellido.value);
// localStorage.setItem("telefono", txtTelefono.value);
// localStorage.setItem("correo", txtCorreo.value);
// localStorage.setItem("mensaje", txtMensaje.value);

if (valid) {
    // Obtener datos existentes de localStorage
    let registros = JSON.parse(localStorage.getItem("registros")) || [];

    // Crear un nuevo registro
    const nuevoRegistro = {
        nombre: txtNombre.value,
        apellido: txtApellido.value,
        telefono: txtTelefono.value,
        correo: txtCorreo.value,
        mensaje: txtMensaje.value
   
 };
    // Agregar el nuevo registro al arreglo
    registros.push(nuevoRegistro);

    // Guardar el arreglo actualizado en localStorage
    localStorage.setItem("registros", JSON.stringify(registros));

    // Mostrar mensaje de éxito
    alert("Formulario enviado correctamente!");
    
    // Limpiar los campos después de enviar
    txtNombre.value = "";
    txtApellido.value = "";
    txtTelefono.value = "";
    txtCorreo.value = "";
    txtMensaje.value = "";
}


});//boton
    


// Si todo es válido, guardar en localStorage
    // localStorage.setItem("nombre", txtNombre.value);

 


txtNombre.addEventListener("blur",function(event){
    txtNombre.value=txtNombre.value.trim();
})//blur nombre
txtApellido.addEventListener("blur",function(event){
    txtApellido.value=txtApellido.value.trim();
})//blur apellido
txtTelefono.addEventListener("blur",function(event){
    txtTelefono.value=txtTelefono.value.trim();
})//blur telefono
txtCorreo.addEventListener("blur",function(event){
    txtCorreo.value=txtCorreo.value.trim();
})//blur correo
txtMensaje.addEventListener("blur", function(event) {
    txtMensaje.value = txtMensaje.value.trim();
});