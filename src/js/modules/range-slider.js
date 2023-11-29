import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

function rangeSlider() {
	const rangeSliderPrice = document.getElementById('range-slider-price');


	var formatForSlider = {
		from: function (formattedValue) {
			return Number(formattedValue);
		},
		to: function(numericValue) {
			return Math.round(numericValue);
		}
	};

	noUiSlider.create(rangeSliderPrice, {

		range: {
			'min': 2000,
			'max': 150000
		},

		step: 1,

		// Handles start at ...
		start: [2000, 150000],

		// ... must be at least 300 apart
		margin: 300,

		// ... but no more than 600
		limit: 150000,

		// Display colored bars between handles
		connect: true,

		// tooltips: true,
		// tooltips: true,

		format: formatForSlider,
   		tooltips: {
			// tooltips are output only, so only a "to" is needed
			to: function(numericValue) {
				return numericValue.toFixed(0)
			}
    	}
	});



	const rangeSliderPrice1 = document.getElementById('range-slider-price-1')
	const rangeSliderPrice2 = document.getElementById('range-slider-price-2')
	const rangeSlidersPrice = [rangeSliderPrice1, rangeSliderPrice2]

	rangeSliderPrice.noUiSlider.on('update', function(values, handle) {
		rangeSlidersPrice[handle].value = Math.round(values[handle])
	});


	const setRangeSliderPrice = (i, value) => {
		let arr = [null, null]
		arr[i] = value

		rangeSliderPrice.noUiSlider.set(arr)
	}

	rangeSlidersPrice.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSliderPrice(index, e.currentTarget.value)
		})
	})




	const rangeSliderCommonLength = document.getElementById('range-slider-totalLength');

	noUiSlider.create(rangeSliderCommonLength, {

		range: {
			'min': 100,
			'max': 1000
		},

		step: 1,

		// Handles start at ...
		start: [100, 1000],

		// ... must be at least 300 apart
		// margin: 300,

		// ... but no more than 600
		// limit: 900,

		// Display colored bars between handles
		connect: true,

		format: formatForSlider,
   		tooltips: {
			// tooltips are output only, so only a "to" is needed
			to: function(numericValue) {
				return numericValue.toFixed(0)
			}
    	}
	});

	const rangeSliderCommonLength1 = document.getElementById('range-slider-totalLength-1')
	const rangeSliderCommonLength2 = document.getElementById('range-slider-totalLength-2')
	const rangeSlidersCommonLength = [rangeSliderCommonLength1, rangeSliderCommonLength2]

	rangeSliderCommonLength.noUiSlider.on('update', function(values, handle) {
		rangeSlidersCommonLength[handle].value = Math.round(values[handle])
	});


	const setRangeSliderCommonLength = (i, value) => {
		let arr = [null, null]
		arr[i] = value

		rangeSliderCommonLength.noUiSlider.set(arr)
	}

	rangeSlidersCommonLength.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSliderCommonLength(index, e.currentTarget.value)
		})
	})



	const rangeSliderBladeLength = document.getElementById('range-slider-bladeLength');

	noUiSlider.create(rangeSliderBladeLength, {

		range: {
			'min': 50,
			'max': 750
		},

		step: 1,

		// Handles start at ...
		start: [50, 750],

		// ... must be at least 300 apart
		// margin: 300,

		// ... but no more than 600
		// limit: 900,

		// Display colored bars between handles
		connect: true,

		format: formatForSlider,
   		tooltips: {
			// tooltips are output only, so only a "to" is needed
			to: function(numericValue) {
				return numericValue.toFixed(0)
			}
    	}
	});

	const rangeSliderBladeLength1 = document.getElementById('range-slider-bladeLength-1')
	const rangeSliderBladeLength2 = document.getElementById('range-slider-bladeLength-2')
	const rangeSlidersBladeLength = [rangeSliderBladeLength1, rangeSliderBladeLength2]

	rangeSliderBladeLength.noUiSlider.on('update', function(values, handle) {
		rangeSlidersBladeLength[handle].value = Math.round(values[handle])
	});


	const setRangeSliderBladeLength = (i, value) => {
		let arr = [null, null]
		arr[i] = value

		rangeSliderBladeLength.noUiSlider.set(arr)
	}

	rangeSlidersBladeLength.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSliderBladeLength(index, e.currentTarget.value)
		})
	})



	const rangeSliderBladeWidth = document.getElementById('range-slider-bladeWidth');

	noUiSlider.create(rangeSliderBladeWidth, {

		range: {
			'min': 10,
			'max': 200
		},

		step: 1,

		// Handles start at ...
		start: [10, 200],

		// ... must be at least 300 apart
		// margin: 300,

		// ... but no more than 600
		// limit: 900,

		// Display colored bars between handles
		connect: true,


		format: formatForSlider,
   		tooltips: {
			// tooltips are output only, so only a "to" is needed
			to: function(numericValue) {
				return numericValue.toFixed(0)
			}
    	}
	});

	const rangeSliderBladeWidth1 = document.getElementById('range-slider-bladeWidth-1')
	const rangeSliderBladeWidth2 = document.getElementById('range-slider-bladeWidth-2')
	const rangeSlidersBladeWidth = [rangeSliderBladeWidth1, rangeSliderBladeWidth2]

	rangeSliderBladeWidth.noUiSlider.on('update', function(values, handle) {
		rangeSlidersBladeWidth[handle].value = Math.round(values[handle])
	});


	const setRangeSliderBladeWidth = (i, value) => {
		let arr = [null, null]
		arr[i] = value

		rangeSliderBladeWidth.noUiSlider.set(arr)
	}

	rangeSlidersBladeWidth.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSliderBladeWidth(index, e.currentTarget.value)
		})
	})
}

export default rangeSlider