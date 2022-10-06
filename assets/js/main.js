const header = $('.header');
const iconExit = $('.icon-exit');

const overlayShow = () => {
  $('.overlay').addClass('active');
};
const overlayhidden = () => {
  $('.overlay').removeClass('active');
};

$('.overlay').click(() => {
  overlayhidden();
  $('.header .wrapper').removeClass('active');
});

$('.menu-mobile .icon-menu').click(() => {
  $('.header .wrapper').addClass('active');
  overlayShow();
});

iconExit.click(() => {
  overlayhidden();
  $('.header .wrapper').removeClass('active');
});

$(window).scroll(() => {
  if ($(window).width() >= 992) {
    let heightHeader = header.height();
    if ($(this).scrollTop() > heightHeader) {
      header.addClass('active');
    } else {
      header.removeClass('active');
    }
  } else {
    header.removeClass('active');
  }
});

$('.action .icon.up').click(() => {
  let body = $('html, body');
  if (body.scrollTop() > 0) {
    body.stop().animate({ scrollTop: 0 }, 500, 'swing');
  }
});

$('.blog .slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  // centerMode: true,
  centerPadding: 0,
  nextArrow: false,
  prevArrow: false,
  variableWidth: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
  ],
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveWidth: true,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  adaptiveWidth: true,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
