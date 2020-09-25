$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.steps-menu').addClass('fixed-header');
        // $('nav div').addClass('visible-title');
    }
    else {
        $('.steps-menu').removeClass('fixed-header');
        // $('nav div').removeClass('visible-title');
    }
});