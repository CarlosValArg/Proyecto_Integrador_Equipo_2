const carousel = document.querySelector("#carouselExampleCaptions");
const videos = document.querySelectorAll("video");

    carousel.addEventListener("slide.bs.carousel", function (e) {
    
        /* ---> Reproduce el video en el slide que se está mostrando <--- */
        const activaVideo = e.relatedTarget.querySelector("video");
        if (activaVideo) {
            activaVideo.play();
        }//if
    });//addEventListener

    /* ---> Reproduce el video inicial en la primera slide <--- */
    const activaVideo = document.querySelector(".carousel-item.active video");
    if (activaVideo) {
        activaVideo.play();
    }//if

    