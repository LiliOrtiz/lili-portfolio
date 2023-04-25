//CUANDO LA PAGINA SE CARGUE TAMBIEN SE CARGARA EL CARRUSEL DE IMAGENES DE SKILLS
document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150
    });
});