const navbar = document.getElementById("navbar");
const footer = document.getElementById("footer1");

navbar.insertAdjacentHTML("afterbegin", ` 
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
          <div class="navbar-brand">
          <button="disabled">
        <a href="../Inicio/index.html">
        <img src="./assets/gray.png" alt="logo" width="150px">
        </a>
        </button>
          </div> 
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="me-auto"></div> <!-- Espacio flexible para empujar los enlaces a la derecha -->
              <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item">
                      <a class="nav-link" id="servicios" aria-current="page" href="../paginaServicios/ListaProductos.html">Servicios</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" id="acerca" href="../acercade/acercade.html">Nosotros</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" id="formulario" href="../Formulario/formulario.html">Formulario</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="../paginaContacto/contacto.html">Contáctanos</a>
                  </li>
              </ul>
              <div class="d-flex align-items-center">
              <a href="../logIn/logIn.html"><button class="btn-button1 me-2">Ingresar</button></a>                
                  <a href="../Registrar/Registrar.html"><button class="btn-button2">Registrarse</button></a>
              </div>
          </div>
      </div>
  </nav>
`);


footer.insertAdjacentHTML("beforeend", `
  <!-- Footer -->
  <footer class="container-fluid text-center text-lg-start bg-blue text-muted" id="footer1">
      <div>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </section>

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
    <div class="text-center p-4" style="font-size: medium; background-color: rgba(0, 0, 0, 0.05);">
      © 2024 Copyright
      <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Software Sphere</a>
    </div>
  </footer>

  `);


