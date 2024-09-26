function addItem(item) {
    const itemHTML = `
        <div class="col mb-4 d-flex justify-content-center">
            <div class="card" style="background-color: #a5d7e8; max-width: 300px; width: 100%; align-items: flex-start;">
                <img src="${item.img}" class="card-img-top" alt="image" style="height: 200px; width: 100%; object-fit: cover; border-radius: 10px;">
                <div class="card-body" style="padding: 15px;">
                    <h5 class="card-title" style="font-size: 30px; margin: 0 0 10px; text-align: left;">${item.name}</h5>
                    <p class="card-text" style="font-size: 18px; margin: 0; text-align: left;">${item.description}</p>
                </div>
                <div class="text-center" style="padding: 10px;">
                    <a href="#" class="btn btn-primary" style="background-color: #576cbc; border-color: #576cbc;">Cotizar</a>
                </div>
            </div>
        </div>
    `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}


addItem({
    'name': 'Apps Smart Watch',
    'img': 'https://m.media-amazon.com/images/I/61gpLj2KvTL._AC_SL1500_.jpg',
    'description': 'Los desarrolladores de Software Sphere tenemos amplia experiencia en el desarrollo de aplicaciones smartwatch que combinan funcionalidad avanzada con una experiencia de usuario intuitiva, cotiza una aquí.',
    
});

addItem({
    'name': 'Membership',
    'img': 'https://media.istockphoto.com/id/522389088/vector/vip-club-cards.jpg?s=612x612&w=0&k=20&c=Ms6bRFXe4iISeMBYdioSkEn-kMTW_M1cbCNg7JPSAcc=',
    'description': '¿Buscas crear un espacio en línea exclusivo?, solicita nuestro servicio para que creemos tu sitio con membresías dirigido a quien tu quieras con la temática de tu interés.',
    
});
addItem({
    'name': 'Apps iOS',
    'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s',
    'description': 'Software Sphere es un experto en el desarrollo de aplicaciones para iPhones y iPads, obten la tuya ahora con nuestros desarrolladores.',
    
});

addItem({
    'name': 'E-learning',
    'img': 'https://www.itconsultors.com/images/blog/teaserbox_954157418.jpg',
    'description': 'Somos expertos en el diseño y la estructura de plataformas educativas virtuales. Contáctanos para implementar tu plataforma e-learning con SOFTWARE SPHERE adecuada a tus gustos y necesidades.',
    
});

addItem({
    'name': 'Automóvil',
    'img': 'https://www.shutterstock.com/image-vector/using-smart-lock-application-icon-260nw-2493334223.jpg',
    'description': 'Desarrollamos aplicaciones innovadoras para automóviles que mejoran la conectividad y la experiencia de conducción. Ponte en contacto con un experto para que desarrolle tu app',
    
});

addItem({
    'name': 'Apps Android',
    'img': 'https://www.brandemia.org/wp-content/uploads/2012/10/logo_principal.jpg',
    'description': 'Nosotros como desarrolladores ofrecemos soluciones para teléfonos Android, dispositivos portátiles y otros aparatos del ecosistema Android.',
    
});

addItem({
    'name': 'Foros Comunitarios',
    'img': 'https://cdn.femashr.com/wp-content/uploads/2021/04/img-personnel-fearture8@2x.png',
    'description':'Tenemos experiencia con las comunidades digitales. Crea tu foro comunitario con nuestra ayuda y empieza a conectarte, compartir ideas y colaborar según los criterios para tu comunidad virtual',
    
});

addItem({
    'name': 'Portafolio Web',
    'img': 'https://img.freepik.com/vector-premium/idea-creativa-conceptos-diseno-linea-portafolio-digital-caracter_269730-321.jpg?w=740',
    'description':'Te apoyamos a crear tu portafolio digital. Podemos asesorarte para que estructures de la mejor forma tu colección de pruebas electrónicas. Ponte en contacto con nosotros',
    
});

