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
  centerMode: true,
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

// search fixed   
$(document).ready(function () {
  // Открытие по клику на кнопку
  $('.btn-search-fixed').on('click', function (e) {
    e.stopPropagation(); // чтобы клик не дошёл до документа
    $('.search-wrapper-fixed').toggleClass('active');
  });

  // Закрытие по клику вне блока
  $(document).on('click', function (e) {
    const $search = $('.search-wrapper-fixed');
    if (!$search.is(e.target) && $search.has(e.target).length === 0) {
      $search.removeClass('active');
    }
  });

  // Предотвращаем закрытие при клике внутри самого поиска
  $('.search-wrapper-fixed').on('click', function (e) {
    e.stopPropagation();
  });

  // Закрытие по кнопке "крестик"
  $('.search-wrapper__close').on('click', function () {
    $('.search-wrapper-fixed').removeClass('active');
  });
});

// mobile menu
$('.btn-burger').on('click', function () {
  $('.nav-menu-header').slideToggle();
  $(this).toggleClass('click');
});


// scroll btn
$(document).ready(function () {
  // Показать/скрыть кнопку при прокрутке
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $('.btn-scroll-top').show();
    } else {
      $('.btn-scroll-top').hide();
    }
  });

  // Скролл вверх при клике
  $('.btn-scroll-top').click(function (e) {
    e.preventDefault();
   $(window).scrollTop(0);
    return false;
  });
});