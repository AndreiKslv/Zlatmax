function selectGroup() {
	const selectGroups = document.querySelectorAll('.select-group')

	for (let i = 0; i < selectGroups.length; i++) {
		const selectGroup = selectGroups[i]
		const selectGroupSelects = selectGroup.querySelectorAll('.select-group__select')

		function deleteAllActiveSelects() {
			selectGroupSelects.forEach(item => {
				item.classList.remove('select-group__select--active')
			})
		}

		if (selectGroup) {
			selectGroup.addEventListener('click', (e) => {
				const selectGroupSelect = e.target.closest('.select-group__select')
				const selectGroupSelectListItem = e.target.closest('.select-group__select-list-item')
	
				if (selectGroupSelect) {
					const selectGroupInputButton = selectGroupSelect.querySelector('.select-group__input-button')
					const selectGroupInput = selectGroupSelect.querySelector('.select-group__input')
	
					if (selectGroupSelect.classList.contains('select-group__select--active')) {
						selectGroupSelect.classList.remove('select-group__select--active')
					} else {
						deleteAllActiveSelects()
						selectGroupSelect.classList.add('select-group__select--active')
					}
	
					if (selectGroupSelectListItem) {
						selectGroupInputButton.innerText = selectGroupSelectListItem.innerText
						selectGroupInputButton.classList.add('select-group__input-button--chosen')
						selectGroupInput.value = selectGroupSelectListItem.innerText
					}
				}
			})
	
			selectGroup.addEventListener('keydown', (e) => {
				const selectGroupSelect = e.target.closest('.select-group__select')
				if (selectGroupSelect) {
					if (e.key == 'Enter') {
						selectGroupSelect.classList.add('select-group__select--active')
					}
	
					if (e.key === 'Tab') {
						deleteAllActiveSelects()
					}
				}
			})
		}

		document.addEventListener('click', function(e) {
			if (!e.target.closest('.select-group__select--active')) {
				deleteAllActiveSelects()
			}
		})
	
		document.addEventListener('keydown', function(e) {
			if (e.key === 'Escape') {
				deleteAllActiveSelects()
			}
		})
	}
}

export default selectGroup