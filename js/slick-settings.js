jQuery(function($) {
    $(document).ready(function(){
        $('.slider-tennai').slick({
            arrows: false,
            autoplay: true,
            dots: true,
            centerMode: false,
        });
        $('.slider-syokuzai').slick({
            arrows: false,
            autoplay: true,
            dots: true,
            centerMode: false,
        });
    });
});