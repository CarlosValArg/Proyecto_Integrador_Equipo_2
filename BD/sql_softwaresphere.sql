use softwaresphere;
SELECT * FROM usuarios;
SELECT * FROM orden;
SELECT * FROM servicios;
INSERT INTO usuarios VALUES(null, "Cristian Andrés", "López Erazo", "3328358511","lopcristian94@gmail.com", "Jaib#314"),
(null, "Ulises Said", "Fragoso Guzmán", "3328358569","ulisexto@gmail.com", "Uli#1234"),
(null, "Carlos Alberto", "Valencia Argueta", "3326397841","ralavac69@gmail.com", "Rala#911"),
(null, "Miguel Angel", "Valencia Lizardi", "5536984178","donmigue@gmail.com", "Migue#69"),
(null, "María Juana", "Tituaña Pilatasig", "5596467510","marijuana96@gmail.com", "Mari#937");

INSERT INTO servicios VALUES 
(null,"apps de cardio" ,"aplicaciones de ejercicios de cardio" ,"https://www.shutterstock.com/image-vector/using-smart-lock-application-icon-260nw-2493334223.jpg",1000 ),
(null,"app de red social" ,"aplicación de red social" ,"https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2020/06/donde-se-pueden-descargar-las-aplicaciones-moviles.jpg",1000 ),
(null, "Apps Smart Watch","Los desarrolladores de Software Sphere tenemos amplia experiencia en el desarrollo de aplicaciones smartwatch que combinan funcionalidad avanzada con una experiencia de usuario intuitiva." , "https://m.media-amazon.com/images/I/61gpLj2KvTL._AC_SL1500_.jpg",1500),
(null, "Chat Bot para empresas", "Atiende a tus clientes 24/7. Contrata nuestro servicio para que generemos tu Chat Bot con fácil integración a tu sitio web","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s",1350 ),
(null,"Portafolio web" ,"Te apoyamos a crear tu portafolio digital. Podemos asesorarte para que estructures de la mejor forma tu colección de pruebas electrónicas. Ponte en contacto con nosotros" ,"https://img.freepik.com/vector-premium/idea-creativa-conceptos-diseno-linea-portafolio-digital-caracter_269730-321.jpg?w=740",1300 );


INSERT INTO orden VALUES (null, "2024-10-02", "referencia a la orden de portafolio web", 1);
INSERT INTO orden VALUES (null, "2024-10-03", "referencia a la orden de red social", 2);
INSERT INTO orden VALUES (null, "2024-10-04", "referencia a la orden de aplicación para smart watch", 3);
INSERT INTO orden VALUES (null, "2024-10-05", "referencia a la orden de Chat Bot para empresas", 4);
INSERT INTO orden VALUES (null, "2024-10-05", "referencia a la orden de Portafolio web", 5);
UPDATE orden SET orden_descripcion="referencia a la orden de Aplicación para cardio"
WHERE orden_id= 1;