addItem({
    'name': 'Diseño de Experiencia de Usuario',
    'img': 'https://img.freepik.com/vector-gratis/ilustracion-concepto-diferencias-ui-ux_114360-14909.jpg?t=st=1726373327~exp=1726376927~hmac=83b54cdb1657e41cf2107d2c19c7076e90d1a78b2184d4d3e1fc28cc1a707edf&w=740',
    'description':'Creamos interfaces intuitivas y atractivas orientadas al usuario que maximizan la usabilidad y la satisfacción de colaboradores, proveedores y clientes. Cotiza aquí con nosotros',
    
});

addItem({
    'name': 'Chat Bot para empresas',
    'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsR1MLm-CYSh4W50Uhtp9UFKnM_EclSrFdw&s',
    'description': 'Atiende a tus clientes 24/7. Contrata nuestro servicio para que generemos tu Chat Bot con fácil integración a tu sitio web, y respuestas automáticas para las necesidades de tu empresa.',
    
});

addItem({
    'name': 'Servicios de Autenticacion',
    'img': 'https://www.redeszone.net/app/uploads-redeszone.net/2020/06/diferencias-autenticacion-autorizacion-3-1200x675.jpg',
    'description': 'Somos expertos en servicios de autenticación seguros y personalizados para proteger tu plataforma digital. Implementamos soluciones adaptadas a las necesidades de tu negocio de manera eficiente.',
    
});

addItem({
    'name': 'Procesamiento de pagos',
    'img': 'https://cdn.prod.website-files.com/632ea1956f3e9d4d62987e64/649b4e7324cc9d1153009384_Headers_Contenido2.webp',
    'description': 'Los desarrolladores de Software Sphere tienen alta experiencia en procesamiento de pagos. Gestiona de manera automática el procesamiento de pagos, suscripciones y facturación con plataformas de pago como Stripe o PayPal.',
    
});

addItem({
    'name': 'Fintech',
    'img': 'https://cdn-icons-png.flaticon.com/256/3186/3186911.png',
    'description':'Colaboramos con expertos economistas para brindar soluciones financieras digitales personalizadas para pagos, banca y automatización, mejorando la eficiencia y seguridad de tu negocio cotizando aquí el servicio.',
    
});

addItem({
    'name': 'Health & Fitness Apps',
    'img': 'https://cdn-icons-png.flaticon.com/256/9227/9227553.png',
    'description':'Desarrollamos aplicaciones para monitorear la salud y el bienestar, para solicitar el servicio consulta con un médico antes y posteriormente contacta aquí a un experto.',
    
});
function añadirItem(item) {
    const itemHTML = `
        <div class="card" style="background-color: #a5d7e8; width: 18rem; align-items: flex-end;">
            <img src="${item.img}" class="card-img-top" alt="image" style="height: 262px; width: 262px; margin: 10px 0px 0px 0px; border-radius: 10px;">
            <div class="card-body">
                <h5 class="card-title" style="font-size: 30px; text-align: center; margin: 0px 0px 20px 0px;">${item.name}</h5>
                <p class="card-text" style="font-size: 20px; height: 262px; width: 262px; text-align: left; padding: 0px 20px 0px 20px;">${item.description}</p>
                <p class="card-text" style="font-size: 15px; padding: 0px 20px 0px 20px; text-align: center;">${item.price}</p>
                <a href="#" class="btn btn-primary" style="background-color: #576cbc; border-color: #576cbc; display: flex; justify-content: center; align-items: center; margin: 10px 10px 10px 30px;">Cotizar</a>
            </div>
        </div>
        <br/>
    `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
  }
  
  function cargarProductos() {
    // Obtener los productos guardados en el localStorage
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    // Si existen productos, agregarlos al contenedor
    productos.forEach(producto => {
        addItem({
            name: producto.tituloProducto,
            img: producto.imgProducto,
            description: producto.descripcionProducto
        });
    });
}

// Asegúrate de que se ejecuta la función cuando el DOM está completamente cargado
window.addEventListener('DOMContentLoaded', cargarProductos);
  
