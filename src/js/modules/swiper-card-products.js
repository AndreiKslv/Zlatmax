import starRating from "./star-rating"

function swiperCardProducts() {
	const productsData = [
		{
			id: 1,
			title: "Чёрный",
			imgSrc: "knife-1.webp",
			discount: 0,
			price: 5100,
			production: "АиР",
			steel: "100х13М",
			hilt: "Mercorne",
			pommel: "Алюминий",
			gilding: "Золочение клинка",
			totalLength: 300,
			bladeLength: 170,
			bladeWidth: 35,
			feedback: 255,
			rating: 3,
		},

		{
			id: 2,
			title: "Армейский",
			imgSrc: "knife-2.webp",
			discount: 0,
			price: 7500,
			production: "Булат Сергея Баранова",
			steel: "110х18М-ШД",
			hilt: "Березовый кап",
			pommel: "Латунь",
			gilding: "Золочение рисунка на клинке",
			totalLength: 350,
			bladeLength: 190,
			bladeWidth: 40,
			feedback: 22,
			rating: 4,
		},

		{
			id: 3,
			title: "Кухонный",
			imgSrc: "knife-3.webp",
			discount: 5,
			price: 3500,
			production: "Булат Умерова",
			steel: "40х10С2М (ЭИ-107)",
			hilt: "Березовый кап",
			pommel: "Литой Барс",
			gilding: "Золочение рисунка на клинке",
			totalLength: 325,
			bladeLength: 200,
			bladeWidth: 35,
			feedback: 51,
			rating: 3,
		},


		{
			id: 4,
			title: "Керамбит",
			imgSrc: "knife-4.webp",
			discount: 0,
			price: 129000,
			production: "ЗЗОСС",
			steel: "50х14МФ",
			hilt: "Бубинго",
			pommel: "Литой Пума",
			gilding: "Без золочения",
			totalLength: 350,
			bladeLength: 300,
			bladeWidth: 35,
			feedback: 94,
			rating: 5,
		},

		{
			id: 5,
			title: "Армейский",
			imgSrc: "knife-5.webp",
			discount: 15,
			price: 4290,
			production: "ЗИК",
			steel: "95х18",
			hilt: "Граб",
			pommel: "Литье",
			gilding: "Без золочения",
			totalLength: 350,
			bladeLength: 300,
			bladeWidth: 35,
			feedback: 94,
			rating: 3,
		},

		{
			id: 6,
			title: "Нож Кол",
			imgSrc: "knife-6.webp",
			discount: 15,
			price: 12900,
			production: "ЗЛАТКО",
			steel: "AUS-8",
			hilt: "Дуб",
			pommel: "Металлический",
			gilding: "Золочение рисунка на клинке",
			totalLength: 350,
			bladeLength: 300,
			bladeWidth: 35,
			feedback: 94,
			rating: 5,
		},

		{
			id: 7,
			title: "Зубочистка",
			imgSrc: "knife-7.webp",
			discount: 15,
			price: 2000,
			production: "ЗлатПрофит",
			steel: "ELMAX",
			hilt: "Орех",
			pommel: "Нержавеющая сталь",
			gilding: "Золочение рисунка на клинке",
			totalLength: 350,
			bladeLength: 300,
			bladeWidth: 35,
			feedback: 94,
			rating: 5,
		},

		{
			id: 8,
			title: "Золотник",
			imgSrc: "knife-8.webp",
			discount: 15,
			price: 9999,
			production: "ЗОК",
			steel: "RWL-34",
			hilt: "Кап",
			pommel: "Текстолит",
			gilding: "Золочение клинка",
			totalLength: 350,
			bladeLength: 300,
			bladeWidth: 35,
			feedback: 94,
			rating: 2,
		},

		{
			id: 9,
			title: "Красный керамбит",
			imgSrc: "knife-9.webp",
			discount: 15,
			price: 139000,
			production: "НБК",
			steel: "Дамаск",
			hilt: "Комбинированная",
			pommel: "Латунь",
			gilding: "Золочение клинка",
			totalLength: 350,
			bladeLength: 300,
			bladeWidth: 35,
			feedback: 94,
			rating: 5,
		},

		{
			id: 10,
			title: "Деревянный Керамбит",
			imgSrc: "knife-10.webp",
			discount: 95,
			price: 2000,
			production: "Булат Умерова",
			steel: "40х10С2М (ЭИ-107)",
			hilt: "Дуб",
			pommel: "Текстолит",
			gilding: "Без золочения",
			totalLength: 240,
			bladeLength: 120,
			bladeWidth: 45,
			feedback: 394,
			rating: 5,
		},

		{
			id: 11,
			title: "Армейский",
			imgSrc: "knife-11.webp",
			discount: 15,
			price: 2500,
			production: "Оружейник",
			steel: "К340",
			hilt: "Каштан",
			pommel: "Латунь",
			gilding: "Золочение клинка",
			totalLength: 350,
			bladeLength: 300,
			bladeWidth: 35,
			feedback: 94,
			rating: 2,
		},

		{
			id: 12,
			title: "Нож Полли",
			imgSrc: "knife-12.webp",
			discount: 15,
			price: 150000,
			production: "РОСоружие",
			steel: "Литой булат",
			hilt: "Квартопрен",
			pommel: "Латунь",
			gilding: "Золочение клинка",
			totalLength: 350,
			bladeLength: 300,
			bladeWidth: 35,
			feedback: 94,
			rating: 5,
		},

		{
			id: 13,
			title: "Армейский золотой",
			imgSrc: "knife-13.webp",
			discount: 15,
			price: 49900,
			production: "СТИЛЬ-М",
			steel: "М390",
			hilt: "Кожа-Металл",
			pommel: "Латунь",
			gilding: "Золочение рисунка на клинке",
			totalLength: 350,
			bladeLength: 300,
			bladeWidth: 35,
			feedback: 94,
			rating: 4,
		},

		{
			id: 14,
			title: "Кухонный расписной",
			imgSrc: "knife-14.webp",
			discount: 15,
			price: 25000,
			production: "АиР",
			steel: "Дамаск",
			hilt: "Mercorne",
			pommel: "Латунь",
			gilding: "Золочение рисунка на клинке",
			totalLength: 350,
			bladeLength: 300,
			bladeWidth: 35,
			feedback: 94,
			rating: 1,
		},

		{
			id: 15,
			title: "Бирюзовый Дракон",
			imgSrc: "knife-15.webp",
			discount: 0,
			price: 109000,
			production: "Булат Сергея Баранова",
			steel: "Дамаск",
			hilt: "Mercorne",
			pommel: "Латунь",
			gilding: "Золочение рисунка на клинке",
			totalLength: 400,
			bladeLength: 150,
			bladeWidth: 30,
			feedback: 24,
			rating: 5,
		},

		{
			id: 16,
			title: "Нож Человека-Паука",
			imgSrc: "knife-16.webp",
			discount: 0,
			price: 125000,
			production: "АиР",
			steel: "100х13М",
			hilt: "Кап",
			pommel: "Литье",
			gilding: "Золочение клинка",
			totalLength: 300,
			bladeLength: 170,
			bladeWidth: 35,
			feedback: 253,
			rating: 5,
		},

		{
			id: 17,
			title: "Нож Hello Kitty",
			imgSrc: "knife-17.webp",
			discount: 0,
			price: 49990,
			production: "НБК",
			steel: "40х10С2М (ЭИ-107)",
			hilt: "Квартопрен",
			pommel: "Текстолит",
			gilding: "Без золочения",
			totalLength: 300,
			bladeLength: 170,
			bladeWidth: 35,
			feedback: 777,
			rating: 5,
		},

		{
			id: 18,
			title: "Осколок Азинота",
			imgSrc: "knife-18.webp",
			discount: 0,
			price: 75000,
			production: "НБК",
			steel: "40х10С2М (ЭИ-107)",
			hilt: "Квартопрен",
			pommel: "Текстолит",
			gilding: "Без золочения",
			totalLength: 340,
			bladeLength: 190,
			bladeWidth: 50,
			feedback: 1290,
			rating: 3,
		},

		{
			id: 19,
			title: "Разноцветный ржавый",
			imgSrc: "knife-19.webp",
			discount: 15,
			price: 33000,
			production: "ЗлатПрофит",
			steel: "AUS-8",
			hilt: "Квартопрен",
			pommel: "Текстолит",
			gilding: "Без золочения",
			totalLength: 450,
			bladeLength: 220,
			bladeWidth: 34,
			feedback: 99,
			rating: 3,
		},

		{
			id: 20,
			title: "Керамбит Человека-Паука",
			imgSrc: "knife-20.webp",
			discount: 25,
			price: 4900,
			production: "ЗлатПрофит",
			steel: "AUS-8",
			hilt: "Квартопрен",
			pommel: "Текстолит",
			gilding: "Без золочения",
			totalLength: 200,
			bladeLength: 90,
			bladeWidth: 50,
			feedback: 99,
			rating: 3,
		},

		{
			id: 21,
			title: "SOG",
			imgSrc: "knife-21.webp",
			discount: 65,
			price: 5500,
			production: "СТИЛЬ-М",
			steel: "М390",
			hilt: "Квартопрен",
			pommel: "Текстолит",
			gilding: "Без золочения",
			totalLength: 250,
			bladeLength: 100,
			bladeWidth: 40,
			feedback: 2,
			rating: 1,
		},

		{
			id: 22,
			title: "Армейский Чёрный",
			imgSrc: "knife-22.webp",
			discount: 10,
			price: 8000,
			production: "НБК",
			steel: "RWL-34",
			hilt: "Березовый кап",
			pommel: "Нержавеющая сталь",
			gilding: "Без золочения",
			totalLength: 150,
			bladeLength: 50,
			bladeWidth: 50,
			feedback: 5,
			rating: 3,
		},

		{
			id: 23,
			title: "Осколок Азинота 2",
			imgSrc: "knife-23.webp",
			discount: 20,
			price: 65000,
			production: "ЗЗОСС",
			steel: "50х14МФ",
			hilt: "Кап",
			pommel: "Латунь",
			gilding: "Без золочения",
			totalLength: 500,
			bladeLength: 400,
			bladeWidth: 120,
			feedback: 439,
			rating: 5,
		},

		{
			id: 24,
			title: "Ледяной осколок",
			imgSrc: "knife-24.webp",
			discount: 0,
			price: 99999,
			production: "ЗЗОСС",
			steel: "50х14МФ",
			hilt: "Кап",
			pommel: "Латунь",
			gilding: "Без золочения",
			totalLength: 600,
			bladeLength: 320,
			bladeWidth: 150,
			feedback: 5634,
			rating: 5,
		},

		{
			id: 25,
			title: "Бамбуковая Бабочка",
			imgSrc: "knife-25.webp",
			discount: 0,
			price: 7777,
			production: "АиР",
			steel: "ELMAX",
			hilt: "Mercorne",
			pommel: "Литой Пума",
			gilding: "Без золочения",
			totalLength: 1000,
			bladeLength: 500,
			bladeWidth: 190,
			feedback: 53,
			rating: 5,
		},

		{
			id: 26,
			title: "Circle",
			imgSrc: "knife-26.webp",
			discount: 0,
			price: 3000,
			production: "Булат Сергея Баранова",
			steel: "110х18М-ШД",
			hilt: "Кап",
			pommel: "Литой Барс",
			gilding: "Золочение клинка",
			totalLength: 450,
			bladeLength: 250,
			bladeWidth: 100,
			feedback: 13,
			rating: 2,
		},

		{
			id: 27,
			title: "Silver Surfer",
			imgSrc: "knife-27.webp",
			discount: 0,
			price: 70000,
			production: "Булат Сергея Баранова",
			steel: "50х14МФ",
			hilt: "Комбинированная",
			pommel: "Алюминий",
			gilding: "Золочение клинка",
			totalLength: 350,
			bladeLength: 300,
			bladeWidth: 120,
			feedback: 100,
			rating: 5,
		},

		{
			id: 28,
			title: "Кервин",
			imgSrc: "knife-28.webp",
			discount: 0,
			price: 12000,
			production: "ЗИК",
			steel: "К340",
			hilt: "Бубинго",
			pommel: "Металлический",
			gilding: "Золочение клинка",
			totalLength: 550,
			bladeLength: 350,
			bladeWidth: 135,
			feedback: 2341,
			rating: 4,
		},

		{
			id: 29,
			title: "Синяя Акула",
			imgSrc: "knife-29.webp",
			discount: 0,
			price: 39500,
			production: "ЗлатПрофит",
			steel: "100х13М",
			hilt: "Березовый кап",
			pommel: "Нержавеющая сталь",
			gilding: "Без золочения",
			totalLength: 650,
			bladeLength: 400,
			bladeWidth: 130,
			feedback: 1906,
			rating: 5,
		},

		{
			id: 30,
			title: "Стриж",
			imgSrc: "knife-30.webp",
			discount: 25,
			price: 64000,
			production: "АиР",
			steel: "AUS-8",
			hilt: "Орех",
			pommel: "Литье",
			gilding: "Без золочения",
			totalLength: 800,
			bladeLength: 450,
			bladeWidth: 145,
			feedback: 126,
			rating: 5,
		},

		{
			id: 31,
			title: "Izula",
			imgSrc: "knife-31.webp",
			discount: 90,
			price: 3400,
			production: "РОСоружие",
			steel: "95х18",
			hilt: "Кожа-Металл",
			pommel: "Нержавеющая сталь",
			gilding: "Без золочения",
			totalLength: 950,
			bladeLength: 650,
			bladeWidth: 160,
			feedback: 9,
			rating: 3,
		},

		{
			id: 32,
			title: "Чёрная Акула",
			imgSrc: "knife-32.webp",
			discount: 0,
			price: 7500,
			production: "Булат Умерова",
			steel: "RWL-34",
			hilt: "Каштан",
			pommel: "Текстолит",
			gilding: "Без золочения",
			totalLength: 750,
			bladeLength: 500,
			bladeWidth: 10,
			feedback: 86,
			rating: 4,
		},

		{
			id: 33,
			title: "Walther",
			imgSrc: "knife-33.webp",
			discount: 35,
			price: 34500,
			production: "ЗИК",
			steel: "ELMAX",
			hilt: "Квартопрен",
			pommel: "Алюминий",
			gilding: "Без золочения",
			totalLength: 500,
			bladeLength: 350,
			bladeWidth: 110,
			feedback: 931,
			rating: 4,
		},

		{
			id: 34,
			title: "Ядовитая Бабочка",
			imgSrc: "knife-34.webp",
			discount: 0,
			price: 8890,
			production: "ЗИК",
			steel: "AUS-8",
			hilt: "Квартопрен",
			pommel: "Латунь",
			gilding: "Без золочения",
			totalLength: 500,
			bladeLength: 350,
			bladeWidth: 110,
			feedback: 634,
			rating: 4,
		},

		{
			id: 35,
			title: "Токсичная Бабочка",
			imgSrc: "knife-35.webp",
			discount: 0,
			price: 12300,
			production: "НБК",
			steel: "Литой булат",
			hilt: "Кожа-Металл",
			pommel: "Литой Пума",
			gilding: "Без золочения",
			totalLength: 500,
			bladeLength: 350,
			bladeWidth: 110,
			feedback: 63,
			rating: 2,
		},

		{
			id: 36,
			title: "Тесак SOG",
			imgSrc: "knife-36.webp",
			discount: 0,
			price: 5000,
			production: "НБК",
			steel: "Литой булат",
			hilt: "Кожа-Металл",
			pommel: "Литой Пума",
			gilding: "Без золочения",
			totalLength: 500,
			bladeLength: 350,
			bladeWidth: 110,
			feedback: 68,
			rating: 2,
		},

		{
			id: 37,
			title: "Эбонитовый Кунай",
			imgSrc: "knife-37.webp",
			discount: 65,
			price: 15000,
			production: "НБК",
			steel: "Литой булат",
			hilt: "Кожа-Металл",
			pommel: "Литой Пума",
			gilding: "Без золочения",
			totalLength: 500,
			bladeLength: 350,
			bladeWidth: 110,
			feedback: 14,
			rating: 1,
		},

		{
			id: 38,
			title: "AAA",
			imgSrc: "knife-38.webp",
			discount: 65,
			price: 79900,
			production: "НБК",
			steel: "Литой булат",
			hilt: "Кожа-Металл",
			pommel: "Литой Пума",
			gilding: "Без золочения",
			totalLength: 550,
			bladeLength: 450,
			bladeWidth: 130,
			feedback: 199,
			rating: 3,
		},

		{
			id: 39,
			title: "GERBER",
			imgSrc: "knife-39.webp",
			discount: 5,
			price: 54900,
			production: "НБК",
			steel: "Литой булат",
			hilt: "Кожа-Металл",
			pommel: "Литой Пума",
			gilding: "Без золочения",
			totalLength: 550,
			bladeLength: 450,
			bladeWidth: 130,
			feedback: 481,
			rating: 4,
		},

		{
			id: 40,
			title: "Отвертка",
			imgSrc: "knife-40.webp",
			discount: 15,
			price: 54900,
			production: "АиР",
			steel: "ELMAX",
			hilt: "Кожа-Металл",
			pommel: "Литой Пума",
			gilding: "Без золочения",
			totalLength: 550,
			bladeLength: 450,
			bladeWidth: 130,
			feedback: 5,
			rating: 1,
		},

		{
			id: 41,
			title: "Киви",
			imgSrc: "knife-41.webp",
			discount: 90,
			price: 2400,
			production: "ЗОК",
			steel: "ELMAX",
			hilt: "Кожа-Металл",
			pommel: "Литой Пума",
			gilding: "Без золочения",
			totalLength: 550,
			bladeLength: 450,
			bladeWidth: 130,
			feedback: 18,
			rating: 1,
		},

		{
			id: 42,
			title: "Mtech",
			imgSrc: "knife-42.webp",
			discount: 90,
			price: 10000,
			production: "Оружейник",
			steel: "М390",
			hilt: "Комбинированная",
			pommel: "Латунь",
			gilding: "Без золочения",
			totalLength: 550,
			bladeLength: 450,
			bladeWidth: 130,
			feedback: 94,
			rating: 4,
		},

		{
			id: 43,
			title: "Звёздная Бабочка",
			imgSrc: "knife-43.webp",
			discount: 90,
			price: 11000,
			production: "Оружейник",
			steel: "М390",
			hilt: "Комбинированная",
			pommel: "Латунь",
			gilding: "Без золочения",
			totalLength: 550,
			bladeLength: 450,
			bladeWidth: 130,
			feedback: 150,
			rating: 3,
		},

		{
			id: 44,
			title: "Рубин",
			imgSrc: "knife-44.webp",
			discount: 90,
			price: 136000,
			production: "Оружейник",
			steel: "М390",
			hilt: "Комбинированная",
			pommel: "Латунь",
			gilding: "Без золочения",
			totalLength: 550,
			bladeLength: 450,
			bladeWidth: 130,
			feedback: 978,
			rating: 5,
		},

		{
			id: 45,
			title: "KA-BAR",
			imgSrc: "knife-45.webp",
			discount: 90,
			price: 2000,
			production: "Оружейник",
			steel: "М390",
			hilt: "Комбинированная",
			pommel: "Латунь",
			gilding: "Без золочения",
			totalLength: 550,
			bladeLength: 450,
			bladeWidth: 130,
			feedback: 2,
			rating: 1,
		},

	]
	const flashLights = [
		{
			id: 1,
			title: "Uniel",
			imgSrc: "flashlight-1.jpg",
			discount: 10,
			steel: "100х13М",
			price: 1200,
			hilt: "Mercorne",
			pommel: "Алюминий",
			feedback: 15,
			rating: 2,
		},

		{
			id: 2,
			title: "Red",
			imgSrc: "flashlight-2.jpg",
			discount: 0,
			steel: "100х13М",
			price: 5200,
			hilt: "Mercorne",
			pommel: "Рубиний",
			feedback: 232,
			rating: 4,
		},

		{
			id: 3,
			title: "Black Stick",
			imgSrc: "flashlight-3.jpg",
			discount: 0,
			steel: "100х13М",
			price: 3500,
			hilt: "Mercorne",
			pommel: "Торий",
			feedback: 592,
			rating: 3,
		},

		{
			id: 4,
			title: "Small Red",
			imgSrc: "flashlight-4.jpg",
			discount: 0,
			steel: "100х13М",
			price: 2500,
			hilt: "Mercorne",
			pommel: "Рубиний",
			feedback: 19,
			rating: 3,
		},

		{
			id: 5,
			title: "P20",
			imgSrc: "flashlight-5.jpg",
			discount: 15,
			steel: "100х13М",
			price: 4500,
			hilt: "Mercorne",
			pommel: "Плутоний",
			feedback: 55,
			rating: 4,
		},

		{
			id: 6,
			title: "Silver Orange",
			imgSrc: "flashlight-6.jpg",
			discount: 5,
			steel: "100х13М",
			price: 7500,
			hilt: "Mercorne",
			pommel: "Алюминий",
			feedback: 869,
			rating: 5,
		},

		{
			id: 7,
			title: "Blacklight",
			imgSrc: "flashlight-7.jpg",
			discount: 50,
			steel: "100х13М",
			price: 7500,
			hilt: "Mercorne",
			pommel: "Алюминий",
			feedback: 54,
			rating: 2,
		},

		{
			id: 8,
			title: "Blackbutton",
			imgSrc: "flashlight-8.jpg",
			discount: 70,
			steel: "100х13М",
			price: 2500,
			hilt: "Mercorne",
			pommel: "Алюминий",
			feedback: 9,
			rating: 1,
		},
	]

	let data = [...productsData]
	let flashLightsData = [...flashLights]
	const sortedCardsByFeedback = data.sort((a, b) => b.feedback - a.feedback).slice(0, 8)
	const sortedCardsByDiscount = data.sort((a, b) => b.discount - a.discount).slice(0, 8)
	const sortedCardsByDiscount2 = data.sort((a, b) => b.discount - a.discount).slice(8, 16)
	const sortedCardsByDiscount3 = data.sort((a, b) => b.discount - a.discount).slice(16, 24)
	const sortedCardsByDiscount4 = data.sort((a, b) => b.discount - a.discount).slice(24, 32)
	const sortedCardsByNews = data.sort((a, b) => a.feedback - b.feedback).slice(0, 8)
	const sortedCardsByNews2 = data.sort((a, b) => a.feedback - b.feedback).slice(8, 16)
	
	const swiperHits = document.querySelector('.swiper-hits')
	const swiperDiscount = document.querySelector('.swiper-discounts')
	const swiperDiscount2 = document.querySelector('.swiper-discounts2')
	const swiperDiscount3 = document.querySelector('.swiper-discounts3')
	const swiperDiscount4 = document.querySelector('.swiper-discounts4')
	const swiperNews = document.querySelector('.swiper-news')
	const swiperNews2 = document.querySelector('.swiper-news2')
	const swiperFlashlights = document.querySelector('.swiper-flashlights')

	if (swiperHits) {
		const swiperHitsItems = swiperHits.querySelectorAll('.common-card-swiper__item')
		renderProducts(sortedCardsByFeedback, swiperHitsItems)
	}

	if (swiperDiscount) {
		const swiperDiscountItems = swiperDiscount.querySelectorAll('.common-card-swiper__item')
		renderProducts(sortedCardsByDiscount, swiperDiscountItems)
	}

	if (swiperDiscount2) {
		const swiperDiscount2Items = swiperDiscount2.querySelectorAll('.common-card-swiper__item')
		renderProducts(sortedCardsByDiscount2, swiperDiscount2Items)
	}

	if (swiperDiscount3) {
		const swiperDiscount3Items = swiperDiscount3.querySelectorAll('.common-card-swiper__item')
		renderProducts(sortedCardsByDiscount3, swiperDiscount3Items)
	}

	if (swiperDiscount4) {
		const swiperDiscount4Items = swiperDiscount4.querySelectorAll('.common-card-swiper__item')
		renderProducts(sortedCardsByDiscount4, swiperDiscount4Items)
	}

	if (swiperNews) {
		const swiperNewsItems = swiperNews.querySelectorAll('.common-card-swiper__item')
		renderProducts(sortedCardsByNews, swiperNewsItems)	
	}

	if (swiperNews2) {
		const swiperNews2Items = swiperNews2.querySelectorAll('.common-card-swiper__item')
		renderProducts(sortedCardsByNews2, swiperNews2Items)	
	}

	if (swiperFlashlights) {
		const swiperFlashlightsItems = swiperFlashlights.querySelectorAll('.common-card-swiper__item')
		renderProducts(flashLightsData, swiperFlashlightsItems)
	} 

	function renderProducts(arr, coll) {
		arr.forEach(function (item, index) {
			const cardDiscount = item.discount > 0 ?
				`<div class="common-card__discount">
				<a class="common-card__discount-link" href="inspect.html">
					<span class="common-card__discount-number">-${item.discount}%</span>
				</a>
			</div>` : ''

			const productHTML = `
			<article class="filter__grid-item common-card">
				${cardDiscount}
				<div class="common-card__wrapper">
					<div class="common-card__img-wrapper">
						<a class="common-card__img-link" href="inspect.html">
							<img class="common-card__img" src="./img/common-card/${item.imgSrc}" alt="Нож">
						</a>
					</div>
					<h4 class="common-card__title">
						<a class="common-card__title-link" href="inspect.html">${item.title}</a>
					</h4>
					<div class="common-card__card-info">
						<span class="common-card__product-size">${item.steel}</span>
						<span class="common-card__product-materials">${item.hilt}, ${item.pommel}</span>
					</div>
					<div class="common-card__rating">
						<div class="rating rating_set" data-ajax="true">
							<div class="rating__body">
								<div class="rating__active"></div>
								<div class="rating__items">
									<input class="rating__item" type="radio" value="1" name="rating">
									<input class="rating__item" type="radio" value="2" name="rating">
									<input class="rating__item" type="radio" value="3" name="rating">
									<input class="rating__item" type="radio" value="4" name="rating">
									<input class="rating__item" type="radio" value="5" name="rating">
								</div>
							</div>
							<div class="rating__value">${item.rating}</div>
						</div>
						<div class="common-card__feedback"><span class="common-card__feedback-number">${item.feedback}</span>
							отзывов</div>
					</div>
					<div class="common-card__price-info">
						<div class="common-card__price">
							<a class="common-card__price-link" href="inspect.html">
								<span class="common-card__price-number">${item.price}</span> р.
							</a>
						</div>
						<div class="common-card__icons">
							<a class="common-card__icon-link" href="#!">
								<img class="common-card__icon" src="./img/icons/scales.svg" alt="Весы">
							</a>
							<a class="common-card__icon-link" href="#!">
								<img class="common-card__icon" src="./img/icons/accent-heart.svg" alt="Сердце">
							</a>
						</div>
					</div>
				</div>
				<a class="button button--mobile" href="inspect.html">
					В корзину
					<img class="button__img" src="./img/icons/cart-button.svg" alt="Корзина">
				</a>
			</article>
			`
			
			coll[index].insertAdjacentHTML('beforeend', productHTML)
			starRating()
		})
	}
}

export default swiperCardProducts