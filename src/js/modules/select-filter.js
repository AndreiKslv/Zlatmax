function selectFilter() {
	const selects = document.querySelectorAll('.select')

	for (let i = 0; i < selects.length; i++) {
		const select = selects[i];
		const selectButton = select.querySelector('.select__button')
		const selectInput = select.querySelector('.select__input')
		
		select.addEventListener('click', function(e) {
			const selectItemButton = e.target.closest('.select__item-button')

			if (e.target === selectButton) {
				e.stopPropagation()
				select.classList.toggle('select--active')
				selectButton.classList.add('select__button--active')
			}

			if (selectItemButton) {
				e.stopPropagation()
				selectButton.innerText = selectItemButton.innerText
				selectInput.value = selectItemButton.dataset.value
				select.classList.remove('select--active')
				selectButton.focus()
			}
		})

		document.addEventListener('click', function(e) {
			if (e.target !== select) {
				select.classList.remove('select--active')
				selectButton.classList.remove('select__button--active')
			}
		})

		document.addEventListener('keydown', function(e) {
			if (e.key === 'Escape' || e.key === 'Tab') {
				select.classList.remove('select--active')
				selectButton.classList.remove('select__button--active')
			}
		})
	}
}

export default selectFilter