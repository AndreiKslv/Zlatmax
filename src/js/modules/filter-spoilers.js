function filterSpoilers() {
	const filter = document.querySelector('.filter__aside')
	const filterButton = filter.querySelector('.filter__aside-main-title')
	const filterSpoilers = filter.querySelectorAll('.filter__aside-spoiler')

	function filterSpoiler() {
		const filterSpoilersActive = document.querySelectorAll('.filter__aside-spoiler--active')
		if (filterSpoilersActive.length > 0) {
			filterSpoilers.forEach(function(filterSpoiler) {
				filterSpoiler.classList.remove('filter__aside-spoiler--active')
				
			})
		} else {
			filterSpoilers.forEach(function(filterSpoiler) {
				filterSpoiler.classList.add('filter__aside-spoiler--active')
			})
		}
	}

	filter.addEventListener('click', function(e) {
		if (e.target.hasAttribute('data-filter-spoiler')) {
			const spoiler = e.target.closest('.filter__aside-spoiler')
			spoiler.classList.toggle('filter__aside-spoiler--active')
		}

		if (e.target == filterButton) {
			filterSpoiler()
		}
	})
}

export default filterSpoilers