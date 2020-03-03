$(window).on("load",function (){
    $(".overlay-loader").fadeOut();
});
$(window).scroll(function() {

    navbar_add_color();
});
$(function(){
    navbar_add_color();
});

function navbar_add_color()
{

    /* add color if scrolled more than 40 */
    if ($(this).scrollTop() >= 40) {
        $('.navbar').addClass('colored')
    } else {
        $('.navbar').removeClass('colored')
    }

}
// $(document).ready(function() {
//
//     $('.play-button').click(function(){
//         return false;
//     });
//
//     $('.play-button, .popup-vimeo, .popup-gmaps').magnificPopup({
//         disableOn: 700,
//         type: 'iframe',
//         mainClass: 'mfp-fade',
//         removalDelay: 160,
//         preloader: false,
//
//         fixedContentPos: false
//     });
// });

$('.slick-clients').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});
