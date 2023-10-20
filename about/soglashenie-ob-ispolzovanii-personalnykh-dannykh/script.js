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
