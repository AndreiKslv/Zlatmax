function footerSpoilers() {
	const footerBottom = document.querySelector('.footer__bottom')

	footerBottom.addEventListener('click', function(e) {
		if (e.target.hasAttribute('data-footer-spoiler')) {
			const wrapper = e.target.closest('.footer__bottom-list-wrapper')
	
			wrapper.classList.toggle('footer__bottom-list-wrapper--active')
		}

		if (!e.target.closest('.footer__bottom-list-wrapper')) {
			const wrappers = document.querySelectorAll('.footer__bottom-list-wrapper')

			wrappers.forEach(function(wrapper) {
				wrapper.classList.remove('footer__bottom-list-wrapper--active')
			})
		}
	})
}

export default footerSpoilers