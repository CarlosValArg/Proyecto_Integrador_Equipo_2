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
    'name': 'SportWatch',
    'img': 'https://static.vecteezy.com/system/resources/previews/017/494/093/non_2x/letter-s-fitness-gym-logo-design-fitness-club-exercising-logo-free-vector.jpg',
    'description': 'Registra datos relevantes para su condición física, como pasos dados, horas de sueño, frecuencia cardíaca y calorías quemadas, también le brinda interpretaciones profesionales.',
    'price': 'Suscripción $20.00 MXN'
});

addItem({
    'name': 'Membership',
    'img': 'https://media.istockphoto.com/id/522389088/vector/vip-club-cards.jpg?s=612x612&w=0&k=20&c=Ms6bRFXe4iISeMBYdioSkEn-kMTW_M1cbCNg7JPSAcc=',
    'description': 'Contenido premium que sea informativo . Esto puede ser en forma de artículos, seminarios web, podcasts o recursos descargables a cambio de una tarifa de suscripción.',
    'price': 'Suscripción $20.00 MXN'
});
addItem({
    'name': 'ReciclApp',
    'img': 'https://www.raeeandalucia.es/sites/default/files/images/signo-reciclaje-fondo-mundo.jpg',
    'description': 'Aplicación disponible para sistema iOs, que te permite poner a la venta tu material reciclable al por mayor o por menor...! La idea es cuidar al planeta y a la vez recibir un pago por esto...!',
    'price': 'Suscripción $20.00 MXN'
});

addItem({
    'name': 'E-learning',
    'img': 'https://www.itconsultors.com/images/blog/teaserbox_954157418.jpg',
    'description': 'Crea tu e-learning con SOFTWARE SPHERE y lleva tu conocimiento de enseñanza acabo con ayuda de medios digitales y tecnologías de la información comunicación.',
    'price': '$500 .00 MXN'
});

addItem({
    'name': 'Apps para carros',
    'img': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Froadshow%2Fnews%2Fbest-android-auto-head-unit%2F&psig=AOvVaw2MW5jb2O2HIUXpGmMg21mv&ust=1726434869368000&source=images&opi=89978449',
    'description': 'Creamos aplicaciones para panel de tu carro, con SOFTWARE SPHERE y lleva tu conocimiento de enseñanza acabo con ayuda de medios digitales y tecnologías de la información comunicación.',
    'price': '$500 .00 MXN'
});
