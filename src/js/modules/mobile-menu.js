function mobileMenu() {
	const burgerButton = document.querySelector('.burger-button')
	const mobileMenu = document.querySelector('[data-mobile-menu="main"]')
	const mobileMenuList = document.querySelectorAll('.mobile-menu__list')
	const body = document.querySelector('body')

	burgerButton.addEventListener('click', function() {
		burgerButton.classList.toggle('burger-button--active')
		mobileMenu.classList.toggle('mobile-menu__list--active')
		body.classList.toggle('no-scroll')
		
		if (!burgerButton.classList.contains('burger-button--active'))
			mobileMenuList.forEach(function(item) {
				item.classList.remove('mobile-menu__list--active')
		})
	})

	mobileMenu.addEventListener('click', function(e) {
		// e.preventDefault()
		const backButton = e.target.classList.contains('mobile-menu__list-link--back')
		const nextButton = e.target.classList.contains('mobile-menu__list-link--next')
		const parentList = e.target.closest('.mobile-menu__list')
		const childList = parentList.querySelector('.mobile-menu__list')

		if (nextButton) {
			childList.classList.add('mobile-menu__list--active')
		}

		if (backButton) {
			parentList.classList.remove('mobile-menu__list--active')
		}
	})




}

export default mobileMenu