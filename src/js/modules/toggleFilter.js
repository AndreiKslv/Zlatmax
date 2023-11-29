function toggleFilter() {
	const filter = document.querySelector('.filter')
	const filterMenuButton = filter.querySelector('.filter__menu-button')
	const filterMenuButtonClose = filter.querySelector('.filter__aside-main-back')
	const filterAside = filter.querySelector('.filter__aside')
	
	filter.addEventListener('click', function(e) {
		if (e.target == filterMenuButton) {
			filterAside.classList.toggle('filter__aside--active')
		}

		if (e.target == filterMenuButtonClose) {
			filterAside.classList.remove('filter__aside--active')
		}
	})
}

export default toggleFilter