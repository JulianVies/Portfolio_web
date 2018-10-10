$().ready(() => {
    $('a.scroll-link').on('click', (e) => {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("" + e.target.getAttribute("href")).offset().top
        }, 900);
        $('.navbar-collapse').collapse('hide');
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 150) {
            $('nav').addClass('transparent');
        } else {
            $('nav').removeClass('transparent');
        }
    });

    $('#portfolio .row .col-12').each(function () {
        $(this).hover(function () {
            $(this).find('.my-desc').animate({
                opacity: '0.9',
                top: '0px'
            });
        }, function () {
            $(this).find('.my-desc').animate({
                opacity: '0',
                top: '10px'
            });
        });
    });

    $('#contact a').each(function () {
        $(this).hover(function () {
            $(this).animate({
                opacity: '0.8'
            }, "fast");
        }, function () {
            $(this).animate({
                opacity: '1'
            }, "fast");
        });
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $('.tool-msg').each(function () {
        $(this).on('click', function (e) {
            e.preventDefault();
            $(this).tooltip('toggle');
        });
    });
});

var userLang = navigator.language || navigator.userLanguage; 
console.log(`The language is  ${userLang}`);