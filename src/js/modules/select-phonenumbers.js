function selectPhoneNumbers() {
	const selectBlock = document.querySelector('.select-phonenumbers__select')
	const list = document.querySelector('.select-phonenumbers__list')
	const button = document.querySelector('.select-phonenumbers__button')

	selectBlock.addEventListener('click', function(e) {
		
		if (button) {
			e.stopPropagation()
			button.classList.toggle('select-phonenumbers__button--active')
			list.classList.toggle('select-phonenumbers__list--active')
		}

		if (e.target.dataset.phone == 'phone') {
			button.classList.remove('select-phonenumbers__button--active')
			list.classList.remove('select-phonenumbers__list--active')
		}
	})

	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') {
			button.classList.remove('select-phonenumbers__button--active')
			list.classList.remove('select-phonenumbers__list--active')
		}
	})

	document.addEventListener('click', function(e) {
		if (e.target !== list) {
			button.classList.remove('select-phonenumbers__button--active')
			list.classList.remove('select-phonenumbers__list--active')
		}
	})
}

export default selectPhoneNumbers