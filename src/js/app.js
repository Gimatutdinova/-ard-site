//= modules/webp.js
//= modules/header.js
//= modules/main.js

$(".slider").slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed:1500,
});

const mediaQuery = window.matchMedia('(max-width: 870px)')
if (mediaQuery.matches)  {
    $(".slider2").slick({
        adaptiveHeight: true,
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
    });
} 

