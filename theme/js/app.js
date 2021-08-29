$(document).ready(function(){
    $('.services-slider').owlCarousel({
        loop: true,
        nav: false,
        pagination: true,
        items: 5,
        margin: 20,
        slideSpeed: 300,
        autoPlay: false,
        mouseDrag: true,
        singleItem: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',        
      });
    $('.experience-slider').owlCarousel({
        loop: true,
        nav: true,
        pagination: true,
        items: 5,
        margin: 20,
        slideSpeed: 300,
        autoPlay: false,
        mouseDrag: true,
        singleItem: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',   
        navText: [
          "<i class='bi bi-arrow-left'></i>",
          "<i class='bi bi-arrow-right'></i>"
        ],     
      });
    $('.testimonials-slider').owlCarousel({
        loop: true,
        nav: true,
        pagination: true,
        items: 1,
        margin: 0,
        slideSpeed: 300,
        autoPlay: false,
        mouseDrag: true,
        singleItem: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',   
        navText: [
          "<i class='bi bi-arrow-left'></i>",
          "<i class='bi bi-arrow-right'></i>"
        ],     
      });
});