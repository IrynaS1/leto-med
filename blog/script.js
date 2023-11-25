const cityUserBtn = document.querySelector('.header-block__location-city-name');
cityUserBtn.addEventListener('click', function () {
	document.querySelector('.header-block__location-city-select').classList.toggle('header-select-city');
});

const cityConfirm = document.querySelector('.header-select-city__confirm');
cityConfirm.addEventListener('click', function () {
	const tooltip = document.querySelector('.header-block__location-city-select');
	cityUserBtn.innerHTML = 'Москва';
	tooltip.classList.add('header-select-city');
});

const citySelect = document.querySelector('#city-select');
citySelect.addEventListener('change', function () {
	const citySelectInd = citySelect.selectedIndex;
	const citySelectText = citySelect.options[citySelectInd].text;
	cityUserBtn.innerHTML = citySelectText;
	document.querySelector('.header-block__location-city-select').classList.add('header-select-city');
});

const cityMobUserBtn = document.querySelector('.footer__mob-location');
cityMobUserBtn.addEventListener('click', function () {
	document.querySelector('.footer-block__location-city-select').classList.add('footer-select-city');
});

const cityMobConfirm = document.querySelector('.footer-select-city__confirm');
cityMobConfirm.addEventListener('click', function () {
	const mobTooltip = document.querySelector('.footer-block__location-city-select');
	cityMobUserBtn.innerHTML = 'Москва';
	mobTooltip.classList.add('footer-select-city');
});

const mobCitySelect = document.querySelector('#mob-city-select');
mobCitySelect.addEventListener('change', function () {
	const citySelectInd = mobCitySelect.selectedIndex;
	const citySelectText = mobCitySelect.options[citySelectInd].text;
	cityMobUserBtn.innerHTML = citySelectText;
	document.querySelector('.footer-block__location-city-select').classList.add('footer-select-city');
});

const menuBtn = document.querySelector('.m-menu-js');
const mobOverlay = document.querySelector('.mob-modal-overlay');
const menu = document.querySelector('.menu-mob-modal');
const catalogBtn = document.querySelector('.m-catalog-js');
const catalog = document.querySelector('.catalog-mob-modal');
const btnCloseCatalog = document.querySelector('.footer__mob-catalog-close');
const returnBtns = document.querySelectorAll('.mob-btn-back-js');
const subTitles = document.querySelectorAll('.footer__mob-subtitle');

menuBtn.addEventListener('click', function () {
	mobOverlay.classList.add('mob-modal-overlay--open');
	menu.classList.add('modal--active');
	menuBtn.classList.add('mob-menu--active');
});

catalogBtn.addEventListener('click', function () {
	mobOverlay.classList.add('mob-modal-overlay--open');
	catalog.classList.add('modal--active');
	catalogBtn.classList.add('mob-catalog--active');
});

btnCloseCatalog.addEventListener('click', function () {
	mobOverlay.classList.remove('mob-modal-overlay--open');
	catalog.classList.remove('modal--active');
	catalogBtn.classList.remove('mob-catalog--active');
});

mobOverlay.addEventListener('click', function () {
	document.querySelector('.modal--active').classList.remove('modal--active');
	mobOverlay.classList.toggle('mob-modal-overlay--open');
	menuBtn.classList.remove('mob-menu--active');
	catalogBtn.classList.remove('mob-catalog--active');
});

catalog.addEventListener('click', function (e) {
	e.preventDefault();
	subTitles.forEach(function (el) {
		if (el.textContent === e.target.textContent) {
			el.closest('.subsection-mob-modal').classList.add('modal--active');
			catalog.classList.remove('modal--active');
		}
	});
});

returnBtns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		e.preventDefault();
		e.target.closest('.subsection-mob-modal').classList.remove('modal--active');
		catalog.classList.add('modal--active');
	});
});

const subsections = document.querySelectorAll('.subsection-mob-modal');
subsections.forEach(function (sub) {
	sub.addEventListener('click', function (e) {
		if (e.target.className === 'footer__mob-catalog-close subsection-close-btn-js') {
			e.target.closest('.subsection-mob-modal').classList.remove('modal--active');
			mobOverlay.classList.toggle('mob-modal-overlay--open');
			catalogBtn.classList.remove('mob-catalog--active');
		}
		if (e.target.className === 'footer__mob-back mob-btn-back-js') {
			e.target.closest('.subsection-mob-modal').classList.remove('modal--active');
			catalog.classList.add('modal--active');
		}
	});
});

const regBtn = document.querySelector('.header-menu__reg'),
	overlay = document.querySelector('.overlay'),
	modalReg = document.querySelector('.modal-reg'),
	modalAuth = document.querySelector('.modal-auth'),
	modalRecovery = document.querySelector('.modal-recovery'),
	inputsPassword = document.querySelectorAll('.modal-form__input-password'),
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
	mobAuth.classList.add('mob-auth--active');
});

const recoveryBtn = document.querySelector('.recovery-password');
recoveryBtn.addEventListener('click', function () {
	modalAuth.classList.remove('modal--open');
	modalRecovery.classList.add('modal--open');
});

const registrationBtn = document.querySelector('.registration');
registrationBtn.addEventListener('click', function () {
	modalAuth.classList.remove('modal--open');
	modalReg.classList.add('modal--open');
});

inputsPassword.forEach(function (el) {
	el.addEventListener('click', function (e) {
		const passwordEye = e.target.nextElementSibling;
		passwordEye.classList.add('show--password');
		passwordEye.addEventListener('click', function () {
			passwordEye.classList.toggle('show--password');
			passwordEye.classList.toggle('close--password');
			if (el.getAttribute('type') === 'password') {
				el.setAttribute('type', 'text');
			} else {
				el.setAttribute('type', 'password');
			}
		});
	});
});

overlay.addEventListener('click', function () {
	overlay.classList.remove('overlay--open');
	modalReg.classList.remove('modal--open');
	modalAuth.classList.remove('modal--open');
	modalRecovery.classList.remove('modal--open');
	mobAuth.classList.remove('mob-auth--active');
});

const footerLocBtn = document.querySelector('.footer__mob-location');
footerLocBtn.addEventListener('click', function () {
	document.querySelector('.footer-block__location-city-select').classList.toggle('footer-select-city');
}); 