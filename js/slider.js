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
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
	},
	grabCursor: true,
});
