(function ($) {
    $(function () {
        new WOW().init();
        $('.nav-item a').on('click', function () {
            var $this = $(this),
                i = $(this).data('tab');
            $this
                .addClass('active')
                .parent()
                .siblings()
                .find('a')
                .removeClass('active');
            $('.transfer__content div[data-tab=' + i + ']')
                .addClass('active')
                .siblings()
                .removeClass('active');
        });

        $(window).on('scroll', function () {
            if ( $(window).scrollTop() > 500 ){
                $('.top-scroll').css('display','block');
            } else {
                $('.top-scroll').css('display','none');
            }
        });

        var w = $('html, body');
        $('.top-scroll').on('click', function () {
            w.animate({scrollTop: 0}, 500);
        });

        $('.nav-footer .nav-title').on('click', function () {

            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this)
                    .addClass('active')
                    .parent()
                    .siblings()
                    .find('.nav-title')
                    .removeClass('active');
            }
        });

    });
})(jQuery);