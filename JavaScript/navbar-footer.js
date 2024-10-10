const navbar = document.getElementById("navbar");
const footer = document.getElementById("footer1");

// Función para actualizar el navbar dinámicamente basado en el estado del usuario
function actualizarNavbar() {
    const sesionIniciada = localStorage.getItem('sesionIniciada');
    const currentPage = window.location.pathname.split('/').pop(); // Obtener el nombre del archivo actual
    let navbarContent = `
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="navbar-brand">
                    <a href="./index.html">
                        <img src="./assets/gray.png" alt="logo" width="150px">
                    </a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'ListaProductos.html' ? 'active' : ''}" href="./ListaProductos.html">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'acercade.html' ? 'active' : ''}" href="./acercade.html">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'formulario.html' ? 'active' : ''}" href="./formulario.html">Formulario</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'contacto.html' ? 'active' : ''}" href="./contacto.html">Contáctanos</a>
                        </li>
                    </ul>
                    <div class="d-flex align-items-center">`;

    if (sesionIniciada) {
        navbarContent += `
            <div class="dropdown">
                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-circle"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" id="logoutButton" href="#">Cerrar sesión</a></li>
                </ul>
            </div>`;
    } else {
        navbarContent += `
            <a href="./logIn.html"><button class="btn-button1 me-2">Ingresar</button></a>
            <a href="./Registrar.html"><button class="btn-button2">Registrarse</button></a>`;
    }

    navbarContent += `</div></div></div></nav>`;

    navbar.innerHTML = navbarContent;

    // Evento para cerrar sesión
    if (sesionIniciada) {
        document.getElementById('logoutButton').addEventListener('click', () => {
            localStorage.removeItem('sesionIniciada');
            actualizarNavbar(); // Actualiza el navbar
            Swal.fire({
                title: 'Sesión cerrada',
                text: 'Has cerrado sesión correctamente.',
                icon: 'info',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = './index.html'; // Redirigir a la página de inicio
            });
        });
    }
}


// Llama a actualizarNavbar al cargar la página
document.addEventListener('DOMContentLoaded', actualizarNavbar);

footer.insertAdjacentHTML("beforeend", `
  <!-- Footer -->
  <footer class="container-fluid text-center text-lg-start bg-blue text-muted" id="footer1">
  
  <!-- Se añade este div con height para aumentar el espacio entre títulos del navbar y se
  eliminó la sección de íconos que ya no se cargaban -->

  <div style= "height:20px"></div>

    <!-- Section: Links  -->
    <section class="">
  <div class="container text-center text-md-start mt-5">
    <div class="row mt-3">
      <!-- Columna Software Sphere -->
      <div class="col-md-6 col-lg-4 col-xl-3 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4">
          <i class="fas fa-gem me-3">Software Sphere</i>
        </h6>
      </div>

      <!-- Columna Desarrollo de Apps -->
      <div class="col-md-6 col-lg-3 col-xl-2 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4">Desarrollo de Apps</h6>
        <p><a href="#!" class="text-reset">Apps iOS</a></p>
        <p><a href="#!" class="text-reset">Apps Android</a></p>
        <p><a href="#!" class="text-reset">Apps Smart Watch</a></p>
      </div>

      <!-- Columna Empresa -->
      <div class="col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4">Empresa</h6>
        <p><a href="#!" class="text-reset">Acerca de nosotros</a></p>
        <p><a href="#!" class="text-reset">Misión y visión</a></p>
        <p><a href="#!" class="text-reset">Contáctanos</a></p>
      </div>

      <!-- Columna Comunidad -->
      <div class="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 class="text-uppercase fw-bold mb-4">Comunidad</h6>
        <p><a href="#!" class="text-reset">Centro de ayuda</a></p>
        <p><a href="#!" class="text-reset">Contrata a un experto</a></p>
        <p><a href="#!" class="text-reset">Plataforma de desarrollo</a></p>
      </div>
    </div>
  </div>
</section>

    <!-- Copyright -->
    <div class="text-center p-4" style="font-size: medium; background-color: rgba(0, 0, 0, 0.05);">© 2023 Software Sphere, México</div>
  </footer>
`);
