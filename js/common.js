$('[name="phone"]').mask('+7 (999) 999-99-99');

// slick 
$('.home-slider').slick({
    slidesToShow: 1,
    // fade: true,
    dots: false,
    arrows: false,
    // infinite: false,
    asNavFor: '.home-slider-preview',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
});

$('.home-slider-preview').slick({
    slidesToShow: 5,
    dots: false,
    variableWidth: true,
    arrows: true,
    // infinite: false,
    asNavFor: '.home-slider',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.about-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    arrows: false,
    asNavFor: '.home-slider-preview',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
});

// Fancybox
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});