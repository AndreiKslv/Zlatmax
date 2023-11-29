import Swiper from 'swiper';
import { Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function swiper() {
	const promoSwiper = new Swiper(".promo-swiper", {
		modules: [Pagination, Autoplay],
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: 1,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			// dynamicBullets: true,
		},
	});

	const commonSwiper = new Swiper(".common-swiper", {
	modules: [Pagination, Autoplay],
	loop: true,
	spaceBetween: 30,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	slidesPerView: 4,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		650: {
			slidesPerView: 2,
		},
		950: {
			slidesPerView: 3,
		},
        1300: {
          slidesPerView: 4,
        },
      },
	});

	const commonSwiperNews = new Swiper(".swiper-news", {
		modules: [Pagination, Autoplay],
		loop: true,
		spaceBetween: 30,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: 4,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			1050: {
				slidesPerView: 2,
			},
			1300: {
			  slidesPerView: 3,
			},
		},
	});
}


export default swiper;
// export default commonCardSwiper; 
