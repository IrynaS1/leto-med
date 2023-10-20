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

const input = document.querySelector("#user_phone");
window.intlTelInput(input, {
	utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});

function serializeForm(formNode) {
	const { elements } = formNode;
	const data = Array.from(elements)
		.filter((item) => !!item.name)
		.map((element) => {
			const { name, value } = element;

			return { name, value }
		})

	console.log(data);
}

function handleFormSubmit(event) {
	event.preventDefault();
	serializeForm(form);
}

const form = document.querySelector('.form-contacts__form');
form.addEventListener('submit', handleFormSubmit);

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
