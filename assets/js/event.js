$(window).on("load",function (){
    $(".overlay-loader").fadeOut();
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
function count_down(){

    var date_counter='.date-counter';
    var date=$(date_counter).attr('target-date');
    $(date_counter).countdown(date, function(event) {

        var week=(event.strftime('%w'));
        var weeks_convert_to_days=parseInt(event.strftime('%w'))*7;
        var days=parseInt(event.strftime('%d'))+weeks_convert_to_days;
        var hours=event.strftime('%H');
        var minutes=event.strftime('%M');
        var seconds=event.strftime('%S');
        $(date_counter+' .days').html(days);
        $(date_counter+' .hours').html(hours);
        $(date_counter+' .minutes').html(minutes);
        $(date_counter+' .seconds').html(seconds);

    });
}
$(function(){
    navbar_add_color();
    count_down();
    $('.owl-speakers').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],

        // dotsContainer: '#carousel-custom-dots',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('.image-zoom').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true}
        // other options
    });

});
$(window).scroll(function() {
    navbar_add_color();
});

function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}