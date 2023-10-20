navigator.geolocation.getCurrentPosition(success, error, options)

function error() {
	alert('Где ты вообще...'); // на случай ошибки
}

const options = {
	enableHighAccuracy: true,
	maximumAge: 1000,
	timeout: 3600
};

const menuBtn = document.querySelector('.m-menu-js');
const menu = document.querySelector('.wrap-mob-menu');
const catalogBtn = document.querySelector('.m-catalog-js');
const catalog = document.querySelector('.wrap-mob-catalog');
const catalogBtnClose = document.querySelector('.footer__mob-catalog-close');
const footerCatalog = document.querySelector('.footer__mob-catalog');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('opacity');
});

catalogBtn.addEventListener('click', () => {
	catalog.classList.toggle('opacity');
});

catalogBtnClose.addEventListener('click', () => {
	catalog.classList.add('opacity');
});

footerCatalog.addEventListener('click', (e) => {
	e.preventDefault();
	const event = e.target;

	/* 	
		subsection.classList.remove('opacity');
		catalog.classList.add('opacity'); */

	console.log(event);
	const title = event.textContent;

	console.log(title);
	//catalog.replaceChild(subcection, footerCatalog);
});

