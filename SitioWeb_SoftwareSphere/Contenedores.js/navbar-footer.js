const navbar = document.getElementById("navbar")
const footer = document.getElementById("footer1")
 
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
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <a class="nav-link" id="servicios" aria-current="page" href="../paginaServicios/ListaProductos.html">Servicios</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" id="acerca" href="../acercade/acercade.html">Nosotros</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" id="acerca" href="../Formulario/formulario.html">Formulario</a>
                  </li>
                  <div id="contacto">
                      <li class="nav-item">
                          <a class="nav-link" href="../paginaContacto/contacto.html">Contáctanos</a>
                      </li>
                  </div>
                  <button class="btn-button1">Ingresar</button>
                  <button class="btn-button2">Registrarse</button>
              </ul>
          </div>
      </div>
  </nav>
`);


      footer.insertAdjacentHTML("beforeend",`
        <!-- Footer -->

<footer class="container-fluid text-center text-lg-start bg-blue text-muted" id="footer1">
  <!-- Section: Social media -->
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <!-- Left -->
    <div class="me-5 d-none d-lg-block">
      <span>Contáctanos en nuestras redes sociales:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
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
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Software Sphere
          </h6>
          <i class="bi bi-whatsapp"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-twitter-x"></i>
          <i class="bi bi-facebook"></i>

        
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Desarrollo de Apps
          </h6>
          <p>
            <a href="#!" class="text-reset">Apps ¡OS</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Apps Android</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Apps Smart Wacht</a>
          </p>
         
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Empresa
          </h6>
          <p>
            <a href="#!" class="text-reset">Acerca de nosotros.</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Misión y visión.</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Contáctanos.</a>
          </p>
         
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Comunidad.</h6>
          <p></p>
            <a href="#!" class="text-reset">Centro de ayuda.</a>
          </p>
          <p></p>
            <a href="#!" class="text-reset">Contrta a un experto.</a>
          </p>
          <p></p>
            <a href="#!" class="text-reset">Plataforma de desarrollo.</a>
          </p>
          <p>
            <i class="fas fa-envelope me-3"></i>
        
          </p>
          <p><i class="fas fa-phone me-3"></i></p>
          <p><i class="fas fa-print me-3"></i></p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2024 Copyright
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Software Sphere</a>
  </div>

  <!-- Copyright -->
</footer>`);

      
    