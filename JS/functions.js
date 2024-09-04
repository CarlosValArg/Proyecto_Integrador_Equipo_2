// document.addEventListener('DOMContentLoaded', function () {
//     var carousel = document.querySelector('#carouselExampleIndicators');
//     var carouselInstance = new bootstrap.Carousel(carousel, {
//         interval: false, // Desactiva el desplazamiento automático
//         wrap: false // Desactiva el bucle infinito
//     });

//     // Ajusta los botones de navegación para que avancen una tarjeta a la vez
//     document.querySelector('.custom-carousel-control-prev').addEventListener('click', function () {
//         var items = document.querySelectorAll('.carousel-item');
//         var currentItem = document.querySelector('.carousel-item.active');
//         var index = Array.from(items).indexOf(currentItem);
//         var nextIndex = (index - 1 + items.length) % items.length;
//         var nextItem = items[nextIndex];
//         carouselInstance.to(nextIndex);
//     });

//     document.querySelector('.custom-carousel-control-next').addEventListener('click', function () {
//         var items = document.querySelectorAll('.carousel-item');
//         var currentItem = document.querySelector('.carousel-item.active');
//         var index = Array.from(items).indexOf(currentItem);
//         var nextIndex = (index + 1) % items.length;
//         var nextItem = items[nextIndex];
//         carouselInstance.to(nextIndex);
//     });
// });