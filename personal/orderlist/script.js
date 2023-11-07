const cityUserBtn = document.querySelector('.header-block__location-city-name');
cityUserBtn.addEventListener('click', function () {
	const tooltip = document.querySelector('.header-block__location-city-select');
	tooltip.classList.toggle('header-select-city');
});

const cityConfirm = document.querySelector('.header-select-city__confirm');
cityConfirm.addEventListener('click', function () {
	const tooltip = document.querySelector('.header-block__location-city-select');
	cityUserBtn.innerHTML = 'Москва';
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

const cityMobUserBtn = document.querySelector('.footer__mob-location');
cityMobUserBtn.addEventListener('click', function () {
	const tooltip = document.querySelector('.footer-block__location-city-select');
	tooltip.classList.toggle('footer-select-city');
});

const cityMobConfirm = document.querySelector('.footer-select-city__confirm');
cityMobConfirm.addEventListener('click', function () {
	const mobTooltip = document.querySelector('.footer-block__location-city-select');
	cityMobUserBtn.innerHTML = 'Москва';
	mobTooltip.classList.add('footer-select-city');
});

const mobCitySelect = document.querySelector('#mob-city-select');
mobCitySelect.addEventListener('change', function () {
	let citySelectInd = mobCitySelect.selectedIndex;
	const citySelectText = mobCitySelect.options[citySelectInd].text;
	cityMobUserBtn.innerHTML = citySelectText;
	const mobTooltip = document.querySelector('.footer-block__location-city-select');
	mobTooltip.classList.add('footer-select-city');
});

const actionsBtn = document.querySelectorAll('.page-content__order-actions-btn');
actionsBtn.forEach(function (el) {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		const actionsItems = e.target.nextElementSibling;
		actionsItems.classList.toggle('order-action--open');
	});
});

//МОДАЛЬНОЕ ОКНО РЕГИСТРАЦИИ
const regBtn = document.querySelector('.header-menu__reg'),
	overlay = document.querySelector('.overlay'),
	modalReg = document.querySelector('.modal-reg'),
	modalAuth = document.querySelector('.modal-auth'),
	inputPassword = document.querySelectorAll('.modal-form__input-password'),
	authBtn = document.querySelector('.header-menu__auth'),
	mobAuth = document.querySelector('.footer__mob-item-btn_auth');

regBtn.addEventListener('click', function () {
	overlay.classList.add('overlay--open');
	modalReg.classList.add('modal--open');
});

authBtn.addEventListener('click', function () {
	overlay.classList.add('overlay--open');
	modalAuth.classList.add('modal--open');
});

mobAuth.addEventListener('click', function () {
	overlay.classList.add('overlay--open');
	modalAuth.classList.add('modal--open');
})

const passwordEye = document.querySelectorAll('.modal-form__password-eye');
inputPassword.addEventListener('input', function () {
	passwordEye.classList.add('show--password');
});

passwordEye.addEventListener('click', function () {
	passwordEye.classList.toggle('show--password');
	passwordEye.classList.toggle('close--password');

	if (inputPassword.getAttribute('type') === 'password') {
		inputPassword.setAttribute('type', 'text');
	} else {
		inputPassword.setAttribute('type', 'password');
	}
});

overlay.addEventListener('click', function () {
	overlay.classList.remove('overlay--open');
	modalReg.classList.remove('modal--open');
});

