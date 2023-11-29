import Swiper from 'swiper';
import 'swiper/css';
import { Thumbs } from 'swiper/modules';


function inspectSwiper() {
	var swiper = new Swiper(".inspectSwiper", {
		modules: [Thumbs],
		loop: true,
		spaceBetween: 15,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,

		breakpoints: {
			0: {
				spaceBetween: 5,
			},
			767.98: {
				spaceBetween: 15,
			},
		  },
	});
	var swiper2 = new Swiper(".inspectSwiper2", {
		modules: [Thumbs],
		loop: true,
		spaceBetween: 10,
		thumbs: {
			swiper: swiper,
		},
	});
}

export default inspectSwiper