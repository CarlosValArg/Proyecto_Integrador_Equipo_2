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