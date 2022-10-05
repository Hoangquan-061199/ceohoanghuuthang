const header = $('.header');

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

$('.blog .slider').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 34,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900: {
      items: 2.5,
    },
    1100: {
      items: 3,
    },
  },
  dots: true,
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  variableWidth: true,
  asNavFor: '.slider-nav',
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});
