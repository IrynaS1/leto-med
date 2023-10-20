const geoBtn = document.querySelector('.header-block__location-city-name');
/* 
geoBtn.addEventListener('click', findLocation) // на клик по кнопке ищем локацию

function findLocation() {
	if (!navigator.geolocation) {
		status.textContent = 'Ваш браузер не дружит с геолокацией...'
	} else {
		navigator.geolocation.getCurrentPosition(success, error)
	}

	function success(position) {  // если всё хорошо, собираем ссылку
		const { longitude, latitude } = position.coords;
		console.log('ping    ');
		console.log('longitude    ', longitude);
		console.log('latitude    ', latitude);

		//map.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude}%2C${latitude}&amp;layer=mapnik`
	}

	function error() { // если всё плохо, просто напишем об этом
		status.textContent = 'Не получается определить вашу геолокацию :('
	}
}
 */

const sliderImgs = document.querySelectorAll('good__block-slider-img');


const cityUserBtn = document.querySelector('.header-block__location-city-name');
cityUserBtn.addEventListener('click', function () {
	const tooltip = document.querySelector('.header-block__location-city-select');
	tooltip.classList.toggle('header-select-city');
});

const cityConfirm = document.querySelector('.header-select-city__confirm');
cityConfirm.addEventListener('click', function () {
	const tooltip = document.querySelector('.header-block__location-city-select');
	tooltip.classList.add('header-select-city');
});

const citySelect = document.querySelector('#city-select');
citySelect.addEventListener('change', function () {
	let citySelectInd = citySelect.selectedIndex;
	const citySelectText = citySelect.options[citySelectInd].text;
	cityUserBtn.innerHTML = citySelectText;
	const tooltip = document.querySelector('.header-block__location-city-select');
	tooltip.classList.add('header-select-city');
});
