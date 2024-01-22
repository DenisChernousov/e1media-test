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

document.addEventListener('DOMContentLoaded', function () {
	const modal = document.getElementById('modal')
	const btn = document.querySelector('.btn.catalog-btn')
	const closeBtn = document.querySelector('.close')

	btn.addEventListener('click', function () {
		modal.style.display = 'block'
	})

	closeBtn.addEventListener('click', function () {
		modal.style.display = 'none'
	})

	window.addEventListener('click', function (event) {
		if (event.target === modal) {
			modal.style.display = 'none'
		}
	})
})

fetch('data.json')
	.then(response => response.json())
	.then(data => {
		const menuContainer = document.getElementById('menuContainer')
		const rightInnerContainers = document.querySelectorAll(
			'.modal__right-inner'
		)

		data.forEach((item, index) => {
			const menuItem = document.createElement('a')
			menuItem.href = '#'
			menuItem.classList.add('modal__main-left-list')

			menuItem.innerHTML = `
									<div class="modal__main-left-list__left">${item.label}</div>
									<div class="modal__main-left-list__right">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
													<path d="M6.66671 3.33337L13.3334 10L6.66671 16.6667" stroke="#91A5B7" stroke-width="2" stroke-linejoin="round" />
											</svg>
									</div>
							`

			menuItem.addEventListener('mouseover', () => {
				// Убираем класс active у всех контейнеров modal__right-inner
				rightInnerContainers.forEach(container => {
					container.classList.remove('active')
				})

				// Добавляем класс active к соответствующему контейнеру modal__right-inner
				rightInnerContainers[index].classList.add('active')
			})

			menuContainer.appendChild(menuItem)
		})
	})
	.catch(error => console.error('Ошибка загрузки данных:', error))

document.addEventListener('DOMContentLoaded', function () {
	const burgerIcon = document.querySelector('.burger-icon')
	const burgerMenu = document.querySelector('.burger-menu')

	burgerIcon.addEventListener('click', function () {
		burgerMenu.style.display =
			burgerMenu.style.display === 'block' ? 'none' : 'block'
	})

	const burgerMenuItems = document.querySelectorAll('.burger-menu a')
	burgerMenuItems.forEach(item => {
		item.addEventListener('click', function () {
			burgerMenu.style.display = 'none'
		})
	})
})
