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




let span = document.querySelectorAll('span');

// span.addEventListener("click", () => {
// 	span.style.backgroundColor = "red";
// });


span.forEach(spanI => {
	spanI.addEventListener("click", () => {
		spanI.classList.toggle("activeSpan")
	});
});