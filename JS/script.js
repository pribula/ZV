const responsiveNavbar = (function () {
	const button = document.querySelector("#menuButton");
	const navbar = document.querySelector("#navbar")
	button.addEventListener("click", function () {
		if (navbar.className === "navbar") {
			navbar.className += " navbarResponsive";
		}
		else {
			navbar.className = "navbar";
		}
	});
})();




function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);










//////////////////////////////////

let input = document.querySelectorAll('input');
let button = document.querySelector('.btns');
let buttonBay = document.querySelector('.checkout');
let BayForm = document.querySelector('.wraperPay');

buttonBay.addEventListener("click", () => {
	BayForm.classList.remove('none')
});

changeColor = () => {
	input[0].value && input[1].value && input[2].value && input[5].value && (input[3].value || input[4].value)
		!== '' ? button.classList.add('active') : '';
}

input.forEach(inputItem => {
	inputItem.addEventListener("input", changeColor);
});



// //від чату джіпіті
// // Функція для показу/приховування елементів
// const toggleElement = (element, className) => {
// 	element.classList.toggle(className);
// };

// // Адаптивна навігація
// const responsiveNavbar = (() => {
// 	const button = document.querySelector("#menuButton");
// 	const navbar = document.querySelector("#navbar");
// 	button.addEventListener("click", () => toggleElement(navbar, 'navbarResponsive'));
// })();

// // Функція для закриття кошика
// const closeCart = () => {
// 	const cart = document.querySelector('.producstOnCart');
// 	toggleElement(cart, 'hide');
// 	toggleElement(document.body, 'stopScrolling');
// };

// // Відкриття та закриття кошика
// const setupCartToggle = () => {
// 	const openShopCart = document.querySelector('.shoppingCartButton');
// 	const closeShopCart = document.querySelector('#closeButton');
// 	const overlay = document.querySelector('.overlay');

// 	openShopCart.addEventListener('click', closeCart);
// 	closeShopCart.addEventListener('click', closeCart);
// 	overlay.addEventListener('click', closeCart);
// };

// // Ініціалізація кошика
// setupCartToggle();

// // Функція для зміни кольору кнопки
// const changeColor = () => {
// 	const inputs = Array.from(document.querySelectorAll('input'));
// 	const button = document.querySelector('.btns');
// 	const filled = inputs.every(input => input.value.trim() !== '');
// 	if (filled) {
// 		button.classList.add('active');
// 	} else {
// 		button.classList.remove('active');
// 	}
// };

// // Ініціалізація слухачів для полів введення
// const setupInputListeners = () => {
// 	const inputs = document.querySelectorAll('input');
// 	inputs.forEach(input => input.addEventListener('input', changeColor));
// };

// // Ініціалізація слухачів для кнопки оплати
// const setupPaymentButton = () => {
// 	const buttonBay = document.querySelector('.checkout');
// 	const BayForm = document.querySelector('.wraperPay');
// 	buttonBay.addEventListener('click', () => {
// 		BayForm.classList.remove('none');
// 	});
// };

// // Ініціалізація всіх слухачів
// const init = () => {
// 	setupInputListeners();
// 	setupPaymentButton();
// };

// init();

