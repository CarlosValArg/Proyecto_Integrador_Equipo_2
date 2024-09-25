const navbar = document.getElementById("navbar");
const footer = document.getElementById("footer1");

navbar.insertAdjacentHTML("beforeend", `
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
          <div class="navbar-brand">
              <img src="../acercade/assets/gray.png" alt="logo" width="150px">
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
                  <button class="btn-button1">Ingresar</button>                 
                  <button class="btn-button2">Registrarse</button>
              </div>
          </div>
      </div>
  </nav>
`);


footer.insertAdjacentHTML("beforeend", `
  <!-- Footer -->
  <footer class="container-fluid text-center text-lg-start bg-blue text-muted" id="footer1">
    <!-- Section: Social media -->
    <section <div id="footer1" class="bg-dark text-white py-3">
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <a href="https://www.facebook.com" target="_blank" class="btn btn-outline-light mx-1">
                    <i class="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" class="btn btn-outline-light mx-1">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="https://github.com" target="_blank" class="btn btn-outline-light mx-1">
                    <i class="bi bi-github"></i>
                </a>
                <a href="https://www.google.com" target="_blank" class="btn btn-outline-light mx-1">
                    <i class="bi bi-google"></i>
                </a>
            </div>
        </div>
    </div>
</div>
    </section>

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3">Software Sphere</i>
            </h6>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Desarrollo de Apps</h6>
            <p><a href="#!" class="text-reset">Apps IOS</a></p>
            <p><a href="#!" class="text-reset">Apps Android</a></p>
            <p><a href="#!" class="text-reset">Apps Smart Wacht</a></p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Empresa</h6>
            <p><a href="#!" class="text-reset">Acerca de nosotros</a></p>
            <p><a href="#!" class="text-reset">Misión y visión</a></p>
            <p><a href="#!" class="text-reset">Contáctanos</a></p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Comunidad</h6>
            <p><a href="#!" class="text-reset">Centro de ayuda</a></p>
            <p><a href="#!" class="text-reset">Contrata a un experto</a></p>
            <p><a href="#!" class="text-reset">Plataforma de desarrollo</a></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Copyrigth -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2024 Copyrigth
      <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Software Sphere</a>
    </div>
  </footer>

  `);


    