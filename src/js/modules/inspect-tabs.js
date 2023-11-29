function inspectTabs() {
	const inspectTabs = document.querySelector('.inspect-tabs')
	const inspectTabsList = inspectTabs.querySelector('.inspect-tabs__list')
	const inspectTabsListItems = inspectTabsList.querySelectorAll('.inspect-tabs__list-item')
	const inspectTabsContent = inspectTabs.querySelectorAll('[data-inspect-tab-content]')

	if (document.documentElement.clientWidth <= 767.98) {
		hideAllTabsContent()
		removeAllActiveItems()
	}

	function hideAllTabsContent() {
		inspectTabsContent.forEach(tab => {
			tab.classList.add('hidden')
		})
	}

	function removeAllActiveItems() {
		inspectTabsListItems.forEach(item => {
			item.classList.remove('inspect-tabs__list-item--active')
		})
	}

	inspectTabsList.addEventListener('click', function(e) {
		const contentInsideTab = e.target.querySelector('[data-inspect-tab-content]')


		if (e.target.hasAttribute('data-inspect-tab') &&
		   !e.target.classList.contains('inspect-tabs__list-item--active')) {
			const value = e.target.getAttribute('data-inspect-tab')
			const chosenTabContent = inspectTabs.querySelector(`[data-inspect-tab-content="${value}"]`)
			const chosenTab = inspectTabsList.querySelector(`[data-inspect-tab="${value}"]`)

			hideAllTabsContent()
			chosenTabContent.classList.remove('hidden')

			removeAllActiveItems()
			chosenTab.classList.add('inspect-tabs__list-item--active')

			return
		}

		if (e.target.classList.contains('inspect-tabs__list-item--active') && contentInsideTab) {
			hideAllTabsContent()
			removeAllActiveItems()
		}
	})
}

export default inspectTabs