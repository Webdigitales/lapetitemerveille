$(document).ready(function () {


    $(".hero-home").mousemove(function (e) {

        var screenWidth = $(window).width();
        var screenHeight = $(window).height();

        $(".hero-home img").css({
            transform:
                "translate(-" + e.pageX / screenWidth * 10 + "px, -" + e.pageY / screenHeight * 30 + "px)"
        });

    });

    AOS.init({
        once: true,
        disable: 'mobile'
    });

    jQuery('header nav').meanmenu({
        meanScreenWidth: 991,
        meanMenuContainer: '.site-wrapper'
    });
});
