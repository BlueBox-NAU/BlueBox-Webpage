
(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {

            $('#carousel-slider').carousel({
                interval: 3000
            })


            $(function () {
                $('.scrollclass a').bind('click', function (event) {
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1200, 'easeInOutExpo');
                    event.preventDefault();
                });
            });


            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                      { src: 'assets/img/1.jpg', fade: 1000, delay: 9000 },
                      { src: 'assets/img/2.jpg', fade: 1000, delay: 9000 },


                    ]
                })('overlay', {

                    src: 'assets/plugins/vegas/overlays/03.png'
                });

            });









        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));
