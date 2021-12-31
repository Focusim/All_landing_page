$('.banner_slider').slick({
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
});

$(".info_block").owlCarousel({
    dors: false,
    responsive: {
        768: {
            items: 3,
            nav: false,
        },
        1250: {
            items: 4,
        }
    },
});

$(".food_sliders").owlCarousel({
    dots: false,
    items: 1,
    loop: false,
    nav: true,
    mouseDrag: false,
    navContainer: '.food_title-menu',
    navElement: 'div',
    navText: ["<img src='img/arrowprev.svg'>", "<img src='img/arrownext.svg'>"],
    margin: 10,
});

$(".food_meals").owlCarousel({
    items: 2,
    center: true,
    dots: false,
    nav: false,
    autoWidth:true,
    margin: 15,
    responsive: {
        768: {
            items: 5,
            center: false,
        },
    }
});

$(".dishs").owlCarousel({
    dots: false,
    items: 1,
    loop: false,
    mouseDrag: true,
    nav: true,
    margin: 0,
    navText: ["<img src='img/arrowprev.svg'>", "<img src='img/arrownext.svg'>"],
    responsive: {
        768: {
            items: 2,
        },
        1251: {
            items: 3,
            mouseDrag: false,
        },
    },
});


$.each($('.checkbox'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
        $(this).addClass('active');
    }
});


$(document).on('click', '.checkbox', function (event) {
    if ($(this).hasClass('active')) {
        $(this).find('input').prop('checked', false);
    } else {
        $(this).find('input').prop('checked', true);
    }
    $(this).toggleClass('active');

    return false;
});


/*$('body').find('.info_block.owl-carousel').remove();*/

$(window).on('load resize', function () {
    if ($(this).width() < 752) {
        $(".info_block").trigger('destroy.owl.carousel');
    }
})

$('.header_menu-btn').on('click',function(){
$('.header_menu-list').toggleClass('menu_list--active')
});