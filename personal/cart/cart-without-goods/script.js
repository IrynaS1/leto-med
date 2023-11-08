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

const menuBtn = document.querySelector('.m-menu-js');
const menu = document.querySelector('.menu-mob-modal');
const catalogBtn = document.querySelector('.m-catalog-js');
const catalog = document.querySelector('.catalog-mob-modal');
const btnCloseCatalog = document.querySelector('.footer__mob-catalog-close');
const returnBtn = document.querySelector('.mob-btn-back-js');

menuBtn.addEventListener('click', function () {
	menu.classList.toggle('modal--active');
});

catalogBtn.addEventListener('click', function () {
	catalog.classList.toggle('modal--active');
});

btnCloseCatalog.addEventListener('click', function () {
	catalog.classList.remove('modal--active');
});

catalog.addEventListener('click', function (e) {
	e.preventDefault();
	if (e.target.className === 'footer__mob-catalog-caption') {
		e.target.nextElementSibling.classList.toggle('modal--active');
		catalog.classList.toggle('modal--active');
	}
});

returnBtn.addEventListener('click', function (e) {
	e.preventDefault();
	const modal = e.target.closest('.subsection-mob-modal');
	modal.classList.remove('modal--active');
	catalog.classList.add('modal--active');
});

//ДОДЕЛАТЬ ЗАКРЫТИ МОДАЛЬНЫХ КЛИКОМ НА ПОДЛОЖКУ
//И ЗАКРЫТИЕ КЛИКОМ НА КРЕСТИК МОДАЛЬНЫХ С ПОДКАТЕГОРИЯМИ

document.body.addEventListener('click', function (e) {
	e.preventDefault();

	if (e.target.className === 'mob-modal-overlay') {
		console.log(e.target);
	}

	if (e.target.className === 'subsection-close-btn-js') {
		console.log(1);
		//const modal = e.target.closest('.subsection-mob-modal');
		//modal.classList.remove('modal--active');
	}
});
