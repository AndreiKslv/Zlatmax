function inspectCounter() {
	const inspectInfo = document.querySelector('.inspect__info')
	const inspectCounter = inspectInfo.querySelector('.inspect__counter')
	const inspectPriceNumber = inspectInfo.querySelector('.inspect__price-number')

	inspectCounter.addEventListener('click', function(e) {
		const minus = inspectCounter.querySelector('.inspect__sign--minus')
		const plus = inspectCounter.querySelector('.inspect__sign--plus')
		const counter = inspectCounter.querySelector('.inspect__counter-number')
		const amount = parseInt(counter.innerText)
		// const price = parseInt(String(inspectPriceNumber.innerText).replace(/ /g, ''))
		const price = 3865
		let currentPrice

		if (e.target == minus && amount > 1) {
			counter.innerText--
			currentPrice = price * parseInt(counter.innerText)

			inspectPriceNumber.innerText = currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		}

		if (e.target == plus && amount < 10) {
			counter.innerText++
			currentPrice = price * parseInt(counter.innerText)

			inspectPriceNumber.innerText = currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		}

		if (e.target == plus && amount == 10) {
			alert(`Вы достигли лимита по данному типу товара в количестве ${amount} штук!`)
		}
	})
}

export default inspectCounter