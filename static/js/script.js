$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown({
        hover: false,
        coverTrigger: false,
    });
    $('.modal').modal();
    $('.carousel.carousel-slider').carousel({
        indicators: true,
    });
    $('select').formSelect();