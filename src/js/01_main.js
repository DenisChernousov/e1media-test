'use strict'

var swiper = new Swiper('.swiper-cat', {
	slidesPerView: 'auto',
	mousewheel: true,
	navigation: {
		nextEl: '.swiper-cat-button-next',
		prevEl: '.swiper-cat-button-prev',
	},
})

var swiper = new Swiper('.slider', {
	loop: true,
	// autoHeight: true,
	navigation: {
		prevEl: '.slider-button-prev',
		nextEl: '.slider-button-next',
	},
	effect: 'fade',
	pagination: {
		el: '.slider-pagination',
	},
})
