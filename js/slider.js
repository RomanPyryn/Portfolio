var swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".slider-arrow-next",
    prevEl: ".slider-arrow-prev",
	},
	pagination: {
    el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
  },
  cssMode: true,
  mousewheel: true,
	keyboard: true,
	loop: true,
});

const next = document.querySelector(".swiper-button-next");
