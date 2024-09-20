function addItem(item) {
    const itemHTML = '<div class="card" style="background-color: #a5d7e8;width: 18rem; align-items:flex-end;">\n' +
        '    <img src="' + item.img + '" class="card-img-top" alt="image" style="height: 262px; width: 262px; margin: 10px 0px 0px 0px; border-radius: 10px;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title" style="font-size: 30px; text-align: center; margin: 0px 0px 20px 0px;">' + item.name + '</h5>\n' +
        '        <p class="card-text" style="font-size: 20px; height: 262px; width: 262px; text-align: left; padding: 0px 20px 0px 20px;">' + item.description + '</p>\n' +
        '        <p class="card-text" style="font-size: 15px; padding: 0px 20px 0px 20px; text-align: center;">' + item.price + '</p>\n' +
        '        <a href="#" class="btn btn-primary" style="background-color: #576cbc; border-color: #576cbc; display: flex; justify-content: center; align-items: center; margin: 10px 10px 10px 30px; ">Agregar al carrito</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}


addItem({
    'name': 'Apps Smart Watch',
    'img': 'https://m.media-amazon.com/images/I/61gpLj2KvTL._AC_SL1500_.jpg',
    'description': 'Ofrecemos aplicaciones de smartwatch que combinan funcionalidad avanzada con una experiencia de usuario intuitiva.',
    'price': 'Suscripción $20.00 MXN'
});

addItem({
    'name': 'Membership',
    'img': 'https://media.istockphoto.com/id/522389088/vector/vip-club-cards.jpg?s=612x612&w=0&k=20&c=Ms6bRFXe4iISeMBYdioSkEn-kMTW_M1cbCNg7JPSAcc=',
    'description': 'Contenido premium que sea informativo . Esto puede ser en forma de artículos, seminarios web, podcasts o recursos descargables a cambio de una tarifa de suscripción.',
    'price': 'Suscripción $20.00 MXN'
});
addItem({
    'name': 'Apps iOS',
    'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s',
    'description': 'Software Sphere es un experto en desarrollar aplicaciones para iPhones y iPads, ofreciendo soluciones móviles personalizadas.',
    'price': 'Suscripción $20.00 MXN'
});

addItem({
    'name': 'E-learning',
    'img': 'https://www.itconsultors.com/images/blog/teaserbox_954157418.jpg',
    'description': 'Crea tu e-learning con SOFTWARE SPHERE y lleva tu conocimiento de enseñanza acabo con ayuda de medios digitales y tecnologías de la información comunicación.',
    'price': '$500 .00 MXN'
});

addItem({
    'name': 'Automóvil',
    'img': 'https://www.shutterstock.com/image-vector/using-smart-lock-application-icon-260nw-2493334223.jpg',
    'description': 'Desarrollamos aplicaciones innovadoras para automóviles que mejoran la conectividad y la experiencia de conducción.',
    'price': '$500 .00 MXN'
});

addItem({
    'name': 'Apps Android',
    'img': 'https://www.brandemia.org/wp-content/uploads/2012/10/logo_principal.jpg',
    'description': 'Ofrecemos soluciones para teléfonos Android, dispositivos portátiles y otros aparatos del ecosistema Android.',
    'price': 'Suscripción $25.00 MXN'
});

addItem({
    'name': 'Foros Comunitarios',
    'img': 'https://cdn.femashr.com/wp-content/uploads/2021/04/img-personnel-fearture8@2x.png',
    'description':'Nuestro servicio de desarrollo de foros te permite crear espacios en línea donde tus miembros puedan conectarse, compartir ideas y colaborar ',
    'price': 'Suscripción $500.00 MXN'
});

addItem({
    'name': 'Portafolio Web',
    'img': 'https://img.freepik.com/vector-premium/idea-creativa-conceptos-diseno-linea-portafolio-digital-caracter_269730-321.jpg?w=740',
    'description':'Presentación de contenidos digitales de tus mejores proyectos. ',
    'price': 'Suscripción $300.00 MXN'
});

addItem({
    'name': 'Diseño de Experiencia de Usuario',
    'img': 'https://img.freepik.com/vector-gratis/ilustracion-concepto-diferencias-ui-ux_114360-14909.jpg?t=st=1726373327~exp=1726376927~hmac=83b54cdb1657e41cf2107d2c19c7076e90d1a78b2184d4d3e1fc28cc1a707edf&w=740',
    'description':'Creamos interfaces intuitivas y atractivas orientadas al usuario que maximizan la usabilidad y la satisfacción de colaboradores, proveedores y clientes. ',
    'price': 'Suscripción $350.00 MXN'
});

addItem({
    'name': 'Chat Bot para empresas',
    'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsR1MLm-CYSh4W50Uhtp9UFKnM_EclSrFdw&s',
    'description': 'Atiende a tus clientes 24/7. Fácil integración a tu sitio web, y respuestas automáticas. Ofrece atención también a través de tus redes sociales.',
    'price': 'Cotiza aqui'
});

addItem({
    'name': 'Servicios de Autenticacion',
    'img': 'https://www.redeszone.net/app/uploads-redeszone.net/2020/06/diferencias-autenticacion-autorizacion-3-1200x675.jpg',
    'description': 'Ofrecemos servicios de autenticación seguros y personalizados para proteger tu plataforma digital. Implementamos soluciones adaptadas a las necesidades de tu negocio.',
    'price': 'Cotiza aqui'
});

addItem({
    'name': 'Procesamiento de pagos',
    'img': 'https://cdn.prod.website-files.com/632ea1956f3e9d4d62987e64/649b4e7324cc9d1153009384_Headers_Contenido2.webp',
    'description': 'Gestiona de manera automática el procesamiento de pagos, suscripciones y facturación con plataformas de pago como Stripe o PayPal.',
    'price': 'Cotiza aqui'
});

addItem({
    'name': 'Fintech',
    'img': 'https://cdn-icons-png.flaticon.com/256/3186/3186911.png',
    'description':'Desarrollamos soluciones financieras digitales personalizadas para pagos, banca y automatización, mejorando la eficiencia y seguridad de tu negocio.',
    'price': '$550.00 MXN'
});

addItem({
    'name': 'Health & Fitness Apps',
    'img': 'https://cdn-icons-png.flaticon.com/256/9227/9227553.png',
    'description':'Aplicaciones para monitorear la salud y el bienestar, desde el seguimiento de ejercicios y nutrición hasta recordatorios de medicación y chequeos médicos.',
    'price': '$700.00 MXN'
});
function addItem(item) {
    const itemHTML = `
        <div class="card" style="background-color: #a5d7e8; width: 18rem; align-items: flex-end;">
            <img src="${item.img}" class="card-img-top" alt="image" style="height: 262px; width: 262px; margin: 10px 0px 0px 0px; border-radius: 10px;">
            <div class="card-body">
                <h5 class="card-title" style="font-size: 30px; text-align: center; margin: 0px 0px 20px 0px;">${item.name}</h5>
                <p class="card-text" style="font-size: 20px; height: 262px; width: 262px; text-align: left; padding: 0px 20px 0px 20px;">${item.description}</p>
                <p class="card-text" style="font-size: 15px; padding: 0px 20px 0px 20px; text-align: center;">${item.price}</p>
                <a href="#" class="btn btn-primary" style="background-color: #576cbc; border-color: #576cbc; display: flex; justify-content: center; align-items: center; margin: 10px 10px 10px 30px;">Agregar al carrito</a>
            </div>
        </div>
        <br/>
    `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
  }
  
  // Cargar productos desde localStorage
  function cargarProductos() {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.forEach(producto => {
        addItem({
            name: producto.tituloProducto,
            img: producto.imgProducto,
            description: producto.descripcionProducto,
            price: `${producto.precioProducto} MXN`
        });
    });
  }
  
  // Cargar productos al cargar la página
  document.addEventListener('DOMContentLoaded', cargarProductos);
