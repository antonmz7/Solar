$(document).ready(function () {
    var $element = $('.face-container');
    var $lement = $('.advantages');
    let counter = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop() + $(window).height();
        var offset = $element.offset().top;
        var outset = $lement.offset().top;

        if (scroll > offset && counter == 0) {
            $('.modal__shop').animate({
                left: "-30px"
            }, 1500);
            counter = 1;
        }

        if (scroll > outset && counter == 1) {
            $('.modal__shop').animate({
                left: "-200px"
            }, 1500);
            counter = 2;
        }
    });
});