const blogApp = {};


blogApp.init = () => {
	blogApp.carousel();
  blogApp.hamburger();
};

blogApp.carousel = () => {
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    pageDots: false,
    autoPlay: 3000,
    prevNextButtons: false,
    friction: 0.5
  });

  $('.carousel').flickity({
    cellAlign: 'left',
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    friction: 0.5,
    autoPlay: 4000,
    setGallerySize: false
  })

  blogApp.controls();
}

blogApp.controls = () => {
  const $carousel = $('.main-carousel').flickity();
  const $aboutUs = $('.carousel').flickity();

  $('.sidebar__Pause').on('click', (e) => {
    e.preventDefault();
    console.log('yo');
    if ($('.play').hasClass('invisible')) {
      $('.pause').addClass('invisible');
      $('.play').removeClass('invisible');
      $carousel.flickity('stopPlayer');
    } else {
      $('.pause').removeClass('invisible');
      $('.play').addClass('invisible');
      $carousel.flickity('playPlayer');
    }
  })

  $('.backSlide').on('click', (e) => {
    e.preventDefault();
    $carousel.flickity('previous');
  })

  $('.forwardSlide').on('click', (e) => {
    e.preventDefault();
    $carousel.flickity('next');
  })

  $('.aboutUs-back').on('click', (e) => {
    e.preventDefault();
    $aboutUs.flickity('previous');
  })

  $('.aboutUs-forward').on('click', (e) => {
    e.preventDefault();
    $aboutUs.flickity('next');
  })
}

blogApp.hamburger = () => {
  $('.hamburger').on('click', (e) => {
    e.preventDefault();
    if ($('.nav__Links--Container').hasClass('offMenu')) {
      $('.nav__Links--Container').removeClass('offMenu').addClass('onMenu');
      $('.hamburger').removeClass('offButton').addClass('onButton');
    } else {
      $('.nav__Links--Container').removeClass('onMenu').addClass('offMenu');
      $('.hamburger').removeClass('onButton').addClass('offButton');
    }
  })
}

$(blogApp.init);
