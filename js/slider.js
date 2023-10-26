let swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  cssMode: true,
  mousewheel: true,
  keyboard: true,
  loop: true,
	grabCursor: true,
	// navigation: {
	// 	nextEl: null,
  //   prevEl: null,
	// },
	breakpoints: {
    768: {
      navigation: {
        nextEl: '.slider-arrow-next',
        prevEl: '.slider-arrow-prev',
      },
    },
  },
});
